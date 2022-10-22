import React from 'react'
import {motion} from 'framer-motion'
function Sobre() {
  return (
         <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    viewport={{once: true}}    
     className='md:h-[1200px] lg:h-screen h-[1100px] flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 hidden md:inline-block uppercase tracking-[20px] text-white'>
            Sobre mim
        </h3>

        <motion.img
        initial={{
            x: -200,
            opacity: 0
        }}
        transition={{
            duration: 0.9,
        }}
        whileInView={{opacity:1, x: 0}}   
        src='https://dsm01pap007files.storage.live.com/y4miFM9l5U0RoXhiJ1z6X34b0WAvSwC21HjbiD3safhQZwM1nXoVO0t1bApr0Kksue9VRgpoaT0dzEKqx1-W1LBTqiCo4HmxM1G3eEOuwe5rCgfK4VO0m0JW3QfhABqvHTPgNXEFgP32rMEiex7TUtzUWwvquEP1wq_zJYKJ47Pq3HsifyBRvWsxenSNCQzxmwQlcYeWVeJDPAP6X9zIrgA_Rb3QECPcvYuRoMErzo8Mhc?encodeFailures=1&width=1366&height=647'
        alt='Eu'
        className='h-56 w-56 mt-[100px] md:mt-0 rounded-full -mb-20 md:mb-0 flex-shrink-0  md:w-64 md:h-[600px] xl:w-[400px] xl:h-[400px] object-cover'
        />
        <div className='space-y-10 px-0 md:px-10 text-white'>
            <h4 className='text-4xl mt-[100px] md:mt-0 font-semibold'>Um pouquinho <span className='underline decoration-[#f7ab0a]/50'>{" "}Sobre mim</span>
            </h4>
            <p className='text-base '>Tenho 20 anos, estudei sozinho por 3 anos para concursos militares, a cada ano que passava mais
                perto eu sentia que estava de ser aprovado, mas pra ser
                sincero essa vontade nunca veio realmente de mim, eu percebi que havia herdado os desejos dos 
                meus familiares e me vi cada vez mais
                sem a sensação de vontade própria. Eu não odiava a ideia de "estabilidade" que me prometiam mas 
                eu não queria dedicar minha vida toda a um ideal que não era meu.
                Uma frase famosa de Stan Lee sempre ficou gravada na minha memória onde ele dizia "Working with 
                what you love isn't work at all" ou algo assim. Eu sempre tive facilidade para aprender, sejam 
                fórmulas pra calcular volumes de pirâmides, inglês ou oque é uma oração subordinada substantiva
                objetiva direta e foi pensando nisso que buscando algo que eu quisesse fazer pra vida toda eu encontrei a
                <span className='underline decoration-[#f7ab0a]/50'
                >{" "}Programação.</span> Eu estou apaixonado, e percebi isso logo no começo aprendendo HTML e CSS, o suficiente pra me fazer entrar nessa aventura de cabeça. 
                Estou estudando sozinho do jeito que eu gosto e sinto confortável, quanto mais eu aprendo mais quero aprender, 
                as vezes parece que dedicar 100% do meu dia não é o suficiente e as vezes eu não vejo a hora de ter minha primeira experiência trabalhando de verdade.
                eu poderia ficar falando o como estou apaixonado por essa área pra sempre aqui mas acho que vai ser mais fácil de explicar te mostrando. Be my guest!</p>
        </div>
    </motion.div>
        
  )
}

export default Sobre