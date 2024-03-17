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
exports.CriarAtendimentoController = void 0;
const CriarAtendimentoService_1 = require("../../services/atendimento/CriarAtendimentoService");
class CriarAtendimentoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { inicio, fim, tipo, fibra, tecnico_id, problema_id, bairro_id, codigo } = req.body;
            const criarAtendimentoService = new CriarAtendimentoService_1.CriarAtendimentoService();
            const atendimento = yield criarAtendimentoService.execute({
                inicio,
                fim,
                tipo,
                fibra,
                tecnico_id,
                problema_id,
                bairro_id,
                codigo
            });
            return res.json(atendimento);
        });
    }
}
exports.CriarAtendimentoController = CriarAtendimentoController;
