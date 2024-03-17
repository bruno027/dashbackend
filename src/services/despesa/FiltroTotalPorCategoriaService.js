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
exports.FiltroTotalPorCategoriaService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class FiltroTotalPorCategoriaService {
    execute({ dataInicial, dataFinal }) {
        return __awaiter(this, void 0, void 0, function* () {
            const despesas = yield prisma_1.default.despesa.findMany({
                where: {
                    data: {
                        gte: new Date(dataInicial),
                        lte: new Date(dataFinal),
                    },
                },
                select: {
                    categoria_despesa: {
                        select: {
                            id: true,
                            nome: true,
                        },
                    },
                    valor: true,
                    descricao: true,
                    data: true,
                    carro: true,
                },
            });
            const valorTotalPorCategoria = {};
            despesas.forEach((despesa) => {
                const { id, nome } = despesa.categoria_despesa;
                const valor = despesa.valor;
                const chave = `${id}-${nome}`;
                if (chave in valorTotalPorCategoria) {
                    valorTotalPorCategoria[chave].valorTotal += valor;
                    valorTotalPorCategoria[chave].despesas.push(despesa);
                }
                else {
                    valorTotalPorCategoria[chave] = {
                        valorTotal: valor,
                        despesas: [despesa],
                    };
                }
            });
            return valorTotalPorCategoria;
        });
    }
}
exports.FiltroTotalPorCategoriaService = FiltroTotalPorCategoriaService;
