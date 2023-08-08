import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserModel } from '../database/models/User';
import { sendMail } from '../helpers/mailing/mail';
import { passwordStrength } from 'check-password-strength'
import { Types } from 'mongoose';


export async function reinitializeLink(data: any) {
    const userExist = await UserModel.findOne({ email: data.email }); 

        if (userExist) {

            const token = jwt.sign({ _id: userExist._id }, process.env.TOKEN_SECRET, { expiresIn: 200 });
            let link = process.env.DOMAIN_APP + 'your-link' + token;

            sendMail(userExist.email, 'Notification de confirmation', {
                title: "Réinitialisation de votre mot de passe",
                text: `
                    Veuillez cliquer sur le lien en dessous : <br>
                    ${link}
                `,
                signature: `${process.env.APP_NAME}`
            }); 

            return true;
            
        } 

        return false;
}


export async function updating(data: any) {
    const userExist = await UserModel.findOne({ email: data.email });
        
    if (userExist) {
        console.log(userExist);
        const password_crypt = await bcrypt.hashSync(data.password,10);
        const userUpdating = await UserModel.findByIdAndUpdate({ _id: data._id }, { password: password_crypt });
        
        if (userUpdating) {
            
            return userUpdating;

        } 

        return 1;

    } 

    return 0;
}


export async function checking(data: any) {
    const jwtVerification = jwt.verify(data.token, process.env.TOKEN_SECRET);
            
        //var decoded = jwt.decode(data.token);        
        var decoded:any = jwt.decode(data.token, {complete: true});
        // console.log(decoded.header);
        console.log(decoded?.payload)
        const userExist = await UserModel.findOne({ _id: decoded?.payload._id });
            
            
        if (userExist) {
            console.log(userExist);
            
            const newdata = {
                _id: userExist._id,
                email: userExist.email,
                password: data.password1
            }

            return await updating(newdata);

        } else {
            return 0;
        }  
}