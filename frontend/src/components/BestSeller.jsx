import React, { useContext, useEffect, useState } from 'react'
import SectionTitle from './SectionTitle'
import { shopContext } from '../context/ShopContext'
import Productitem from './Productitem';

function BestSeller() {
    const {products} = useContext(shopContext);
    const [bestSeller,setBestSeller] = useState([]);
    useEffect(()=>{
        const filterdProduct= products.filter((item)=> item.bestseller==true );
        console.log(filterdProduct)
        setBestSeller(filterdProduct.slice(0,5));


    },[])
    
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
         <SectionTitle text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs  sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p> 
        </div>

        {/* redering best seller product  */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
            bestSeller.map((item,index)=>(
                <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
        }
      </div>

    </div>
  )
}

export default BestSeller