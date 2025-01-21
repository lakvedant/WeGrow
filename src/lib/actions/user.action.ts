'use server';

import User from "@/lib/models/user.model";
import {connect} from "@/lib/db";

export async function createUser(user:any){
    try {
        await connect();
        const newUser = new User(user);
        await newUser.save();
        return JSON.parse(JSON.stringify(newUser));

    } catch (error) {
        console.log(error);
        
    }
}