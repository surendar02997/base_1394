import { Request, Response } from 'express';
import { baseService } from '../service/baseService';
import { CustomLogger } from '../config/Logger'
let base = new baseService();

export class baseController {
    
    constructor() { }
    
    public GpGetNounById(req: Request, res: Response) {
base.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into baseController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from baseController.ts: GpGetNounById');
    })}
public GpUpdate(req: Request, res: Response) {
base.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into baseController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from baseController.ts: GpUpdate');
    })}
public GpCreate(req: Request, res: Response) {
base.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into baseController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from baseController.ts: GpCreate');
    })}


}