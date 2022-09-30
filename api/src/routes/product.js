import { Router } from "express";
import deleteAllProducts from "../controllers/product/DELETE/deleteAllProducts.js";
import deleteProduct from "../controllers/product/DELETE/deleteProduct.js";
import getAllProducts from "../controllers/product/GET/getAllProducts.js";
import getProductById from "../controllers/product/GET/getProductById.js";
import createProduct from "../controllers/product/POST/createProduct.js";
import updateProduct from "../controllers/product/PUT/updateProduct.js";

const router = Router()

router.get('/', getAllProducts)

router.get('/:id', getProductById)

router.post('/', createProduct)

router.put('/:id', updateProduct)

router.delete('/', deleteAllProducts)

router.delete('/:id', deleteProduct)

export default router