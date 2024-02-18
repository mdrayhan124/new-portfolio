import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
import usestate from '../assets/portfolio/usestate.jpg'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: arrayDestruct
        },
        {
            id: 1,
            src: installNode
        },
        {
            id: 1,
            src: navbar
        },
        {
            id: 1,
            src: reactParallax
        },
        {
            id: 1,
            src: reactWeather
        },
        {
            id: 1,
            src: usestate
        }
    ]

    return (
        <div name="portfolio" className=' bg-gradient-to-b from-black to-gray-800 text-white md:h-screen'>
            <div className=' max-w-screen-lg w-full h-full p-4 mx-auto flex flex-col justify-center'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold border-b-4 border-gray-600 inline capitalize'>Portfolio</p>
                    <p className='py-6'>lets check out my works</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portfolios.map(({ id, src }) => (
                            <div key={id} className=' shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt="img" className='rounded-md duration-200 hover:scale-105' />
                                <div className='flex justify-center items-center'>
                                    <button className='w-1/2 duration-300 px-6 py-3 hover:scale-105'>code</button>
                                    <button className='w-1/2 duration-300 px-6 py-3 hover:scale-105'>demo</button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Portfolio