import React from 'react';
import Logo from "../../assets/website/coffee_logo.png";
import {FaCoffee} from "react-icons/fa"

const Menus = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Services",
        link: "/#services",
    },
    {
        id: 3,
        name: "About",
        link: "/#about",
    },
]

const Navbar = () => {
  return (
    
    <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
      <div className="container py-2">
        <div className="flex justify-between items-center gap-4">
            {/*Logo Section*/}
            <div data-aos="fade-down" data-aos-once="true">
                <a 
                    href='#' 
                    className='font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive'
                >
                    <img src={Logo} alt="Logo" className='w-14'/>
                    Δε Βιλατζ
                </a>
            </div>
           
            {/*Links Section*/}
            <div 
                data-aos="fade-down"
                data-aos-once="true"
                data-aos-delay="300"
                className='flex justify-between items-center gap-4'
            >
                <ul className='hidden sm:flex items-center gap-4'>
                    {Menus.map((data, index) =>(
                        <li key={index}>
                            <a href={data.link} className='inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200'>
                                {data.name}
                            </a>
                        </li>
                    ))}
                </ul>                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
