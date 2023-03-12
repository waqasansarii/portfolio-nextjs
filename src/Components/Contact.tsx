import React from 'react'
import { IoLocation } from 'react-icons/io5'
import { BsFillPhoneFill } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import Social from './Social'

const Contact = () => {
  return (
    <div className="w-full h-full py-5 px-2 bg-black pb-[5rem]">
      <h1 className="text-teal-700 text-4xl sm:text-7xl text-center font-bold">Contact</h1>
      <div className="flex flex-wrap sm:flex-nowrap sm:justify-between flex-wrap items-center max-w-4xl m-auto py-8">
        <div className='w-full sm:w-1/3 my-3 sm:my-0'>
          <div className="flex items-center">
            <IoLocation className="text-4xl text-teal-700 " />
            <p className="text-gray-600 text-xl">Loaction</p>
          </div>
          <p className="text-2xl text-white mx-2  my-2">Pakistan</p>
        </div>
        <div className='w-full sm:w-1/3 my-3 sm:my-0'>
          <div className="flex items-center">
            <BsFillPhoneFill className="text-4xl text-teal-700 " />
            <p className="text-gray-600">Phone</p>
          </div>
          <p className="text-2xl text-white my-2 text-">0310-1165278</p>
        </div>
        <div className='w-full sm:w-1/3 my-3 sm:my-0'>
          <div className="flex items-center">
            <HiOutlineMail className="text-4xl text-teal-700 " />
            <p className="text-gray-600">Email</p>
          </div>
          {/* <p>Pakistan</p> */}
          <a
            href="mailto:ansariwaqas310@gmail.com"
            className="text-2xl text-white flex my-2 underline"
          >
            ansariwaqas310@gmail.com
          </a>
        </div>
      </div>
      <Social />
    </div>
  )
}

export default Contact
