import { Router } from 'express'
import Product from './routes/product.js'
import Business from './routes/business.js'
import Reviews from './routes/review.js'
import Users from './routes/users.js'
import Address from './routes/address.js'
import BusinessCategories from './routes/businessCategories.js'

const router = Router()

router.use('/product', Product)

router.use('/business', Business)

router.use('/reviews', Reviews)

router.use('/users', Users)

router.use('/address', Address)

router.use('/businessCategories', BusinessCategories)

export default router