import express from "express";
import routerAu from './authrouter';
import routerUs from './userrouter';
import routerZO from './zonerouter';


const router = express()


router.use('/user', routerUs);
router.use('/auth', routerAu);
router.use('/zone', routerZO);

export default router;