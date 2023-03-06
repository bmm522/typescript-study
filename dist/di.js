"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DI = void 0;
const InterviewControllerImpl_1 = require("./controller/InterviewControllerImpl");
const InterviewRouteImpl_1 = require("./routes/InterviewRouteImpl");
class DI {
    constructor() {
        this.interviewController = new InterviewControllerImpl_1.InterviewControllerImpl();
        this.interviewRoute = new InterviewRouteImpl_1.InterviewRouteImpl(this.interviewController);
    }
    static getInstance() {
        return this.di;
    }
    getInterviewRouter() {
        return this.interviewRoute.router;
    }
}
exports.DI = DI;
DI.di = new DI();
