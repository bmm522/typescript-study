import { Request, Response} from "express-serve-static-core";

export interface InterviewController {

    get(req: Request, res: Response): void;
}