import { Router } from "express";
import { InterviewController} from '../controller/InterviewController';
import { InterviewControllerImpl } from "../controller/InterviewControllerImpl";
import { InterviewRoute } from "./InterviewRoute";

export class InterviewRouteImpl implements InterviewRoute{

    private path: string = "/interview"
    
    public router: Router = Router();

    private interviewController: InterviewController;

    constructor(interviewController: InterviewController) {
        this.initRoutes();
        this.interviewController = interviewController;
    }

    public initRoutes(){
        this.router.get(`${this.path}`, (req, res)=>{
            this.interviewController.get(req, res);
        });
    }
}