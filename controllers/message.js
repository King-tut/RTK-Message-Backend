import Message from "../models/Messages.js";
import User from "../models/User.js"

export const postMessage = async (req,res) =>{
    try{
        //const swap = req.body.fromName
        //console.log(swap)
        //console.log(req.body.to)
        const {
            from,
            to,
            subject,
            text,
            fromString
        } = req.body
        const newMessage = new Message({
            from,
            to,
            subject,
            text,
            seen: false,
            createdAt: Date.now(),
            fromString
        })

        const savedMessage = await newMessage.save()
        
        if(savedMessage){

        const AllUserMessages =  await Message.find({to: from})

        

        

        
            
        //console.log(`This should be 2 objects ${AllUserMessages}`)
        res.status(200).json(AllUserMessages)
        }
        
       
         
       
        
       
    }catch(error){
        res.status(400).json({msg: error.message})

    }

}  


export const gotEmAll = async (req, res)=>{
    try{
        const id = req.params.id 
        const allMessages =  await Message.find({to: id})
        if(allMessages){
            res.status(200).json(allMessages)
        }

    }catch(err){
        res.status(400).json({msg: err.message})

    }

}