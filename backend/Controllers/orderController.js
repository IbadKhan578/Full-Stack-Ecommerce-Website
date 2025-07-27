


//placing order using cod method

import orderModel from "../models/orderModel.js";
import userModel from '../models/userModel.js'
import Stripe from 'stripe';


const currency="PKR";
const deliveryCharges= 10;


// gateway initialize
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


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
    try {
    let {userId, items, amount , address} = req.body;
    let {origin} = req.headers;
     let orderData ={
            userId,
            items,
            address,
            amount,
            paymentMethod:"Stripe",
            payment:false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        newOrder.save();
           

        const line_items = items.map((item)=>(
            {
                price_data :{
                    currency: currency,
                    product_data:{
                        name: item.name
                    },
                    unit_amount: item.price* 100
                },
                quantity: item.quantity
            }
        ))
        line_items.push({
             price_data :{
                    currency: currency,
                    product_data:{
                        name: "Delivery Charges"
                    },
                    unit_amount: deliveryCharges
                },
                quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode:'payment'
        })

        res.json({success:true , sessionUrl:session.url })


        
    } catch (error) {
         console.log(error);
        res.json({success:false, message: error.message});
        
    }

    
}

const placeOrderRazorpay = async(req,res)=>{
    
}

// All orders for admin panel

const AllOrders = async (req,res)=>{

    try {
        
        const orders = await  orderModel.find({});
        res.json({success:true , orders});

    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message});
        
    }



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

try {
    let {orderId , status} = req.body;
    await orderModel.findByIdAndUpdate(orderId,{ status});
    res.json({success:true, message:"Status Updated"})

    
} catch (error) {
    console.log(error);
        res.json({success:false, message: error.message});
    
}


}

export {placeOrder,placeOrderStripe , placeOrderRazorpay, AllOrders , userOrders , updateStatus}