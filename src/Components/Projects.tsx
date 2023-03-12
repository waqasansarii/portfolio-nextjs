import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className="w-full h-fit bg-black py-[6rem] ">
      <h1 className="text-teal-700 text-7xl text-center font-bold">
        My Proects
      </h1>
      {/* project div  */}
      <div className="flex column-3  flex-wrap justify-center max-w-6xl gap-8 m-auto my-8 ">
        <div className="rounded-lg relative projectCard ">
          <Image src={'/sebratec.png'} width={'500'} height={'300'} className='rounded-lg' alt="" />
          <div className="absolute top-[50%] left-[50%] z-10 bg-black/70 w-[90%] text-center p-5 rounded-xl">
            <p className="text-white text-xl my-2">Sebratec</p>
            <h5 className="text-white my-2">Frontend/html, css and javaScript</h5>
            <a
              href="#"
              // target="_blank"
              // rel="noopener noreferrer"
              className="text-teal-700 font-bold"
            >
              View more
            </a>
          </div>
        </div>
        <div className="rounded-lg relative projectCard ">
          <Image src={'/order.png'} width={'500'} height={'300'} className='rounded-lg' alt="" />
          <div className="absolute top-[50%] left-[50%] z-10 bg-black/70 w-[90%] text-center p-5 rounded-xl">
            <p className="text-white text-xl my-2">Order champ</p>
            <h5 className="text-white my-2">Frontend/html, css and javaScript</h5>
            <a
              // href="https://smashcode-orderchamp.netlify.app/"
              href='#'
              // target="_blank"
              // rel="noopener noreferrer"
              className="text-teal-700 font-bold"
            >
              View more
            </a>
          </div>
        </div>
        <div className="rounded-lg relative projectCard ">
          <Image src={'/ecom.png'} width={'500'} className='object-cover rounded-lg' height={'300'} alt="" />
          <div className="absolute top-[50%] left-[50%] z-10 bg-black/70 w-[90%] text-center p-5 rounded-xl">
            <p className="text-white text-xl my-2">E-commerce</p>
            <h5 className="text-white my-2">Frontend/ReactJs, redux</h5>
            <a
              // href="https://smashcode-eccommerce.netlify.app/"
              href='#'
              // target="_blank"
              // rel="noopener noreferrer"
              className="text-teal-700 font-bold"
            >
              View more
            </a>
          </div>
        </div>
        <div className="rounded-lg relative projectCard ">
          <Image src={'/rarare.png'} width={'500'} className='object-cover rounded-lg' height={'300'} alt="" />
          <div className="absolute top-[50%] left-[50%] z-10 bg-black/70 w-[90%] text-center p-5 rounded-xl">
            <p className="text-white text-xl my-2">Rarare</p>
            <h5 className="text-white my-2">Frontend/ReactJs</h5>
            <a
              // href="https://smashcode-rarare.netlify.app/"
              href='#'
              // target="_blank"
              // rel="noopener noreferrer"
              className="text-teal-700 font-bold"
            >
              View more
            </a>
          </div>
        </div>
        <div className="rounded-lg relative projectCard ">
          <Image src={'/talenya.png'} width={'500'} className='object-cover rounded-lg' height={'300'} alt="" />
          <div className="absolute top-[50%] left-[50%] z-10 bg-black/70 w-[90%] text-center p-5 rounded-xl">
            <p className="text-white text-xl my-2">Talenya</p>
            <h5 className="text-white my-2">Frontend/ReactJs, emailjs</h5>
            <a
              // href="https://smashcode-talenya.netlify.app/"
              href='#'
              // target="_blank"
              // rel="noopener noreferrer"
              className="text-teal-700 font-bold"
            >
              View more
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
