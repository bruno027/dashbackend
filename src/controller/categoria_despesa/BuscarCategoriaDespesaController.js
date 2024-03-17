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
exports.BuscarCategoriaDespesaController = void 0;
const BuscarCategoriaDespesaService_1 = require("../../services/categoria_despesa/BuscarCategoriaDespesaService");
class BuscarCategoriaDespesaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const buscarCategoriaDespesaService = new BuscarCategoriaDespesaService_1.BuscarCategoriaDespesaService();
            const categoriaDespesa = yield buscarCategoriaDespesaService.execute({ id: Number(id) });
            return res.json(categoriaDespesa);
        });
    }
}
exports.BuscarCategoriaDespesaController = BuscarCategoriaDespesaController;
