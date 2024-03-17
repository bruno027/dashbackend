"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaioresAtendimentoService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const date_fns_1 = require("date-fns");
class MaioresAtendimentoService {
    execute({ dataInicial, dataFinal }) {
        return __awaiter(this, void 0, void 0, function* () {
            const atendimentos = yield prisma_1.default.atendimento.findMany({
                where: {
                    fim: {
                        gte: new Date(dataInicial + " 00:01:00"),
                        lte: new Date(dataFinal + " 23:59:00"),
                    },
                },
                include: {
                    tecnico: true,
                    bairro: true,
                },
            });
            const estatisticasTipo = {};
            const estatisticasTecnicos = {};
            const estatisticasBairros = {};
            const estatisticasDia = {};
            const estatisticasTipoPorBairro = {};
            atendimentos.forEach(atendimento => {
                // Contagem por tipo
                estatisticasTipo[atendimento.tipo] = (estatisticasTipo[atendimento.tipo] || 0) + 1;
                // Contagem por técnico
                estatisticasTecnicos[atendimento.tecnico.id] = (estatisticasTecnicos[atendimento.tecnico.id] || 0) + 1;
                // Contagem por bairro
                estatisticasBairros[atendimento.bairro.nome] = (estatisticasBairros[atendimento.bairro.nome] || 0) + 1;
                // Contagem por dia
                const dia = (0, date_fns_1.format)(atendimento.fim, "dd/MM/yyyy");
                estatisticasDia[dia] = (estatisticasDia[dia] || 0) + 1;
                // Contagem de tipos por bairro
                const tipo = atendimento.tipo;
                const bairro = atendimento.bairro.nome;
                if (!estatisticasTipoPorBairro[bairro]) {
                    estatisticasTipoPorBairro[bairro] = {};
                }
                estatisticasTipoPorBairro[bairro][tipo] = (estatisticasTipoPorBairro[bairro][tipo] || 0) + 1;
            });
            const resultado = {
                instalacao_quantidade: estatisticasTipo["INSTALACAO"] || 0,
                suporte_quantidade: estatisticasTipo["SUPORTE"] || 0,
                mudanca_quantidade: estatisticasTipo["MUDANCA DE ENDERECO"] || 0,
                tecnicos: Object.entries(estatisticasTecnicos).map(([id, quantidade]) => {
                    var _a;
                    return ({
                        id: parseInt(id),
                        nome: (_a = atendimentos.find(atendimento => atendimento.tecnico.id === parseInt(id))) === null || _a === void 0 ? void 0 : _a.tecnico.nome,
                        quantidade,
                    });
                }),
                bairros: Object.entries(estatisticasBairros).map(([bairro, quantidade]) => {
                    var _a;
                    return ({
                        id: (_a = atendimentos.find(atendimento => atendimento.bairro.nome === bairro)) === null || _a === void 0 ? void 0 : _a.bairro.id,
                        nome: bairro,
                        quantidade,
                    });
                }),
                atendimentos_por_dia: Object.entries(estatisticasDia)
                    .map(([dia, quantidade]) => ({
                    dia,
                    quantidade,
                }))
                    .sort((a, b) => {
                    const dateA = new Date(a.dia.split("/").reverse().join("-"));
                    const dateB = new Date(b.dia.split("/").reverse().join("-"));
                    return dateA.getTime() - dateB.getTime();
                }),
                tipos_por_bairro: {
                    instalacao: this.agruparPorBairro(estatisticasTipoPorBairro, 'INSTALACAO', atendimentos),
                    suporte: this.agruparPorBairro(estatisticasTipoPorBairro, 'SUPORTE', atendimentos),
                    mudanca: this.agruparPorBairro(estatisticasTipoPorBairro, 'MUDANCA DE ENDERECO', atendimentos),
                },
            };
            return resultado;
        });
    }
    agruparPorBairro(estatisticasTipoPorBairro, tipo, atendimentos) {
        const resultados = [];
        for (const [bairro, tipos] of Object.entries(estatisticasTipoPorBairro)) {
            if (tipos[tipo]) {
                const atendimento = atendimentos.find(atendimento => atendimento.bairro.nome === bairro && atendimento.tipo === tipo);
                resultados.push({
                    bairro,
                    quantidade: tipos[tipo],
                });
            }
        }
        return resultados;
    }
}
exports.MaioresAtendimentoService = MaioresAtendimentoService;
