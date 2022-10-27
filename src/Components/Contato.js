import React,{ useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import { AiOutlinePhone, AiOutlineMail, AiFillCheckCircle } from 'react-icons/ai'
import {BsMap} from 'react-icons/bs'
function Contato() {
    const form = useRef();
    const [mail, setmail] = useState(false)

    function sent(){
        setmail(!mail)
    }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u8bnnne', 'template_kgbkf0pccascas', form.current, 'k69traPQDTAmihoqF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
      sent();
  };
  return (
    <div className='h-screen flex relative flex-col text-center
     md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
    <h3 className='absolute top-6 md:top-20 uppercase tracking-[20px] text-gray-500 text-2xl'
    >Contato</h3>
    {mail ?    
        <AiFillCheckCircle className='bg-transparent z-30 absolute right-0 top-32 h-12 w-12 text-green-500'/>
: null }

  
   
    <div className='flex flex-col  mt-[140px] space-y-10 absolute'>

        <div className='space-y-10'>
            <div className='flex items-center space-x-5 justify-center'>
            <AiOutlinePhone className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-2xl text-white'>21 - 973540213</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
            <AiOutlineMail className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-lg lg:text-2xl text-white'>d4nielgomesdeoliveira@gmail.com</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
            <BsMap className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-2xl text-white'>Rio de Janeiro</p>
            </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-2 w-[310px] md:space-x-2 md:w-fit mx-auto'>
            <div className='flex flex-col md:flex-row space-y-2 md:space-y-0  md:space-x-2'>
                <input name="client_name"placeholder='Name' required className='contactInput' type="text" />
                <input name="from_name" placeholder='Email' required className='contactInput' type="email" />
            </div>

            <input name="subject" placeholder='Assunto' className='contactInput' type="text" />

            <textarea name="message" placeholder='Mensagem' className='contactInput'/>

            <button type='submit' value='send' className='bg-[#F7AB0A] py-5 px10 rounded-md text-black font-bold text-lg'>Submit</button>
        </form>
    </div>

    </div>
  )
}

export default Contato