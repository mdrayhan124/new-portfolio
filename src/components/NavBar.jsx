import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {

    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: "home"
        },
        {
            id: 2,
            link: "about"
        },
        {
            id: 4,
            link: "portfolio"
        },
        {
            id: 4,
            link: "experience"
        },
        {
            id: 3,
            link: "contact"
        },

    ]

    return (
        <div className='flex justify-between items-center text-white bg-black fixed w-full h-20 px-4'>
            <div>
                <h1 className='font-signature text-5xl'>Rayhan</h1>
            </div>
            <ul className='hidden md:flex'>
                {
                    links.map(({ id, link }) => (
                        <li key={id} className='pl-4 text-gray-500 cursor-pointer hover:scale-105 hover:text-white duration-200 capitalize '><Link to={link} smooth duration={500}>{link}</Link></li>
                    ))
                }
            </ul>

            <div onClick={() => setNav(!nav)} className='text-gray-500 z-10 md:hidden'>
                {
                    nav ? <FaTimes size={30} /> : <FaBars size={30} />
                }
            </div>
            {
                nav && (
                    <ul className='flex flex-col justify-center items-center w-full h-screen absolute top-0 left-0 bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                        {
                            links.map(({ id, link }) => (
                                <li key={id} className='px-4 cursor-pointer capitalize text-4xl py-6 hover:text-white'>
                                    <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                                </li>
                            ))
                        }
                    </ul>
                )
            }

        </div>
    )
}

export default NavBar