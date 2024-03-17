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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiltroTotalPorCategoriaController = void 0;
const FiltroTotalPorCategoriaService_1 = require("../../services/despesa/FiltroTotalPorCategoriaService");
class FiltroTotalPorCategoriaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { dataInicial, dataFinal } = req.query;
            try {
                const filtroTotalPorCategoriaService = new FiltroTotalPorCategoriaService_1.FiltroTotalPorCategoriaService();
                const valorTotalPorCategoria = yield filtroTotalPorCategoriaService.execute({
                    dataInicial,
                    dataFinal,
                });
                const resultadoFormatado = Object.entries(valorTotalPorCategoria).map(([chave, { valorTotal, despesas }]) => {
                    const [id, nome] = chave.split("-");
                    return {
                        id: Number(id),
                        nome,
                        valor: valorTotal,
                        despesas,
                    };
                });
                return res.json(resultadoFormatado);
            }
            catch (error) {
                console.error("Erro ao calcular valor total por categoria e período:", error);
                return res.status(500).json({ error: "Ocorreu um erro ao calcular o valor total." });
            }
        });
    }
}
exports.FiltroTotalPorCategoriaController = FiltroTotalPorCategoriaController;
