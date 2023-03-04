import { Router } from "express";
import { InterviewController} from '../controller/InterviewController';

export class InterviewRoute {

    private path: string = "/interview"
    
    public router: Router = Router();

    private testController: InterviewController = InterviewController.getInstance();

    private static instance: InterviewRoute = new InterviewRoute();

    private constructor() {
        this.initRoutes();
    }

    public static getInstance(): InterviewRoute {
        return this.instance;
    }

    public initRoutes(){
        this.router.get(`${this.path}`, this.testController.get);
    }
}