import { Request, Response, NextFunction } from "express";
import { baseController } from '../controller/baseController';


export class Routes {
    private base: baseController = new baseController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/base/:id').get(this.base.GpGetNounById);
app.route('/base').put(this.base.GpUpdate);
app.route('/base').post(this.base.GpCreate);
     }

}