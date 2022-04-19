import { LoginDTO, LoginEmailDTO, LoginUserNameDTO, UserModel } from "../models/user";

export const getUserByID= async(id: string) =>{
    //schema es omo se comporta en la basedatos
    //modelo es el que nos dara acceso

    if(id=="") return;

    const user = await  UserModel.findById(id);
    console.log(user);
    
    return user;
};