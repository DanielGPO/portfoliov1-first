import React, { useRef, useState } from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import Lenux1 from './assets/Lenux1.png'
import Amz1 from './assets/Amz1.png'
import Web1 from './assets/Web1.png'
import Net1 from './assets/Net1.png'
import Dx1 from './assets/Dx1.png'


import { useInView } from "framer-motion"

function Projetos() {
  

  const projetos = [
    {
        name: 'Amazon ',
        image: Amz1,
        path: '/amzclone',
    },
    {
        name: 'DigitalX ',
        image: Dx1,
        path: '/digitalx',
    },
    {
        name: 'WebShop',
        image: Web1,
        path: '/webshop',
    },
    {
        name: 'Lenux',
        image: Lenux1,
        path: '/lenux',
    },
    {
        name: 'Netflix',
        image: Net1,
        path: '/netflix',
    },

  ]
  const [tip, setTip] = useState(false)

  function ajuda(){
    setTip(!tip)
  }


  return (
    <div
    className='lg:h-[1200px] xl:h-[1200px] md:h-[1240px] h-[2200px] md:pt-2  pt-[400px] '>
      
         <div className='h-[1000px]  relative flex flex-col text-left md:flex-row
     max-w-full justify-evenly mx-auto items-center z-0'>

        <h3 className='  absolute lg:top-12 md:top-0  -top-[380px] uppercase tracking-[20px] text-gray-500 text-2xl'
        >Projetos</h3>
        {
        tip 
        ? 
        <p onClick={ajuda} className='px-2 bg-yellow-500 rounded-md text-md font-bold absolute md:top-10 -top-[330px] hover:cursor-pointer hover:bg-yellow-700 right-5 md:right-[100px] z-50'
        >Click em um projeto para saber mais</p> 
        :   
        <p onClick={ajuda} className='px-2 bg-yellow-500 rounded-full text-md font-bold absolute md:top-10 -top-[330px] animate-pulse hover:cursor-pointer hover:bg-yellow-700 right-5 md:right-[100px] z-50'
        > ? </p>
        }
    

        <motion.div
           initial={{
            y: 400,
            opacity: 0
        }}
        transition={{
            duration: 1,
        }}
        whileInView={{opacity:1, y: 0}}
        viewport={{once: true}}   

        className=' w-full grid md:grid-cols-2 grid-cols-1 lg:mt-[300px] gap-6 mt-[200px]   md:ml-0'>
          {projetos.map((projeto, i) => (
            <Link to={`${projeto.path}`}>
          <div key={i} className='bg-transparent relative lg:w-[600px] md:w-[400px] w-[340px] mx-4 group  h-[340px] rounded-lg p-2 hover:cursor-pointer hover:border border-white'>
            <img
             className='w-full  object-cover h-full rounded-lg  hover:cursor-pointer ' src={projeto.image} alt={projeto.name} />

             <div 
              className='absolute hover:cursor-pointer -bottom-3 bg-yellow-600 group-hover:bg-slate-800 w-[240px] items-center md:w-[300px] ml-6 md:ml-12'>
              <p className='text-black px-20 text-xl hover:cursor-pointer group-hover:text-white'>{projeto.name}</p>  
             </div>
          </div>
            </Link>
          ))}
        </motion.div>

        <div className='w-full absolute top-[30%] bg-[#f7AB0A]/10 left-0 h-[500px] -skew-y-12 -z-10'/>
    </div>
    </div>
  )
}

export default Projetos