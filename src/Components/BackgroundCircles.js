import React from 'react'
import {motion} from 'framer-motion'

function BackgroundCircles() {
  return (
    <div className=' whitespace-nowrap overflow-auto scrollbar-x-hide'>
    <motion.div
      initial={{
        x: -400,
    }}
    animate={{
        x: 900,
    }}
    transition={{duration: 3,}}
    className='absolute bottom-28 -left-2 hidden xl:inline-block'
    >
    <div className='border-b-2  border-white w-[400px] h-4'/>        
    </motion.div>

    <motion.div 
      initial={{
        x: 400,

    }}
    animate={{
        x: -910,
    }}
    transition={{duration: 3,}}
    className='absolute top-2 right-0 hidden xl:inline-block'
    >
    <div className='border-b-2  border-white w-[400px] h-4'/>        
    </motion.div>

    <motion.div
      initial={{
        y: 400,

    }}
    animate={{
        y: -160,
    }}
    transition={{duration: 3,}}
    className='absolute bottom-16 left-5'
    >
    <div className='border-r-2  border-white h-[400px] w-4'/>        
    </motion.div>

    <motion.div
      initial={{
        y: -400,

    }}
    animate={{
        y: 162,
    }}
    transition={{duration: 3,}}
    className='absolute -top-4 right-8'
    >
    <div className='border-l-2  border-white h-[400px] w-4'/>        
    </motion.div>
    </div>
  )
}

export default BackgroundCircles