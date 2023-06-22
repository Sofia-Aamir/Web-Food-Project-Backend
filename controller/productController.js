
import { productModel } from "../model/productModel.js"

const getProduct = async(req,res)=>{
    const r=await productModel.find()
    res.json(r)
}

const addProduct =async (req,res)=>{
    const productname=req.body.name;
    const productprice = parseFloat(req.body.price);
    const producttype=req.body.category;
    const url = req.body.url;

    const newProduct=new productModel({
            name:productname,
            price:productprice,
            category:producttype,
            url:url
    })

    try{
        await newProduct.save();
        res.json(newProduct);
    }
    catch(e){
        console.log(e)
    }

    }
    const updateProduct = async (req, res) => {

        const productId = req.params.productId;
        const { name, price, category } = req.body;
      
        try {
          const updatedProduct = await productModel.findByIdAndUpdate(productId,
            {
              name,
              price,
              category
            },
            { new: true }
          );
      
          res.json(updatedProduct);
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: 'Failed to update product' });
        }
      };

      const deleteProduct = async (req, res) => {
        const productId = req.params.productId;
      
        try {
          // Find the product by ID and remove it
          await productModel.findByIdAndRemove(productId);
      
          res.json({ message: 'Product deleted successfully' });
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: 'Failed to delete product' });
        }
      };
      

export {getProduct,addProduct,updateProduct,deleteProduct};