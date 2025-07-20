import { createContext } from "react";
import { products } from "../assets/assets";
export const shopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 250;

  let value = {
    products,
    currency,
    delivery_fee,
  };

  return (
    <shopContext.Provider value={value}>
        {props.children}
     </shopContext.Provider>
  );
};

export default ShopContextProvider;
