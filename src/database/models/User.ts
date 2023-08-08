import { Schema, model } from 'mongoose';
import {IUser} from '../interfaces/User';

export const DOCUMENT_NAME = 'User';
export const COLLECTION_NAME = 'users';

const schema = new Schema({
    name: String,
    email: String,
    password: String
});


export const UserModel = model<IUser>(DOCUMENT_NAME, schema, COLLECTION_NAME);

