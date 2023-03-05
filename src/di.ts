import { Router } from "express";
import { InterviewController } from "./controller/InterviewController";
import { InterviewControllerImpl } from "./controller/InterviewControllerImpl";
import { InterviewRoute } from "./routes/InterviewRoute";
import { InterviewRouteImpl } from "./routes/InterviewRouteImpl";

export class DI {
    private static di: DI = new DI();

    private interviewController:InterviewController;

    private interviewRoute: InterviewRoute;
    
    private constructor(){
        this.interviewController = new InterviewControllerImpl();
        this.interviewRoute = new InterviewRouteImpl(this.interviewController);


    }

    public static getInstance(): DI{
        return this.di;
    }
    
    getInterviewRouter(): Router{
        return this.interviewRoute.router;
    }
}