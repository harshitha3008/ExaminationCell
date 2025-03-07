const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
router.use(express.json());


const authMiddleware = require('../middleware/tokenVerification')
router.use(authMiddleware)

router.get('/', (req, res)=>{
    res.json({
        msg : "hii from notification"
    })
})


module.exports = {
    router
};
