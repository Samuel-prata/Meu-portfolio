import React from 'react'
import "./Header.css"
import logo from '../../assets/logo.png'

export default function Header() {

  return (
    <>
    <nav>
        <div className='container1'>
            <img src={logo} alt="" />
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
