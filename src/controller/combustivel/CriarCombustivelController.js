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
exports.CriarCombustivelController = void 0;
const CriarCombustivelService_1 = require("../../services/combustivel/CriarCombustivelService");
class CriarCombustivelController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { km_final, carro_id, user_id, data, litros } = req.body;
            const criarCombustivelService = new CriarCombustivelService_1.CriarCombustivelService();
            const combustivel = yield criarCombustivelService.execute({ km_final, carro_id, user_id, data, litros });
            return res.json(combustivel);
        });
    }
}
exports.CriarCombustivelController = CriarCombustivelController;
