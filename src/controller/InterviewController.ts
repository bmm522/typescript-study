import { Request, Response } from "express";


export class InterviewController {
    
    private static instance: InterviewController = new InterviewController();

    private constructor(){

    }

    public static getInstance(): InterviewController {
        return this.instance;
    }

    public get(req : Request, res : Response){
        
        res.send("테스트");

    }
}
