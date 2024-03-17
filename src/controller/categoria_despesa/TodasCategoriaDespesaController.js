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
exports.TodasCategoriaDespesaController = void 0;
const TodasCategoriaDespesaService_1 = require("../../services/categoria_despesa/TodasCategoriaDespesaService");
class TodasCategoriaDespesaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todasCategoriaDespesaService = new TodasCategoriaDespesaService_1.TodasCategoriaDespesaService();
                return res.json(yield todasCategoriaDespesaService.execute());
            }
            catch (error) {
                console.error("Erro ao buscar categoria despesa:", error);
                return res.status(500).json({ error: "Erro ao buscar categoria despesa" });
            }
        });
    }
}
exports.TodasCategoriaDespesaController = TodasCategoriaDespesaController;
