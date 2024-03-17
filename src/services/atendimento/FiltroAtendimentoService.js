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
exports.FiltroAtendimentoService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class FiltroAtendimentoService {
    execute({ dataInicial, dataFinal, tecnico_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (tecnico_id == 1000) {
                const atendimentos = yield prisma_1.default.atendimento.findMany({
                    orderBy: {
                        id: "desc"
                    },
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
                return atendimentos;
            }
            else {
                const atendimentos = yield prisma_1.default.atendimento.findMany({
                    orderBy: {
                        id: "desc"
                    },
                    where: {
                        fim: {
                            gte: new Date(dataInicial + " 00:01:00"),
                            lte: new Date(dataFinal + " 23:59:00"),
                        },
                        tecnico_id: parseInt(tecnico_id + ""),
                    },
                    include: {
                        tecnico: true,
                        bairro: true,
                    },
                });
                return atendimentos;
            }
        });
    }
}
exports.FiltroAtendimentoService = FiltroAtendimentoService;
