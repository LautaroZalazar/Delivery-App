import Product from "../../../models/product.js";

const getAllProducts = async (req, res) => {
    try {
        let products = await Product.find({})
        if(products){
            res.json(products)
        }
    } catch (error) {
        res.status(404).send('The products could not be obtained')
    }
}

export default getAllProducts