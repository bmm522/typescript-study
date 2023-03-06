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
exports.Database = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const DatabaseSetting_1 = require("./DatabaseSetting");
class Database {
    constructor() {
        this.connection = promise_1.default.createPool(DatabaseSetting_1.DatabaseSetting);
    }
    query(sql, params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [rows] = yield this.connection.query(sql, params);
                return rows;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
}
exports.Database = Database;
