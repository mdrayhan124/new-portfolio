import React from "react"
import html from '../assets/html.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import javascript from '../assets/javascript.png'
import nextjs from '../assets/nextjs.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'


const Experinces = () => {

    const experiences = [
        {
            id: 1,
            title: "HTML",
            src: html,
            style:"shadow-orange-500"
        },
        {
            id: 2,
            title: "CSS",
            src: css,
            style:"shadow-blue-500"
        },
        {
            id: 3,
            title: "JavaScript",
            src: javascript,
            style:"shadow-yellow-500"
        },
        {
            id: 4,
            title: "github",
            src: github,
            style:"shadow-gray-500"
        },
        {
            id: 5,
            title: "React",
            src: react,
            style:"shadow-sky-500"
        },
        {
            id: 6,
            title: "nextjs",
            src: nextjs,
            style:"shadow-white"
        },
        {
            id: 7,
            title: "Tailwind",
            src: tailwind,
            style:"shadow-sky-800"
        },

    ]

    return (
        <div name="experiences" className=" bg-gradient-to-b from-gray-800 to-black w-full h-screen">
            <div className="max-w-screen-lg p-4 flex flex-col justify-center text-white w-full h-full">
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-600 inline capitalize'>Experiences</p>
                    <p className="py-6">Here are the technologis i have work with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-12 py-8 sm:px-0">
                    {
                        experiences.map(({ id, title, src,style }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-300 ${style}`}>
                                <img src={src} alt="img" className="w-20 mx-auto" />
                                <p className="mt-4">{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experinces