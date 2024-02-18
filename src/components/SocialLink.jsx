import React from 'react'
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const SocialLink = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkdin
                    < FaLinkedin size={30} />
                </>
            ),
            syle:"rounded-tr-md",
            href:"http://linkedin.com"
        },
        {
            id: 2,
            child: (
                <>
                    Facebook
                    < FaFacebook size={30} />
                </>
            ),
            href:"http://linkedin.com"
        },
        {
            id: 1,
            child: (
                <>
                    Mail
                    < IoMdMail size={30} />
                </>
            ),
            syle:"rounded-br-md",
            href:"mailto:test@gmail.com"
        }
    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {
                    links.map(({id,child,style,href})=>(
                        <li key={id} className={' bg-gray-500 flex justify-between items-center w-40 h-14 px-4 hover:rounded-md ml-[-100px] hover:ml-[-10px] duration-300' +" "+ style}>
                        <a href="" className='flex justify-between items-center w-full text-white'>
                            {child}
                        </a>
                    </li>
                    ))
                }
               
            </ul>
        </div>
    )
}

export default SocialLink