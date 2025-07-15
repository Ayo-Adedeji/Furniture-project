import React from 'react'
import ig1 from "../assets/IG-1.jpg"
import ig2 from "../assets/IG-2.jpg"
import ig3 from "../assets/IG-3.jpg"
import ig4 from "../assets/IG-4.jpg"

const Footer = () => {
  return (
    <section className=' flex mt-5  bg-[#03344F] py-7'>
      <div className='flex  flex-col max-w-sm mx-10  space-y-3 items-align'>
        <h2 className='font-semibold text-2xl text-white'>Beauty Care</h2>
        <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt repudiandae iusto. Magni commodi mollitia sunt itaque fuga dignissimos asperiores!</p>
        <a className='font-semibold text-lg text-white'>Follow more</a>
      </div>

      <div className='flex flex-col '>
        <h2 className='mb-3 font-semibold text-2xl text-white'>Instagram Shop</h2>
        <div className='flex gap-3'>
          <img src={ig1}/>
          <img src={ig2}/>
          <img src={ig3}/>
          <img src={ig4}/>
        </div>
      </div>
    </section>
  )
}

export default Footer;