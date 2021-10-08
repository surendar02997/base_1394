import { Request, Response } from 'express';
import {baseDao} from '../dao/baseDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let base = new baseDao();

export class baseService {
    
    constructor() { }
    
    public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into baseService.ts: GpGetNounById')
     let  baseId = req.params.id;
     base.GpGetNounById(baseId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from baseService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into baseService.ts: GpUpdate')
     let  baseData = req.body;
     base.GpUpdate(baseData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from baseService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into baseService.ts: GpCreate')
     let  baseData = req.body;
     base.GpCreate(baseData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from baseService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}