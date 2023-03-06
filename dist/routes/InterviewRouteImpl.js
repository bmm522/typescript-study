"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterviewRouteImpl = void 0;
const express_1 = require("express");
class InterviewRouteImpl {
    constructor(interviewController) {
        this.path = "/interview";
        this.router = (0, express_1.Router)();
        this.initRoutes();
        this.interviewController = interviewController;
    }
    initRoutes() {
        this.router.get(`${this.path}`, (req, res) => {
            this.interviewController.get(req, res);
        });
    }
}
exports.InterviewRouteImpl = InterviewRouteImpl;
