import Product from '../../../models/product.js'

const createProduct = async (req, res) => {
    const { name, price, stock, image, discount} = req.body
    try {
        await Product.create({
            name,
            price,
            stock,
            image,
            discount
        })
        res.send('Product succesfully created')
    } catch (error) {
        res.status(404).send('Product cannot be created')
    }
}

export default createProduct