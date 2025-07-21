import { createContext, useState } from "react";
import { products } from "../assets/assets";
export const shopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 250;
  let [search,setSearch] = useState('');
  let [showSearch,setShowSearch] = useState(false);

  let value = {
    products,
    currency,
    delivery_fee,
    search , setSearch , showSearch ,setShowSearch
  };

  return (
    <shopContext.Provider value={value}>
        {props.children}
     </shopContext.Provider>
  );
};

export default ShopContextProvider;
