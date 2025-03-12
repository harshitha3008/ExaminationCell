const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
router.use(express.json());


const authMiddleware = require('../middleware/tokenVerification')
router.use(authMiddleware)


router.get('/', (req, res)=>{
    res.json({
        msg : "hii from setting"
    })
})
router.post("/update", async (req, res) => {
    const { regNo, password, name } = req.body;
    try {
        const updatedUser = await prisma.student.update({
            where: { regNo },
            data: { name, password },
        });
        res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
        console.error("Error updating user:", error);
        if (error.code === "P2025") {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(500).json({ message: "Internal server error" });
    }
});


module.exports = {
    router
};
