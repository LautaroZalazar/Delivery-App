import Product from "../../../models/product.js";

const getProductById = async ( req, res ) => {
    const { id } = req.params
    try {
        let product = await Product.findById(id)
            .populate({ path: "review"})
        if(product){
            res.json(product)
        }
    } catch (error) {
        res.status(404).send('The product could not be obtained')
    }
}

export default getProductById