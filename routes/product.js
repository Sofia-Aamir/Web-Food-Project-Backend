import express from 'express'
import { getProduct,addProduct,updateProduct,deleteProduct } from '../controller/productController.js'

const router = express.Router()

router.get('/',getProduct)
router.post('/',addProduct)
router.put('/:productId', updateProduct)
router.delete('/:productId', deleteProduct);


export default router;