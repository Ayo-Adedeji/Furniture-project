import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { IoIosMenu } from 'react-icons/io';
import { LiaTimesSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleNavbar = () => {
    setMobileNav(!mobileNav);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      
      <nav className="flex items-center justify-between mt-5 mb-5 px-6">
        <h1 className="text-[#054C73] font-bold text-lg">Furniture</h1>

      
        <ul className="hidden md:flex gap-20 items-center">
          <Link to="/"><li>Home</li></Link>
          <li>Service</li>
          <Link to="/gallery"><li>Gallery</li></Link>
          <Link to="/cart"><li>Cart</li></Link>
          <Link to="/signin">
            <li className="text-white bg-[#054C73] hover:bg-[#054c7391] font-medium rounded-lg text-sm px-5 py-2.5">
              Sign in
            </li>
          </Link>
        </ul>

        
        {mobileNav ? (
          <LiaTimesSolid onClick={toggleNavbar} className="md:hidden text-3xl z-50" />
        ) : (
          <IoIosMenu onClick={toggleNavbar} className="md:hidden text-3xl z-50" />
        )}
      </nav>

      
      {mobileNav && (
        <aside
          className="flex flex-col gap-6 px-6 py-12 bg-white shadow-lg w-[70%] h-screen fixed right-0 top-0 md:hidden"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <ul className="space-y-6">
            <Link to="/"><li>Home</li></Link>
            <li>Service</li>
            <Link to="/gallery"><li>Gallery</li></Link>
            <Link to="/cart"><li>Cart</li></Link>
            <Link to="/signin">
              <li className="text-white bg-[#054C73] hover:bg-[#054c7391] font-medium rounded-lg text-sm px-5 py-2.5">
                Sign in
              </li>
            </Link>
          </ul>
        </aside>
      )}
    </>
  );
};

export default Navbar;
