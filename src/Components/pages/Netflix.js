import {Link} from 'react-router-dom'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {BsArrowReturnLeft} from 'react-icons/bs'
import Net1 from '../assets/Net1.png'
import Net2 from '../assets/Net2.png'
import Net3 from '../assets/Net3.png'
import Net4 from '../assets/Net4.png'




function Netflix() {
  return (
    <div className=' text-center bg-slate-900 
    md:text-left flex flex-col  px-5 mx-auto items-center   overflow-x-hidden  h-screen  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]'>

   <h3 className='lg:mx-[400px] w-[483px] xl:w-auto uppercase tracking-[20px] text-gray-500 text-2xl'
   >-NETFLIX-</h3>

    <div className='flex flex-col lg:flex-row'>
      <Link to='/'>
      <button className='left-5 absolute top-4 text-white hidden xl:inline-block'> <BsArrowReturnLeft className='text-3xl'/></button>
      </Link>

      <Link to='/amzclone'>
      <button className='right-5 absolute top-4 text-white hidden xl:inline-block font-bold text-xl'> Próximo</button>
      </Link>

    <div className='flex flex-col'>

      <div className='xl:w-[800px] w-[322px] ml-[16px] py-10 '>
        <img className='xl:w-full rounded-md h-full object-contain' 
        src={Net1} alt="Net1" />
      </div>

      <div className='xl:w-[800px] w-[322px] ml-[16px] py-10 '>
        <img className='xl:w-full rounded-md h-full object-contain' 
        src={Net2} alt="#" />
      </div>

      <div className='xl:w-[800px] w-[322px] ml-[16px] py-10 '>
        <img className='xl:w-full rounded-md h-full object-contain' 
        src={Net3} alt="#" />
      </div>

      <div className='xl:w-[800px] w-[322px] ml-[16px] py-10 '>
        <img className='xl:w-full rounded-md h-full object-contain' 
        src={Net4} alt="#" />
      </div>

    </div>


    <div className='bg-black/30  text-white mt-10 lg:mt-0 xl:w-[500px] w-[370px] ml-2 md:h-[590px] h-[500px] rounded-xl lg:top-12 lg:sticky lg:right-0'>
    
      <div className='flex flex-row items-center'>

    <p className='md:text-2xl text-md md:ml-2 ml-8 font-bold'>Ferramentas:</p>

    <div className='relative  '
         >
            <img
            className='rounded-full object-cover w-12 h-12  xl:w-18
             xl:h-18'
            src="https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png?hl=pt-br" alt="" />
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

    <div className='mt-24 lg:mb-10 mb-5 text-lg px-2 w-[340px] md:w-auto ml-4'>
    <p className='md:text-2xl text-md font-bold'>Resumo:</p>
      <p className='font-semibold text-sm md:text-lg'>Foi Criado no intuito de aprender a usar tailwindcss mas acabei também usando o firebase e useContext para criação de conta e login,
    também possui uma Route protegida e tentei brincar um pouco colocando o video de introdução da Netflix ao clicar em um dos shows. Bem simples porém muito divertido. 
    Me impressionei com o quão fácil o firebase cria um sistema de criação de conta. Pretendo usar mais vezes no futuro. </p>
    </div>

    <a href="https://github.com/bison7gpo/Netflix-clone-Project/tree/master">
      <div className='hover:cursor-pointer hover:bg-gray-600 flex flex-row bg-gray-700 mx-[80px] md:mx-32 text-white rounded-xl items-center p-2 w-[220px]'>
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

      <Link to='/amzclone'>
      <button className=' text-white xl:hidden font-bold p-2 focus:bg-black/30 text-xl'> Próximo</button>
      </Link>

    </div>
  )
}

export default Netflix