import { Schema, model } from "mongoose";

export interface User{
    _id: string;
    userName: string;
    email: string;
    password: string;
}

export interface LoginDTO{
    userName?: string;
    email?: string;
    password?: string;
}

export interface LoginEmailDTO{
    email: string;
    password: string;
}

export interface LoginUserNameDTO{
    userName: string;
    password: string;
}

const schema = new Schema<User>({
    userName: {type: String, required: true} ,
    email: {type: String, required: true} ,
    password: {type: String, required: true} ,
});

export const UserModel = model<User>('Users', schema);
