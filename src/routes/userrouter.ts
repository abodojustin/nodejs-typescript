import express from 'express';

const router = express.Router();


router.get('/get-users', (req,res) => {
    res.send({ message: "Bonjour à tous les utilisateurs !"});
});


export default router;