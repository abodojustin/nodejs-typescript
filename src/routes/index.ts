import express from "express";
import routerAu from './authrouter';
import routerUs from './userrouter';
import routerZO from './zonerouter';
import routerCT from './colorTyperouter';
import routerSec from "./secteurrouter";
import routerCat from "./categorierouter";
import routerRole from "./rolerouter";
import routerMenu from "./menurouter";
import routerQ from "./questionrouter";
import routerTh from "./themerouter";

const router = express()


router.use('/user', routerUs);
router.use('/auth', routerAu);
router.use('/zone', routerZO);
router.use('/color_type', routerCT);
router.use('/secteur', routerSec);
router.use('/categorie', routerCat);
router.use('/role', routerRole);
router.use('/menu', routerMenu);
router.use('/question', routerQ);
router.use('/theme', routerTh);

export default router;