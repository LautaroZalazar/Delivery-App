import User from "../../../models/users.js";

const getUserById = async (req, res) => {
    const {id} = req.params
    try {
        let user = await User.findById(id)
        .populate({path: 'address'})
        .populate({path: 'product'})
        .populate({path: 'business'})
        if(user){
            res.send(user)
        }
    } catch (error) {
        res.status(404).send("User not found")
    }
}

export default getUserById