import { Router } from "express";

export interface InterviewRoute {
    router: Router;
    initRoutes(): void;
}