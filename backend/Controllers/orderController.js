


//placing order using cod method

import orderModel from "../models/orderModel.js";
import userModel from '../models/userModel.js'


const placeOrder = async(req,res)=>{

    try {

        let {userId, items, amount , address} = req.body;

        let orderData ={
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        newOrder.save();

          // after placing order clear cart data
          await userModel.findByIdAndUpdate(userId,{cartData:{}})


          res.json({success:true , message:"Order Placed"});


        
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
        
    }

}


const placeOrderStripe = async(req,res)=>{
    
}

const placeOrderRazorpay = async(req,res)=>{
    
}

// All orders for admin panel

const AllOrders = async (req,res)=>{

}

const userOrders = async (req,res)=>{

    try {
        let {userId} = req.body;
        let orders = await orderModel.find({userId});
        res.json({success:true , orders})
        
    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message});
        
    }

}


// update order status from admin

const updateStatus = async (req,res)=>{

}

export {placeOrder,placeOrderStripe , placeOrderRazorpay, AllOrders , userOrders , updateStatus}