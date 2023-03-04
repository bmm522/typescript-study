import express from 'express';
import { InterviewRoute } from './routes/InterViewRoute';


//  Express 애플리케이션을 생성하고 미들웨어와 라우팅을 초기화하는 역할을 합니다.
export class App {
    
    public app: express.Application;

    constructor() {
      this.app = express();
      this.setMiddlewares();
      this.setRouter();
    }
  
    // 미들웨어 세팅
    private setMiddlewares() {
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: true }));
    }
  
    // 라우터 세팅
    private setRouter() {
        this.app.use(InterviewRoute.getInstance().router);
    }
    
  }
  
