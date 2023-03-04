"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestRoute = void 0;
const express_1 = require("express");
const TestController_1 = require("../controller/TestController");
class TestRoute {
    constructor() {
        this.path = "/test";
        this.router = (0, express_1.Router)();
        this.initRoutes();
    }
    static getInstance() {
        if (!TestRoute.instance) {
            TestRoute.instance = new TestRoute();
        }
        return TestRoute.instance;
    }
    initRoutes() {
        this.router.get(`${this.path}`, new TestController_1.TestController().get);
    }
}
exports.TestRoute = TestRoute;
