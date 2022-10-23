import Dx2 from '../assets/Dx2.png'
import Dx3 from '../assets/Dx3.png'
import Dx4 from '../assets/Dx4.png'
import Dx1 from '../assets/Dx1.png'

import {Link} from 'react-router-dom'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {BsArrowReturnLeft} from 'react-icons/bs'


function DigitalX() {
  return (
    <div className=' text-center bg-slate-900 
    md:text-left flex flex-col  px-5 mx-auto items-center  overflow-x-hidden  h-screen  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]'>

   <h3 className='lg:mx-[400px] w-[483px] xl:w-auto uppercase tracking-[20px] text-gray-500 text-2xl'
   >-DigitalX-</h3>

    <div className='flex flex-col lg:flex-row'>
      <Link to='/'>
      <button className='left-5 absolute top-4 text-white hidden xl:inline-block'> <BsArrowReturnLeft className='text-3xl'/></button>
      </Link>

      <Link to='/webshop'>
      <button className='right-5 absolute top-4 text-white hidden xl:inline-block font-bold text-xl'> Próximo</button>
      </Link>

    <div className='flex flex-col'>

      <div className='xl:w-[800px] w-[322px] ml-[2px] py-10 '>
        <img className='xl:w-full rounded-xl h-full object-contain' 
        src={Dx1} alt="#" />
      </div>

      <div className='xl:w-[800px] w-[322px] ml-[2px] py-10 '>
        <img className='xl:w-full rounded-xl h-full object-contain' 
        src={Dx2} alt="#" />
      </div>

      <div className='xl:w-[800px] w-[322px] ml-[2px] py-10 '>
        <img className='xl:w-full rounded-xl h-full object-contain' 
        src={Dx3} alt="#" />
      </div>

      <div className='xl:w-[800px] w-[322px] ml-[2px] py-10 '>
        <img className='xl:w-full rounded-xl h-full object-contain' 
        src={Dx4} alt="#" />
      </div>

    </div>


    <div className='bg-black/30  text-white mt-10 xl:w-[500px] w-[330px] h-[460px] rounded-xl lg:top-12 lg:sticky lg:right-0'>
    
      <div className='flex flex-row items-center'>

    <p className='text-2xl font-bold'>Ferramentas:</p>
      <div className='relative  '
         >
            <img
            className='rounded-full object-cover w-12 h-12  xl:w-18
             xl:h-18'
            src="https://www.pngkey.com/png/detail/624-6241203_css-icon-png-cascading-style-sheets.png" alt="" />
      </div>
      <div className='relative  '
         >
            <img
            className='rounded-full object-cover w-12 h-12  xl:w-18
             xl:h-18'
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt="" />
      </div>
      <div className='relative  '
         >
            <img
            className='rounded-full object-cover w-12 h-12  xl:w-18
             xl:h-18'
            src="https://www.kindpng.com/picc/m/67-678384_transparent-javascript-icon-png-png-download.png" alt="" />
      </div>
    </div>

    <div className='mt-24 lg:mb-10 mb-5 text-lg px-2'>
    <p className='text-2xl font-bold'>Resumo:</p>
      <p className='font-semibold text-sm md:text-lg'>Eu possuo esse hábito de querer criar aplicações web sem nenhum design em mente, sem ter ideia de como vai terminar. Esse caso foi um deles, um dos meus primeiros projetos feitos com HTML5. </p>
    </div>
    
      <a href="https://github.com/bison7gpo/DigitalX/tree/master">
      <div className='hover:cursor-pointer hover:bg-gray-600 flex flex-row bg-gray-700 mx-16 md:mx-32 text-white rounded-xl items-center p-2 w-[220px]'>
        <p className='text-lg font-semibold'>Código no Github:</p>

        <SocialIcon
         fgColor='white'
         network='github'
         bgColor='transparent'
          /> 
  
      </div>

      </a>

    </div>
  
    </div>
      
    <Link to='/'>
      <button className='text-white mt-20 font-bold text-xl p-2 focus:bg-black/30  xl:hidden mb-10' > Página inicial </button>
      </Link>

      <Link to='/webshop'>
      <button className=' text-white xl:hidden font-bold p-2 focus:bg-black/30 text-xl'> Próximo</button>
      </Link>

    </div>
  )
}

export default DigitalX