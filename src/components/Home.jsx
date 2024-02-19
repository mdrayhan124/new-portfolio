import React from 'react'
import HeroImage from '../assets/heroImage.png'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
            <div className=' max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h1 className='text-4xl sm:text-7xl text-white font-bold'>I'm a Front-End Developer</h1>
                    <p className='py-4 text-gray-500 max-w-md '>I have 1 years of experience building and desgining websites.
                        Currently, I love to work on web application using technologies like
                        React, Tailwind, Next JS.</p>
                    <Link to='portfolio' smooth duration={500} className=' group text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 w-fit cursor-pointer gap-3'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <FaArrowRight />
                        </span>
                    </Link>
                </div>
                <div>
                    <img src={HeroImage} alt="my-profile"  className='rounded-2xl w-2/3 md:w-full'/>
                </div>
            </div>
        </div>
    )
}

export default Home