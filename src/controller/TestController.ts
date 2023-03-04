import { Request, Response } from "express";


export class TestController {
    

    public get(req : Request, res : Response){
        
        res.send("테스트");

    }
}
