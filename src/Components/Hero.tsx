import React from 'react'
import Image from 'next/image'

import Typewriter from 'typewriter-effect'
import Social from './Social'

const Hero = () => {
  return (
    <div className="w-full min-h-screen px-3 bg-black flex direction-column">
      <div className="max-w-4xl  m-auto">
        <h1 className="text-teal-700 text-center text-5xl sm:text-7xl w-fit m-auto font-extrabold">
          <p className="text-sm sm:text-xl text-start">Hello,</p> I'm Waqas,
        </h1>
        <h2 className="text-gray-500 text-center w-fit my-5 mx-auto text-2xl sm:text-5xl font-bold flex justify-center ">
          <Typewriter
            options={{
              strings: [' Full Stack developer', ' Blockchain developer'],
              autoStart: true,
              loop: true,
              wrapperClassName: 'mx-2 text-teal-700',
            }}
          />
        </h2>
        <p className="text-gray-500 my-9 sm:w-[500px] mx-auto text-center">
          I am a full stack developer having 2 years of experience. Currently, I
          am working at smash code as a full stack and Dapp developer, it's a
          remote job. I have developed multiple projects for clients, I can
          solve complex problems. I have completed BS in Mathematics from FUUAST
        </p>
        <Social />
      </div>
    </div>
  )
}

export default Hero
