import React from 'react'
import { GrReactjs } from 'react-icons/gr'
import { IoLogoCss3, IoLogoHtml5 } from 'react-icons/io'
import {
  TbBrandFirebase,
  TbBrandJavascript,
  TbBrandTypescript,
} from 'react-icons/tb'

import { SiSolidity ,SiRedux} from 'react-icons/si'

const Skills = () => {
  return (
    <div className="w-full h-fit bg-black">
      <h1 className="text-teal-700 text-7xl text-center font-bold">
        My Skills
      </h1>
      <div className="flex max-w-4xl mx-auto py-[5rem] justify-center gap-8 flex-wrap">
        <div
          className="skills"
        >
          <IoLogoHtml5 className="text-4xl text-white" />
          <p className="text-teal-700 mt-2 font-bold">HTML</p>
          <h2 className="text-5xl font-bold text-white mt-2">100%</h2>
          <div className="absolute w-[200px] h-full rounded-full border-x-[10px]  border-teal-700"></div>
        </div>
        <div className="skills">
          <IoLogoCss3 className="text-4xl text-white" />
          <p className="text-teal-700 mt-2 font-bold">CSS</p>
          <h2 className="text-5xl font-bold text-white mt-2">100%</h2>
          <div className="absolute w-[200px] h-full rounded-full border-x-[10px]  border-teal-700"></div>
        </div>
        <div className="skills">
          <TbBrandJavascript className="text-4xl text-white" />
          <p className="text-teal-700 mt-2 font-bold">JavaScript</p>
          <h2 className="text-5xl font-bold text-white mt-2">70%</h2>
          <div className="absolute w-[200px] h-full rounded-full border-x-[10px]  border-teal-700"></div>
        </div>
        <div className="skills">
          <TbBrandTypescript className="text-4xl text-white" />
          <p className="text-teal-700 mt-2 font-bold">TypeScript</p>
          <h2 className="text-5xl font-bold text-white mt-2">70%</h2>
          <div className="absolute w-[200px] h-full rounded-full border-x-[10px]  border-teal-700"></div>
        </div>
        <div className="skills">
          <SiSolidity className="text-4xl text-white" />
          <p className="text-teal-700 mt-2 font-bold">Solidity</p>
          <h2 className="text-5xl font-bold text-white mt-2">60%</h2>
          <div className="absolute w-[200px] h-full rounded-full border-x-[10px]  border-teal-700"></div>
        </div>
        <div className="skills">
          <TbBrandFirebase className="text-4xl text-white" />
          <p className="text-teal-700 mt-2 font-bold">Firebase</p>
          <h2 className="text-5xl font-bold text-white mt-2">80%</h2>
          <div className="absolute w-[200px] h-full rounded-full border-x-[10px]  border-teal-700"></div>
        </div>
        <div className="skills">
          <GrReactjs className="text-4xl text-white" />
          <p className="text-teal-700 mt-2 font-bold">ReactJs</p>
          <h2 className="text-5xl font-bold text-white mt-2">90%</h2>
          <div className="absolute w-[200px] h-full rounded-full border-x-[10px]  border-teal-700"></div>
        </div>
        <div className="skills">
          <SiRedux className="text-4xl text-white" />
          <p className="text-teal-700 mt-2 font-bold">Redux</p>
          <h2 className="text-5xl font-bold text-white mt-2">70%</h2>
          <div className="absolute w-[200px] h-full rounded-full border-x-[10px]  border-teal-700"></div>
        </div>
      </div>
    </div>
  )
}

export default Skills
