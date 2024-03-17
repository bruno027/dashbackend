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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TotalPorMesService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const date_fns_1 = require("date-fns");
class TotalPorMesService {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const currentDate = new Date();
            const result = [];
            for (let i = 5; i >= 0; i--) {
                const startDate = (0, date_fns_1.startOfMonth)((0, date_fns_1.subMonths)(currentDate, i));
                const endDate = (0, date_fns_1.endOfMonth)((0, date_fns_1.subMonths)(currentDate, i));
                const totalExpenses = yield prisma_1.default.despesa.aggregate({
                    _sum: { valor: true },
                    where: {
                        data: {
                            gte: startDate,
                            lte: endDate,
                        },
                    },
                });
                result.push({
                    month: (0, date_fns_1.format)(startDate, "MM/yyyy"),
                    total: totalExpenses._sum.valor || 0,
                });
            }
            return result;
        });
    }
}
exports.TotalPorMesService = TotalPorMesService;
