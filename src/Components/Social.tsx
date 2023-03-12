import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsTwitter, BsGithub } from 'react-icons/bs'
import { RiWhatsappFill } from 'react-icons/ri'

const Social = () => {
  return (
    <div className="flex gap-4 mt-9 justify-center items-center">
    <a
      href="https://www.linkedin.com/in/waqas-ansari-778b371b0/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex border-sky-800 border-2 transition duration-900 ease-in-out delay-250 p-4 rounded-full hover:bg-sky-800"
    >
      <FaLinkedinIn className="text-white" />
    </a>
    <a
      href="https://twitter.com/Muhamma31919069"
      target="_blank"
      rel="noopener noreferrer"
      className="flex border-sky-500 border-2 transition duration-900 ease-in-out delay-250 p-4 align-center rounded-full hover:bg-sky-500"
    >
      <BsTwitter className="text-white" />
    </a>
    <a
      href="https://github.com/waqasansarii"
      target="_blank"
      rel="noopener noreferrer"
      className="flex border-gray-800 border-2 transition duration-900 ease-in-out delay-250 p-4 rounded-full hover:bg-zinc-900"
    >
      <BsGithub className="text-white" />
    </a>
    <a
      href="https://web.whatsapp.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex border-green-800 border-2 transition duration-900 ease-in-out delay-250 p-4 rounded-full hover:bg-green-700"
    >
      <RiWhatsappFill className="text-white" />
    </a>
  </div>
  )
}

export default Social