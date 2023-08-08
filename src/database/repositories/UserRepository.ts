import { IUser  } from "../interfaces/User";
import { UserModel } from "../models/User";



export async function getUsers() {
    return await UserModel.find();
}

export async function getUserById(id: string) {
    return await UserModel.findById({ _id: id });
}

// export async function .....