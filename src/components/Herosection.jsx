import Herobg from "../assets/Mask Group.png"

const Herosection = () => {
  return (
    <section>
      <img className="h-[90vh] w-[100%]" src={Herobg} alt='Hero'/>
      <div className=" absolute w-[35%] h-[50%] right-12 bottom-20 bg-[#DFE9F4] px-5 py-3 items-center space-y-4">
        <span >New Arrival</span>
        <h1 className="font-semibold text-6xl text-[#054C73]">Discover Our New Collection</h1>
        <p className="text-sm">Step into a world of style, comfort, and craftsmanship.
          Our curated furniture collection blends modern design with timeless appeal perfect for every room and every lifestyle. </p>
        <button className="rounded-3xl py-3 px-8 bg-[#054C73] text-white">Buy Now</button>
        
      </div>
      
    </section>
  );
}

export default Herosection;