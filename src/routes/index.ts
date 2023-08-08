import express from "express";
import routerAu from './authrouter';
import routerUs from './userrouter';


const router = express()


router.use('/user', routerUs);
router.use('/auth', routerAu);


export default router;