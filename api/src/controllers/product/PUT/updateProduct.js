import Product from "../../../models/product.js";

const updateProduct = async (req, res) => {
    const { id } = req.params
    let update = req.body
    try {
        await Product.findByIdAndUpdate(id, update)
        res.send('Product successfully updated')
    } catch (error) {
        res.status(404).send("product cannot be updated")
    }
}

export default updateProduct