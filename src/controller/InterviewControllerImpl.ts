import { Request, Response } from "express";
import { InterviewController } from "./InterviewController";


export class InterviewControllerImpl implements InterviewController{
    
    constructor(){

    }

    public get(req : Request, res : Response): void{
        
        res.send("테스트");

    }
}
