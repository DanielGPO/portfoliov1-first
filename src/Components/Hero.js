import React from 'react'
import {Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import {motion} from 'framer-motion'
function Hero() {

  const [text, count] = useTypewriter({
    words:[
        ".. Olá, meu nome é Daniel Gomes",
        ".. Sou um desenvolvedor Front-end autodidata",
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
      className='absolute bg-gradient-to-r from-green-700 to-slate-700 lg:left-[280px] left-0 lg:w-[800px] mt-[130px] flex flex-row  md:w-[800px] items-center rounded-l-full rounded-r-full'>
        <img className='h-[150px] pl-1  object-cover w-[150px] rounded-full only:mx-auto' 
        src='https://media-exp1.licdn.com/dms/image/D4E03AQFSJfs5-88FqA/profile-displayphoto-shrink_800_800/0/1665158244580?e=1670457600&v=beta&t=S7CM3sNvp6NK6h1c0WlIGuZo0WJ65GtH-joxrr4hiYQ'
         alt='Eu de óculos, hihi' />
        
        <h1 className='text-4xl lg:text-5xl font-semibold px-10 relative'>
           <span className='mr-3 text-slate-200'>{text}</span>
           <Cursor cursorColor='#ffff'/>
        </h1>
      </motion.div>
    <h2 className='text-sm uppercase absolute bottom-[330px] lg:bottom-[330px] w-[500px] lg:left-[460px] md:left-[150px] left-[47px] text-gray-400 pb-2 tracking-[15px]'>
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