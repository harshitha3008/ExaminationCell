const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
router.use(express.json());

const authMiddleware = require('../middleware/tokenVerification');
router.use(authMiddleware);


// Change Theme
router.put('/theme', async (req, res) => {
    const { userId } = req.user;
    const { theme } = req.body; // "light" or "dark"

    if (!theme || !["light", "dark"].includes(theme)) {
        return res.status(400).json({ message: "Invalid theme" });
    }

    try {
        await prisma.user.update({
            where: { id: userId },
            data: { theme },
        });

        res.json({ message: `Theme changed to ${theme}` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

// Delete Account
router.put('/delete-account',authMiddleware,async (req, res) => {

    // const { userId } = req.user;
    const { regdNumber, password, confirmPassword } = req.body;

    if (!regdNumber || !password || !confirmPassword) {
        return res.status(400).json({ message: "All fields are required." });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match." });
    }

    try {
        const user = await prisma.student.findFirst({
            where : {
                regNo: regdNumber,
                password : password
            }
        })

        if (!user) {
            res.status(404).json({ message: "User not found or incorrect registration number." });
            return;
        }
        else{
            await prisma.student.delete({
                where : {
                    id : user.id
                }
            })
            res.json({ message: "Account deleted successfully." });
            return;
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error." });
    }
});

module.exports = {
    router
};
