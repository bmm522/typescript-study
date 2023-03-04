import { Router } from "express";
import { TestController} from '../controller/TestController';

export class TestRoute {

    private path: string = "/test"
    
    public router: Router = Router();

    private static instance: TestRoute;

    private constructor() {
        this.initRoutes();
    }

    public static getInstance(): TestRoute {
        if (!TestRoute.instance) {
            TestRoute.instance = new TestRoute();
        }
        return TestRoute.instance;
    }

    public initRoutes(){
        this.router.get(`${this.path}`, new TestController().get);
    }
}