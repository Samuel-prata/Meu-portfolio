import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <>
    <nav>
        <div className='container1'>
            <img src='src/assets/logo.png' alt="" />
        <p>Sobre mim</p>
        </div>
         
        <div className='container2'>
            <ul className='topics'>
                <li>Experiências</li>
                <li>Tecnologias</li>
                <li>Projetos</li>
            </ul>
        </div>       
        </nav>
    </>

  )
}
