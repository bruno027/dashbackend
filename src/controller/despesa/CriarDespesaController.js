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
exports.CriarDespesaController = void 0;
const CriarDespesaService_1 = require("../../services/despesa/CriarDespesaService");
class CriarDespesaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { categoria_despesa_id, valor, carro_id, user_id, data, descricao } = req.body;
            const criarDespesaService = new CriarDespesaService_1.CriarDespesaService();
            const despesa = yield criarDespesaService.execute({ categoria_despesa_id, valor, carro_id, user_id, data, descricao });
            return res.json(despesa);
        });
    }
}
exports.CriarDespesaController = CriarDespesaController;
