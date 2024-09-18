import prisma from "../lib/prisma.js"
import bcrpyt from 'bcrypt'
export const getUsers = async(req, res)=>{
    try {
        const users = await prisma.user.findMany()
        res.status(200).json(users)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Something went wrong'})
        
    }
}

export const getUser = async(req, res)=>{
    const id = req.params.id
    const tokenUserId = req.userId;
    

    try {
        if(id !== tokenUserId) return res.status(403).json({message:"You are not authorized"});
        const user = await prisma.user.findUnique({
            where:{id}
        })
        if(!user) return res.status(404).json({message:"user not found"});


        res.status(200).json(user)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Something went wrong'})
        
    }
}

export const updateUser = async(req, res)=>{
    const id = req.params.id;
    const tokenUserId = req.userId;
    try {
        if(id !== tokenUserId) return res.status(403).json({message:"You're not authorized"});
        const user = await prisma.user.findUnique({
            where:{id}
         })
        if(!user) return res.status(404).json({message:'User not found'});
        const {password, ...info} = req.body;
        const hashedPassword = await bcrpyt.hash(password,10)
        const newInfo = await prisma.user.update({
            where:{id},
            data:{
                password:hashedPassword,
                ...info

            }

        })
        res.status(200).json(newInfo)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Something went wrong'})
        
    }
}

export const deleteUser = async(req, res)=>{
    const id = req.params.id;
    const tokenUserId = req.userId
    try {
        if(id !== tokenUserId) return res.status(403).json({message:"You're not authorized"});
        
        await prisma.user.delete({
            where:{id}
        })
        res.status(200).json({message:'Deleted successfully'})
        
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Something went wrong'})
        
    }
}