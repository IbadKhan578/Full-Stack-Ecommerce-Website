import React from 'react'
import SectionTitle from '../components/SectionTitle'
import {assets} from '../assets/assets.js'
import NewsLetterBox from '../components/NewLetterBox.jsx'
const About = () => {
  return (
    <>
      <div className=" text-center text-2xl border-t border-gray-300 pt-8">
        <SectionTitle text1={"ABOUT"} text2={"US"} />
      </div>
      {/* image and about content */}
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:w-[450px]" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-2 text-gray-600">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>  <br />
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers
          </p> <br />
          <b className='mb-3'>Our Mission</b> 
          <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond</p>
        </div>
      </div>
      {/* Why choose us  */}
      <div className='text-xl py-4'>
        <SectionTitle text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      {/* cards */}
      <div className='flex  flex-col md:flex-row text-sm gap-2 sm:gap-0 mb-20'>
        <div className='border flex-1 border-gray-300 px-10 md:px-16  py-8 sm:py-20 '>
          <b>Quality Assurance:</b>
          <p className='mt-5 text-gray-500'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border flex-1 border-gray-300 px-10 md:px-16  py-8 sm:py-20 '>
          <b>Convenience:</b>
          <p className='mt-5 text-gray-500'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div> 
        <div className='border flex-1 border-gray-300 px-10 md:px-16  py-8 sm:py-20 '>
          <b>Exceptional Customer Service:</b>
          <p className='mt-5 text-gray-500 '>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
         

      </div>

      <NewsLetterBox />


    </>
  );
}

export default About