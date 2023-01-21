import User from "../models/User.js"

export const findUsersForMessages = async (req,res) =>{
    //console.log(`These are the params ${req.params.id}`)
    
    try{
        //const allUsers  = await User.find();
        const userID = req.params.id

        const users = await User.find({ _id: { $ne: userID } }).select([
            
            "firstName",
            "lastName",
            "email",
            "bio",
            "profilePic"

        ]);

        if(users){
            res.status(200).json(users)
        }

        
        
        
    }catch(err){
        res.status(400).json({message: err.message})
    }
}