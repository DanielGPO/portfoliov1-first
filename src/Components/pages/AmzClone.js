import { Link } from 'react-router-dom'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {BsArrowReturnLeft} from 'react-icons/bs'
import Amz1 from '../assets/Amz1.png'
import Amz2 from '../assets/Amz2.png'
import Amz3 from '../assets/Amz3.png'
import Amz4 from '../assets/Amz4.png'

function Amzclone() {

  return (
    <div className=' text-center bg-slate-900 
    md:text-left flex flex-col  px-5 mx-auto items-center   overflow-x-hidden  h-screen  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]'>

   <h3 className='lg:mx-[400px] w-[483px] xl:w-auto uppercase tracking-[20px] text-gray-500 text-2xl'
   >-Amazon</h3>

    <div className='flex flex-col lg:flex-row'>
      <Link to='/'>
      <button className='left-5 absolute top-4 text-white hidden xl:inline-block'> <BsArrowReturnLeft className='text-3xl'/></button>
      </Link>

      <Link to='/digitalx'>
      <button className='right-5 absolute top-4 text-white hidden xl:inline-block font-bold text-xl'> Próximo</button>
      </Link>

    <div className='flex flex-col'>

      <div className='xl:w-[800px] w-[322px] ml-[20px] py-10 '>
        <img className='xl:w-full rounded-xl h-full object-contain' 
        src={Amz1} alt="foto1" />
      </div>

      <div className='xl:w-[800px] w-[322px] ml-[20px] py-10 '>
        <img className='xl:w-full rounded-xl h-full object-contain' 
        src={Amz2} alt="foto2" />
      </div>

      <div className='xl:w-[800px] w-[322px] ml-[20px] py-10 '>
        <img className='xl:w-full rounded-xl h-full object-contain' 
        src={Amz3} alt="foto3" />
      </div>

      <div className='xl:w-[800px] w-[322px] ml-[20px] py-10 '>
        <img className='xl:w-full rounded-xl h-full object-contain' 
        src={Amz4} alt="foto4" />
      </div>

    </div>


    <div className='bg-black/30  text-white mt-10 xl:w-[500px] md:w-[475px] w-[360px] ml-2 h-[500px] rounded-xl lg:top-12 lg:sticky lg:right-0'>
    
      <div className='flex flex-row items-center'>

    <p className='md:text-2xl ml-8 font-bold'>Ferramentas:</p>

    <div className='relative ml-2 '
         >
            <img
            className='rounded-full object-cover w-12 h-12  xl:w-18
             xl:h-18'
            src="https://ui-lib.com/blog/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png" alt="" />
         </div>
    <div className='relative  '
         >
            <img
            className='rounded-full object-cover w-12 h-12  xl:w-18
             xl:h-18'
            src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" alt="" />
         </div>

    <div className='relative  '
         >
            <img
            className='rounded-full object-cover w-12 h-12  xl:w-18
             xl:h-18'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk03fpMxbjzvgaDz2z3gu5G-9UeqgnNfUdd7gzSo9-er843XxKIG3g46lO1GRUF-L9UWs&usqp=CAU" alt="" />
         </div>

      <div className='relative  '
         >
            <img
            className='rounded-full object-cover w-12 h-12  xl:w-18
             xl:h-18'
            src="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt="" />
      </div>
    </div>

    <div className='mt-24 lg:mb-10 mb-5 text-lg px-2'>
    <p className='text-2xl font-bold'>Resumo:</p>
      <p className='font-semibold text-sm md:text-lg'>Esse projeto se mostrou ser bem tranquilo de ser feito com a ajuda da Fakestore API e Redux. Não tive grandes dificuldades nem fiquei preso por horas resolvendo erros, oque costumava acontecer
       sempre que eu utilizava uma API. O slider foi feito com o react-responsive-carousel e esse design do antigo site da amazon se deu porque o design atual não parecia tão divertido.  </p>
    </div>


      <a href="https://github.com/bison7gpo/Amazon_Clone/tree/master">
      <div className='hover:cursor-pointer hover:bg-gray-600 flex flex-row bg-gray-700 md:mx-32 mx-[80px] text-white rounded-xl items-center p-2 w-[220px]'>
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

      <Link to='/digitalx'>
      <button className=' text-white xl:hidden font-bold p-2 focus:bg-black/30 text-xl'> Próximo</button>
      </Link>

    </div>
  )
}

export default Amzclone