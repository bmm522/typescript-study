import { Router } from "express";
import { InterviewController } from "./controller/InterviewController";
import { InterviewControllerImpl } from "./controller/InterviewControllerImpl";
import { InterviewRoute } from "./routes/InterviewRoute";
import { InterviewRouteImpl } from "./routes/InterviewRouteImpl";

export class DI {
    private static di: DI = new DI();

    private constructor(){

    }

    public static getInstance(): DI{
        return this.di;
    }
    
    getInterviewRouter(): Router{
        const interviewController: InterviewController = new InterviewControllerImpl();
        const interviewRoute: InterviewRoute = new InterviewRouteImpl(interviewController);
        return interviewRoute.router;
    }
}