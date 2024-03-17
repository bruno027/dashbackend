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
exports.BuscarDespesaPorCarroController = void 0;
const BuscarDespesaPorCarro_1 = require("../../services/despesa/BuscarDespesaPorCarro");
class BuscarDespesaPorCarroController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { dataInicial, dataFinal, carro_id } = req.query;
            const buscarDespesaPorCarroService = new BuscarDespesaPorCarro_1.BuscarDespesaPorCarroService();
            console.log(">> " + dataInicial);
            const despesas = yield buscarDespesaPorCarroService.execute({
                carro_id,
                dataInicial,
                dataFinal,
            });
            return res.json(despesas);
        });
    }
}
exports.BuscarDespesaPorCarroController = BuscarDespesaPorCarroController;
