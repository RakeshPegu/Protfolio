import prisma from '../lib/prisma.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const registerUser = async(req,res)=>{
    try {
        const {username,email, password} = req.body;
        if(!username || !email || !password) return res.status(400).json({message:'All the fields are mandatory'});
        const user = await prisma.user.findUnique({
            where:{email}
        })
        if(user) return res.status(400).json({message:'The user is already exist'})
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await prisma.user.create({
            data:{
                username,
                email,
                password:hashedPassword
            }
        })   

        res.status(200).json({message:"registered the user sucessfully"})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Something went wrong'})
        
    }
}
export const loginUser = async(req,res)=>{
    try {
        const {email, password} = req.body;
        if(!email || !password) return res.status(400).json({message:"Something went wrong"});
        const user = await prisma.user.findUnique({
            where:{email}
        })
        if(!user) return res.status(400).json({message:"The user does not exist"});
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) return res.status(403).json({message:"You are not authorized"});
        const age = 1000*60*60*24*7;
        const token = jwt.sign({
            id:user.id
        }, process.env.JWT_SECRET_TOKEN, {expiresIn:age})
        res.cookie("token",token,{
            httpOnly:true,
            maxAge:age });
        res.status(200).json(user)
       
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Something went wrong'})
        
    }
}
export const logoutUser = async(req,res)=>{
    try {
        res.clearCookie("token").status(200).json({message:'Logged out successfully'})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Something went wrong'})
        
    }
}