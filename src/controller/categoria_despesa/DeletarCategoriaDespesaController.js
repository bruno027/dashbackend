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
exports.DeletarCategoriaDespesaController = void 0;
const DeletarCategoriaDespesaService_1 = require("../../services/categoria_despesa/DeletarCategoriaDespesaService");
class DeletarCategoriaDespesaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deletarCategoriaDespesaService = new DeletarCategoriaDespesaService_1.DeletarCategoriaDespesaService();
            const categoriaDespesa = yield deletarCategoriaDespesaService.execute({ id: Number(id) });
            return res.json(categoriaDespesa);
        });
    }
}
exports.DeletarCategoriaDespesaController = DeletarCategoriaDespesaController;
