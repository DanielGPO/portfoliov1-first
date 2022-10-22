import React from 'react'
import Contato from './Contato'
import Header from './Header'
import Hero from './Hero'
import Projetos from './Projetos'
import Skills from './Skills'
import Sobre from './Sobre'

function Content() {
  return (
    <main className='bg-[rgb(36,36,36)] overflow-x-hidden  h-screen  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a] '>
        <Header/>

        <section>
        <Hero/>
        </section>

        <section id='sobre'>
        <Sobre/>
        </section>

        <section id='skills'>
        <Skills/>
        </section>

        <section id='projetos'>
        <Projetos/>
        </section>

        <section id='contato'>
        <Contato/>
        </section>
      
    </main>
  )
}

export default Content
