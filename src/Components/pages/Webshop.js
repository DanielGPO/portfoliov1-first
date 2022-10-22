import {Link} from 'react-router-dom'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {BsArrowReturnLeft} from 'react-icons/bs'
import Web1 from '../assets/Web1.png'
import Web2 from '../assets/Web2.png'
import Web3 from '../assets/Web3.png'
import Web4 from '../assets/Web4.png'

function Webshop() {
  return (
    <div className=' overflow-x-hidden  h-screen  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a] text-center bg-slate-900  
    md:text-left flex flex-col  px-5 mx-auto items-center'>

   <h3 className='lg:mx-[400px] w-[483px] xl:w-auto uppercase tracking-[20px] text-gray-500 text-2xl'
   >-UpStore-</h3>

    <div className='flex flex-col lg:flex-row'>
      <Link to='/'>
      <button className='left-5 absolute top-4 text-white hidden xl:inline-block'> <BsArrowReturnLeft className='text-3xl'/></button>
      </Link>

      <Link to='/lenux'>
      <button className='right-5 absolute top-4 text-white hidden xl:inline-block font-bold text-xl'> Próximo</button>
      </Link>

    <div className='flex flex-col'>

      <div className='xl:w-[800px] w-[480px] py-10 '>
        <img className='xl:w-full rounded-xl h-full object-contain' 
        src={Web1} alt="#" />
      </div>

      <div className='xl:w-[800px] w-[480px] py-10 '>
        <img className='xl:w-full rounded-xl h-full object-contain' 
        src={Web2} alt="#" />
      </div>

      <div className='xl:w-[800px] w-[480px] py-10 '>
        <img className='xl:w-full rounded-xl h-full object-contain' 
        src={Web3} alt="#" />
      </div>

      <div className='xl:w-[800px] w-[480px] py-10 '>
        <img className='xl:w-full rounded-xl h-full object-contain' 
        src={Web4} alt="#" />
      </div>

    </div>


    <div className='bg-black/30  text-white mt-10 xl:w-[500px] w-[475px] ml-2 h-[500px] rounded-xl lg:top-12 lg:sticky lg:right-0'>
    
      <div className='flex flex-row items-center'>

    <p className='text-2xl font-bold'>Ferramenta:</p>
      <div className='relative  '
         >
            <img
            className='rounded-full object-cover w-12 h-12  xl:w-18
             xl:h-18'
            src="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt="" />
      </div>
      <div className='relative  '
         >
            <img
            className='rounded-full object-cover w-12 h-12  xl:w-18
             xl:h-18'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk03fpMxbjzvgaDz2z3gu5G-9UeqgnNfUdd7gzSo9-er843XxKIG3g46lO1GRUF-L9UWs&usqp=CAU" alt="" />
      </div>
    </div>

    <div className='mt-24 lg:mb-10 mb-5 text-lg px-2'>
    <p className='text-2xl font-bold'>Resumo:</p>
      <p className='font-semibold'>UpStore foi um projeto "freestyle" não tive nenhuma 
      inspiração criativa externa e não pensei préviamente no design, ambos os 'produtos' e a sidebar foram feitos
       com uma Array. A principal motivação para criar esse projeto foi me familiarizar com o React.js, achei interessante colocar ele aqui uma vez que, pra mim, ele simboliza meu crescimento e aprendizado  </p>
    </div>
    <a href="https://github.com/bison7gpo/WebShop-Project/tree/master">
      <div className='hover:cursor-pointer hover:bg-gray-600 flex flex-row bg-gray-700 mx-32 text-white rounded-xl items-center p-2 w-[220px]'>
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

      <Link to='/lenux'>
      <button className=' text-white xl:hidden font-bold p-2 focus:bg-black/30 text-xl'> Próximo</button>
      </Link>

    </div>
  )
}

export default Webshop