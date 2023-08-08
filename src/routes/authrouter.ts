import express from 'express';
import verifyToken from '../middlewares/verifyToken';
import { login } from '../auth/login';
import { register }  from '../auth/register';
import { checking, reinitializeLink } from '../auth/password';
import { encrypt } from '../helpers/security/crypt';

const router = express.Router();


router.post('/register', async (req,res,next) => {
    const r = await register(req.body);

    if (r.status && r.status === 400) {
        
        res.status(400).send({});

    } else if (r.status && r.status === 500) {

        res.status(500).send({});
        
    } else {

        res.status(200).send({ data: r.data });

    }
});

router.post('/login', async (req,res,next) => {
    const l = await login(req.body);

    if (l === 1) {
        
        res.status(400).send({ message: 'Password not correct'});

    } else if (l === 0) {

        res.status(400).send({ message: 'Email not exist'});
        
    } else {

        res.status(200).send({ data: l });
        
    }
});


router.post('/create-link', async (req,res,next) => {
    const sendLink = await reinitializeLink(req.body);

     if (sendLink === true) {
        res.status(200).send({ message: "Vous avez reçu un mail de confirmation. Veuillez le lire et effectuer les autres étapes !"});
    } else  {
        res.status(401).send({ message: "Votre compte n'existe pas ou a été bloquer !"});
    }
});


router.post('/modify-password', verifyToken, async (req,res,next) => {
    const user = await checking(req.body);
    console.log(user);
    if (user === 0) {
        res.status(500).send({ message: "User not exist" });
    } else if (typeof user === 'object' && user !== null) {
        res.status(200).send({ data: encrypt(user) });
    } else {
        res.status(403).send({ message: "Authentification expired !"});
    }
});



export default router;