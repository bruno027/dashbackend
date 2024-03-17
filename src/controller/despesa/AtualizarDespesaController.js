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
exports.AtualizarDespesaController = void 0;
const AtualizarDespesaService_1 = require("../../services/despesa/AtualizarDespesaService");
class AtualizarDespesaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { categoria_despesa_id, valor, carro_id, data, descricao } = req.body;
                const atualizarDespesaService = new AtualizarDespesaService_1.AtualizarDespesaService();
                const despesa = yield atualizarDespesaService.execute({
                    id: Number(id),
                    categoria_despesa_id,
                    valor,
                    carro_id,
                    data,
                    descricao,
                });
                return res.json(despesa);
            }
            catch (error) {
                console.error("erro atualizar despesa:", error);
                return res
                    .status(500)
                    .json({ error: "Ocorreu um erro ao atualizar despesa." + error });
            }
        });
    }
}
exports.AtualizarDespesaController = AtualizarDespesaController;
