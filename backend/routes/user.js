const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { sign } = require('jsonwebtoken')


require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;
router.use(express.json());


router.post('/signin', async(req, res) =>{
    const { regNo, password } = req.body;

    try{
        const user = await prisma.student.findFirst({
            where : {
                regNo : regNo,
                password : password
            }
        })

        if(user){

            const token = sign({ regNo }, JWT_SECRET);

            res.status(200).json({
                userInfo : {
                    name : user.name,
                    regNo : user.regNo,
                    token : token
                },
                message : "Signin sucessful"
            })
            return;
        }
        else{
            res.status(202).json({
                message : "Signin failed"
            })
            return;
        }
    }
    catch(e){
        res.status(404).json({
            message : "Internal server error"
        })
    }
})


router.post('/signup', async(req, res) =>{
    const { regNo, password, name } = req.body;

    try{
        const user = await prisma.student.findFirst({
            where : {
                regNo : regNo
            }
        })

        if(user){
            res.status(200).json({
                message : "User already exist"
            })
            return;
        }
        else{
            const newUser = await prisma.student.create({
                data : {
                    regNo : regNo,
                    name : name,
                    password : password
                }
            })

            if(newUser){

                const token = sign({ regNo }, JWT_SECRET);
                res.status(200).json({
                    userInfo : {
                        name : newUser.name,
                        regNo : newUser.regNo,
                        token : token
                    },
                    message : "Signup sucessful"
                })
                return;
            }
            else{
                res.status(202).json({
                    message : "Signup failed"
                })
                return;
            }
        }
    }
    catch(e){
        console.log(e);
        res.status(404).json({
            message : "Internal server error"
        })
    }
})

module.exports={
    router
}

