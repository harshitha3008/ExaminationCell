const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { verify } = require('jsonwebtoken');
require('dotenv').config();


const JWT_SECRET = process.env.JWT_SECRET;
router.use(express.json());

const authMiddleware = async (req, res, next) => {
    try {
        
        const token = req.headers.authorization;
        if(!token){
            res.status(401).json({ 
                message: "Access denied" 
            });
            return;
        }
        else{
            const decoded = verify(token, JWT_SECRET);
            const user = await prisma.student.findFirst({
                where : {
                    regNo : decoded.regNo
                }
            })
            if(user){
                next();
                return;
            }
            else{
                res.status(202).json({ 
                    message: "Invalid token" 
                });
                return;
            }
        }
    } 
    catch(e){
        res.status(404).json({ 
            message: "Internal server error" 
        });
        return;
    }
};

module.exports = authMiddleware;