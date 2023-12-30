import React from 'react'
import header from './header.css'
import logo from './img/logo.svg'

const Header = () => {
  return (
    <div className='header'>
        <img src={logo} alt="" className="logo" />

        <div className="block-menu">
            <a href="" className="link-menu">О нас</a>
            <a href="" className="link-menu">Проекты</a>
            <a href="" className="link-menu">Материалы</a>
            <a href="" className="link-menu">Отзывы</a>
        </div>

        <a href="tel:+7 999 999 99 99" className="tel">+7 999 999 99 99</a>
    </div>
  )
}

export default Header