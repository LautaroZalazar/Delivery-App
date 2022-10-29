import User from "../../../models/users.js";

const getAllUsers = async (req, res) => {
    try {
        console.log('Entro');
        let allUsers = await User.find({})
        .populate({path: 'address'}) 
        .populate({path: 'product'})
        .populate({path: 'business'})
        console.log("Hola?", allUsers);
        if(allUsers[0]){
            res.send(allUsers)
        } else {
            res.status(204)
        }
    } catch (error) {
        res.status(404).send(`Users cannot be getted: ${error.message}`)
    }
}

export default getAllUsers