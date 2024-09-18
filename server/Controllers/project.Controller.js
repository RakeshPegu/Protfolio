import prisma from "../lib/prisma.js"

export const getProjects = async(req, res)=>{
    try {
        const projects = await prisma.project.findMany()
        res.status(200).json(projects)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Something went wrong"})
        
        
    }
}
export const getProject = async(req, res)=>{
    const id = req.params.id
    try {
        const project = await prisma.project.findUnique({
            where:{id}
        })
        if(!project) return res.status(404).json({message:"Not found"});
        res.status(200).json(project)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Something went wrong"})
        
    }
}
export const createProject = async(req, res)=>{
    
    const {name, images, description } = req.body;
    try {
       
        const project = await prisma.project.create({
           data:{
            name,
            images,
            description
           }

        })
        res.status(200).json(project)

        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Something went wrong"})
    }
}
export const updateProject = async(req, res)=>{
    const id = req.params.id;
    try {
        const project = await prisma.project.findUnique({
            where:{id}
        })
        if(!project) return res.status(404).json({message:"Not found"});
        const body = req.body;
        const updatedProject = await prisma.project.update({
            where:{id},
            data:{
                ...body
            }
        });
        res.status(200).json(updatedProject)
    
        
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Something went wrong"})
        
    }
}
export const deletProject = async(req, res)=>{
    const id = req.params.id;
    try {
        const project = await prisma.project.findUnique({
            where:{id}
        })
        if(!project) res.status(404).json({message:"Not found"});
        await prisma.project.delete({where:{id}})
        res.status(200).json({message:"Project has been deleted successfully"})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Something went wrong"})
        
    }
}