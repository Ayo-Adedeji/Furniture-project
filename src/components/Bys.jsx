import React from 'react'
import Elipse from "../assets/Ellipse5.png"
import woman from "../assets/woman.png"

const Bys = () => {
  return (
    <section className='flex items-center bg-[rgb(242,245,255)] h-[100vh] gap-9 '>
      <div className=' flex flex-col w-[100%] mx-20 space-y-2'>
        <h1 className='font-bold text-2xl '>Beautify Your Space</h1>
        <p className='pr-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sunt harum, maxime molestiae voluptatibus earum aliquid dolor laudantium vero vel totam, labore quae necessitatibus quidem. Porro repellat commodi aperiam error!</p>
        <button className='bg-[#054C73] w-[35%] rounded-3xl py-3 text-white'>LEARN MORE</button>
      </div>
      <div className=' w-[100%] relative flex my-10'>
        <img className='h-fit w-[60vh] pl-5 z-40'src={woman}/>
        <img className='h-[45%] absolute z-0 top-20 right-[25%] ' src={Elipse}/>
        
      </div>
      
    </section>
  )
}

export default Bys;