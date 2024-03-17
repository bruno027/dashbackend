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
exports.FiltroTotalPorPlacaController = void 0;
const FiltroTotalPorPlacaService_1 = require("../../services/despesa/FiltroTotalPorPlacaService");
class FiltroTotalPorPlacaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { dataInicial, dataFinal } = req.query;
            try {
                const filtroTotalPorPlacaService = new FiltroTotalPorPlacaService_1.FiltroTotalPorPlacaService();
                const valorTotalPorCarro = yield filtroTotalPorPlacaService.execute({
                    dataInicial,
                    dataFinal,
                });
                const resultadoFormatado = Object.entries(valorTotalPorCarro).map(([chave, { valorTotal, despesas }]) => {
                    const [id, placa] = chave.split("-");
                    return { id: Number(id), placa, valorTotal, despesas };
                });
                return res.json(resultadoFormatado);
            }
            catch (error) {
                console.error("Erro ao calcular valor total por carro_id e período:", error);
                return res
                    .status(500)
                    .json({ error: "Ocorreu um erro ao calcular o valor total." + error });
            }
        });
    }
}
exports.FiltroTotalPorPlacaController = FiltroTotalPorPlacaController;
