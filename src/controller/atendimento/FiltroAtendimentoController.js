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
exports.FiltroAtendimentoController = void 0;
const FiltroAtendimentoService_1 = require("../../services/atendimento/FiltroAtendimentoService");
class FiltroAtendimentoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { dataInicial, dataFinal, tecnico_id } = req.query;
            const filtroAtendimentoService = new FiltroAtendimentoService_1.FiltroAtendimentoService();
            const atendimento = yield filtroAtendimentoService.execute({ dataInicial, dataFinal, tecnico_id });
            return res.json(atendimento);
        });
    }
}
exports.FiltroAtendimentoController = FiltroAtendimentoController;
