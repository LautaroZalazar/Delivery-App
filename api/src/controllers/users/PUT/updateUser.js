import User from "../../../models/users.js";

const updateUser = async (req, res) => {
    const { id } = req.params
    const user = req.body
    try {
        await User.findByIdAndUpdate(id, user)
        res.send("User updated successfully")
    } catch (error) {
        res.status(404).send(`User cannot be updated: ${error.message}`)
    }
}

export default updateUser