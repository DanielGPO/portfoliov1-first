import React from 'react'
import {motion} from 'framer-motion'
function Skills() {
  return (
    <div className='sm:h-screen w-[500px] md:w-full mt-[60px] bg-black sm:mt-0 h-[1080px] relative'>

          <div className=' flex flex-col ml-[130px] md:ml-[330px] mt-[130px] lg:ml-[600px] '>
          <h3 className='uppercase py-10 tracking-[8px] md:tracking-[20px] text-gray-500 text-2xl'
          >Skills
          </h3>
          </div>

          <motion.div
          initial={{x: -400, opacity: 0,}}
          transition={{duration: 0.8}}
          whileInView={{opacity: 1, x: 0}}

          className='sm:gap-10 gap-4  grid md:grid-cols-3 grid-cols-1  sm:grid-cols-2 px-10 py-18 sm:ml-32 md:ml-[200px]  relative cursor-pointer '>
        
         <div className='relative  '
         >
           <div className='absolute hidden lg:inline-block  md:w-full h-full bg-gray-700/60 opacity-0 hover:opacity-100 text-white rounded-full'><p className='absolute right-0 text-2xl pt-8 pr-10'>Finalizado</p></div>
            <img
            className='rounded-full border border-gray-500 object-cover w-20 h-20  xl:w-32
             xl:h-32 filter  hover:grayscale'
            src="https://ui-lib.com/blog/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png" alt="" />
         </div>
         <div className='relative '>
            <div className='absolute hidden lg:inline-block  md:w-full h-full bg-gray-700/60 opacity-0 hover:opacity-100 text-white rounded-full'><p className='absolute right-0 text-2xl pt-8 pr-10'>Progresso: 78%</p></div>
            <img
            className='rounded-full border border-gray-500 object-cover w-20 h-20  xl:w-32
             xl:h-32  filter  hover:grayscale'
            src="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt="" />
         </div>
         <div className='relative '>
            <div className='absolute hidden lg:inline-block  md:w-full h-full bg-gray-700/60 opacity-0 hover:opacity-100 text-white rounded-full'><p className='absolute right-0 text-2xl pt-8 pr-10'>Finalizado</p></div>
            <img
            className='rounded-full border border-gray-500 object-cover w-20 h-20  xl:w-32
             xl:h-32  filter  hover:grayscale'
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt="" />
         </div>
         <div className='relative '>
            <div className='absolute hidden lg:inline-block  md:w-full h-full bg-gray-700/60 opacity-0 hover:opacity-100 text-white rounded-full'><p className='absolute right-0 text-2xl pt-8 pr-10'>Finalizado</p></div>
            <img
            className='rounded-full border border-gray-500 object-cover w-20 h-20  xl:w-32
             xl:h-32 filter  hover:grayscale'
            src="https://www.pngkey.com/png/detail/624-6241203_css-icon-png-cascading-style-sheets.png" alt="" />
         </div>
         <div className='relative '>
            <div className='absolute hidden lg:inline-block  md:w-full h-full bg-gray-700/60 opacity-0 hover:opacity-100 text-white rounded-full'><p className='absolute right-0 text-2xl pt-8 pr-10'>Finalizado</p></div>
            <img
            className='rounded-full border border-gray-500 object-cover w-20 h-20  xl:w-32
             xl:h-32 filter  hover:grayscale'
            src="https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png?hl=pt-br" alt="" />
         </div>
         <div className='relative'>
            <div className='absolute hidden lg:inline-block  md:w-full h-full bg-gray-700/60 opacity-0 hover:opacity-100 text-white rounded-full'><p className='absolute right-0 text-2xl pt-8 pr-10'>Progresso: 82%</p></div>
            <img
            className='rounded-full border border-gray-500 object-cover w-20 h-20  xl:w-32
             xl:h-32 filter  hover:grayscale'
            src="https://www.kindpng.com/picc/m/67-678384_transparent-javascript-icon-png-png-download.png" alt="" />
         </div>
         <div className='relative'>
            <div className='absolute hidden lg:inline-block  md:w-full h-full bg-gray-700/60 opacity-0 hover:opacity-100 text-white rounded-full'><p className='absolute right-0 text-2xl pt-8 pr-10'>Finalizado</p></div>
            <img
            className='rounded-full border border-gray-500 object-cover w-20  h-20  xl:w-32
             xl:h-32 filter  hover:grayscale'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk03fpMxbjzvgaDz2z3gu5G-9UeqgnNfUdd7gzSo9-er843XxKIG3g46lO1GRUF-L9UWs&usqp=CAU" alt="" />
         </div>
         <div className='relative'>
            <div className='absolute hidden lg:inline-block  md:w-full h-full bg-gray-700/60 opacity-0 hover:opacity-100 text-white rounded-full'><p className='absolute right-0 text-2xl pt-8 pr-10'>Finalizado</p></div>
            <img
            className='rounded-full border border-gray-500 object-cover w-20 h-20 xl:w-32
             xl:h-32 filter  hover:grayscale'
            src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" alt="" />
         </div>
          
        </motion.div>

        
    </div>
  )
}

export default Skills