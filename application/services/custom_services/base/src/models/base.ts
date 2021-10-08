
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const baseSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   Enter_Name: String
})

const baseModel = mongoose.model('base', baseSchema, 'base');
export default baseModel;
