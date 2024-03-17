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
exports.BuscarCarroController = void 0;
const BuscarCarroService_1 = require("../../services/carro/BuscarCarroService");
class BuscarCarroController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const buscarCarroService = new BuscarCarroService_1.BuscarCarroService();
            const carro = yield buscarCarroService.execute({ id: Number(id) });
            return res.json(carro);
        });
    }
}
exports.BuscarCarroController = BuscarCarroController;
