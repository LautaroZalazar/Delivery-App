import Product from "../../../models/product.js";

const deleteProduct = async ( req, res) => {
    const { id } = req.params
    try {
        await Product.findByIdAndDelete(id)
        res.send('Product deleted')
    } catch (error) {
        res.status(404).send('Cannot delete the product')
    }
}

export default deleteProduct