import User from "../../../models/users.js";

const createUser = async ( req, res ) => {
    const { name, username, email, password, cellphone, picture, isAdmin } = req.body

    try {
        await User.create({
            name,
            username,
            email,
            password,
            cellphone,
            picture,
            isAdmin
        })
        res.status(201).send('User created succesfully')
    } catch (error) {
        res.status(404).send(`User cannot be created: ${error.message}`)
    }
}

export default createUser