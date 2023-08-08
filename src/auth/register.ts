import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserModel } from '../database/models/User';
import { sendMail } from '../helpers/mailing/mail';
import { passwordStrength } from 'check-password-strength'


export async function register(data: any) {

    const userExist = await UserModel.findOne({ email: data.email });

    if (!userExist) {

        // can verify the solidity of password  with passwordStrength
        // passwordStrength(data.password).value
        // Too weak - Weak - Medium - Strong

        data.password = bcrypt.hashSync(data.password, 10);

        const user = new UserModel(data);
        const userSaved = await user.save();

        if (userSaved) {
            // send mail with sendMail or some ops

            return { status: 200, data: userSaved }

        }

        return { status : 500 }
    }

    return { status: 400 }

}