import Product from "../../../models/product.js";

const deleteAllProducts = async (req, res) => {
    try {
        await Product.deleteMany({})
        res.send('Data base was cleared')
    } catch (error) {
        res.status(404).send('The database could not be cleaned')
    }
}

export default deleteAllProducts