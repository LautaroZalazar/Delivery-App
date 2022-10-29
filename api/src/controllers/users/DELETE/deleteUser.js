import User from "../../../models/users.js";

const deleteUser = async (req, res) => {
    const { id } = req.params
    try {
        await User.findByIdAndDelete(id)
        res.send("User successfully deleted")
    } catch (error) {
        res.status(404).send("User cannot be deleted")
    }
}

export default deleteUser