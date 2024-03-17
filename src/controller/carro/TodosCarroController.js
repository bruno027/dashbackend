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
exports.TodosCarroController = void 0;
const TodosCarroService_1 = require("../../services/carro/TodosCarroService");
class TodosCarroController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todosCarroService = new TodosCarroService_1.TodosCarroService();
                const carros = yield todosCarroService.execute();
                res.json(carros);
            }
            catch (error) {
                console.error("Erro ao buscar carros:", error);
                res.status(500).json({ error: "Erro ao buscar carros" });
            }
        });
    }
}
exports.TodosCarroController = TodosCarroController;
