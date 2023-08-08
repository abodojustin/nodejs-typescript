import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserModel } from '../database/models/User';


export async function login(data: any) {
    const userExist = await UserModel.findOne({ email: data.email });
        let response = {};
        let info = {};
        let configToke = {
            _id: "",
            email: "",
            role: ""
        };

        if (userExist) {

            const passwordVerify = await bcrypt.compare(data.password, userExist.password);

            if (passwordVerify) {
                
                configToke._id = userExist._id.toString();
                configToke.email = userExist.email;
                info = userExist;

                
                const token = jwt.sign(configToke, process.env.TOKEN_SECRET, { expiresIn: "1d" });


                response = {
                    data : userExist,
                    token : token
                };
                
        
                return response;
        
            }

            return 1;
            

        }

        return 0;
}