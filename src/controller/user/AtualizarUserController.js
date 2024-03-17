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
exports.AtualizarUserController = void 0;
const AtualizarUserService_1 = require("../../services/user/AtualizarUserService");
class AtualizarUserController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { nome, email, senha } = req.body;
            const atualizarUserService = new AtualizarUserService_1.AtualizarUserService();
            const user = yield atualizarUserService.execute({ id: Number(id), nome, email, senha });
            return res.json(user);
        });
    }
}
exports.AtualizarUserController = AtualizarUserController;
