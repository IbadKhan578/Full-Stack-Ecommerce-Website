import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
export const shopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 250;
  let [search,setSearch] = useState('');
  let [showSearch,setShowSearch] = useState(false);
  let [cartItem,setCartItem] = useState({});

  let addToCart = async (itemId,size)=>{
    let cartData= structuredClone(cartItem); // copying an object
    if(!size){
      toast.error('Select Product Size');
      return;
    }
    if(cartData[itemId]){ // check if item already exists in cart 
      if(cartData[itemId][size]){   // item alreay exists with same size in cart just increase the quantity
      cartData[itemId][size] +=1;
      }else{ // if we have product but not with same size we will create new entry
        cartData[itemId][size]=1;

      }
    }else{ // if item does not exist in cart we will create new entry
      cartData[itemId]={};
      cartData[itemId][size]=1;

    }
    setCartItem(cartData);

  }

  const getCartCount=()=>{
let totalCount = 0;
for(let items in cartItem){
  for(let item in cartItem[items]){
    try {
      if(cartItem[items][item]>0){
        totalCount+= cartItem[items][item];
      }
      
    } catch (error) {
      console.error(error);
      
    }

  }
}
return totalCount;

  }

useEffect(()=>{
   console.log(cartItem);
},[cartItem])
  

  let value = {
    products,
    currency,
    delivery_fee,
    search , setSearch ,
     showSearch ,setShowSearch ,
     addToCart , cartItem,
     getCartCount
  };

  return (
    <shopContext.Provider value={value}>
        {props.children}
     </shopContext.Provider>
  );
};

export default ShopContextProvider;
