import React from 'react'

const Contactme = () => {
    return (
        <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold border-b-4 border-gray-600 inline capitalize'>Contact</p>
                    <p className='py-6'>submi the form below to get in touch with me</p>
                </div>

                <div className='flex items-center justify-center'>
                    <form action="" className='w-full flex flex-col md:w-1/2 gap-2'>
                        <input
                            type="text"
                            name='name'
                            placeholder='Enter your name'
                            className='p-2 border-2 rounded-md bg-transparent text-white focus:outline-none'
                        />
                        <input
                            type="text"
                            name='email'
                            placeholder='Enter your email'
                            className='p-2 border-2 rounded-md bg-transparent text-white focus:outline-none'
                        />
                        <textarea name="messege" rows="10" className='p-2 border-2 rounded-md bg-transparent text-white focus:outline-none'></textarea>

                        <button
                            className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto my-8 flex items-center rounded-md duration-300 hover:scale-110 '
                        >let`s talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contactme