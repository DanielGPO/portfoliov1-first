import React from 'react'
import {Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import {motion} from 'framer-motion'
import Eu2 from './assets/Eu2.jpg'
function Hero() {

  const [text, count] = useTypewriter({
    words:[
        ".. Olá, meu nome é Daniel Gomes",
        ".. Quero ser um desenvolvedor Front-End",
        "..<Esse é meu Portfólio />",
    ],
    loop: true,
    delaySpeed:2000,
})

  return (
    <main className='h-screen bg-black/60 flex relative'>
      <BackgroundCircles/>

      <motion.div
      initial={{
        y: -500,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity:1,
      }}
      transition={{
        duration: 1.5,
      }}
      className='absolute bg-gradient-to-r from-green-700 to-slate-700 lg:left-[280px] left-0 w-[340px] mt-[70px] lg:top-0 flex flex-row  md:w-[800px] items-center rounded-l-full rounded-r-full'>
        <img className='md:h-[150px] h-[130px] pl-1  object-cover w-[120px] lg:h-[150px]  lg:w-[150px] rounded-full ' 
        src={Eu2}
         alt='Eu de óculos, hihi' />
        
        <h1 className='text-md md:text-5xl font-semibold px-10 relative'>
           <span className='mr-3 text-slate-200'>{text}</span>
           <Cursor cursorColor='#ffff'/>
        </h1>
      </motion.div>
    <h2 className='text-sm uppercase absolute bottom-[300px] lg:bottom-[330px] w-[500px] lg:left-[460px] md:left-[250px] left-[42px] text-gray-400 pb-2 tracking-[7px] lg:tracking-[15px]'>
              Software Enginnner
          </h2>
         
            <div className='pt-5 absolute flex flex-row bottom-[260px] left-10 lg:left-[460px] md:left-[150px] mx-auto'>
           
            <a href='#sobre'>
            <button className='heroButton'>Sobre mim</button>
            </a>

            <a  href='#skills'>
            <button className='heroButton'>Skills</button>
            </a>

            <a  href='#projetos'>
            <button className='heroButton'>Projetos</button>
            </a>
        </div>
    

    </main>
  )
}

export default Hero