"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const TestRoute_1 = require("./routes/TestRoute");
//  Express 애플리케이션을 생성하고 미들웨어와 라우팅을 초기화하는 역할을 합니다.
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.setMiddlewares();
        this.setRouter();
    }
    // 미들웨어 세팅
    setMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    // 라우터 세팅
    setRouter() {
        this.app.use(TestRoute_1.TestRoute.getInstance().router);
    }
}
exports.App = App;
