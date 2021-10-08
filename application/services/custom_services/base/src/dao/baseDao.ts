import * as mongoose from 'mongoose';
import baseModel from '../models/base';
import { CustomLogger } from '../config/Logger'


export class baseDao {
    private base = baseModel;
    constructor() { }
    
    public async GpGetNounById(baseId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into baseDao.ts: GpGetNounById');

    

    
    
    
    this.base.findById(baseId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from baseDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(baseData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into baseDao.ts: GpUpdate');

    

    
    
    
    this.base.findOneAndUpdate({ _id: baseData._id }, baseData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from baseDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(baseData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into baseDao.ts: GpCreate');

    let temp = new baseModel(baseData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from baseDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}