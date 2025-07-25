
import {v2 as cloudinary} from 'cloudinary';
import productModel from '../models/productModel.js';

// function to add product 

const addProduct = async (req,res)=>{
   try {

     const {name , description, price, sizes, category,subCategory, bestseller} = req.body;
    const image1 = req.files.image1 && req.files.image1[0]
    const image2 = req.files.image2 && req.files.image2[0]
    const image3 = req.files.image3 && req.files.image3[0]
    const image4 = req.files.image4 && req.files.image4[0]
    const images = [image1, image2, image3 , image4].filter((item)=> item!== undefined ); // if image is undefined dont add it 

    // upload image to cloudinary
    let  imageUrl = await Promise.all(
        images.map(async(item)=>{
            let result = await cloudinary.uploader.upload(item.path,{resource_type:"image"});
            return result.secure_url;

        })
    )

    let productData = {
        name,
        description, 
        category,
         price: Number(price),
        subCategory,
        bestseller : bestseller === "true" ? true :false ,
        sizes: JSON.parse(sizes),
        image: imageUrl,
        date:Date.now()
    }

    console.log(productData);

    const product = new productModel(productData);
    await product.save();

    
    res.json({success:true, message:"Product Added"});
    
   } catch (error) {
    return res.json({success:false, message:error.message});    
    
   }
    
    

}


// function to list product 
const listProduct = async (req,res)=>{

}

// function to removing product 
const removeProduct = async (req,res)=>{

}

const singleProduct = async (req,res)=>{

}


export {addProduct, listProduct , removeProduct , singleProduct}




