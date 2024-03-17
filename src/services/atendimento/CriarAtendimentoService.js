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
exports.CriarAtendimentoService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CriarAtendimentoService {
    execute({ inicio, fim, tipo, fibra, tecnico_id, problema_id, bairro_id, codigo }) {
        return __awaiter(this, void 0, void 0, function* () {
            const atendimento = yield prisma_1.default.atendimento.create({
                data: {
                    inicio: inicio,
                    fim: fim,
                    tipo: tipo,
                    fibra: fibra,
                    tecnico_id: tecnico_id,
                    problema_id: problema_id,
                    bairro_id: bairro_id,
                    codigo: codigo
                }
            });
            return atendimento;
        });
    }
}
exports.CriarAtendimentoService = CriarAtendimentoService;
