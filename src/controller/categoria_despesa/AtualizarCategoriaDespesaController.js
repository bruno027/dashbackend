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
exports.AtualizarCategoriaDespesaController = void 0;
const AtualizarCategoriaDespesaService_1 = require("../../services/categoria_despesa/AtualizarCategoriaDespesaService");
class AtualizarCategoriaDespesaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { nome } = req.body;
            const atualizarCategoriaDespesaService = new AtualizarCategoriaDespesaService_1.AtualizarCategoriaDespesaService();
            const categoriaDespesa = yield atualizarCategoriaDespesaService.execute({ id: Number(id), nome });
            return res.json(categoriaDespesa);
        });
    }
}
exports.AtualizarCategoriaDespesaController = AtualizarCategoriaDespesaController;
