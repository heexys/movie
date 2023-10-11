import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/Kino.svg'

const nav__links = [
    {
        path:'Film',
        display: 'Film'
    },
    {
        path:'Series',
        display: 'Series'
    },
    {
        path:'Сartoons',
        display: 'Сartoons'
    },
    {
        path:'Anime',
        display: 'Anime'
    },
    {
        path:'Best',
        display: 'Best'
    },
]


const Header = () => {

    const navigate = useNavigate();
  return (
    <header className='header_container'>
        <div className="heade_logo">
            <img src={logo} alt="kino" onClick={() => {navigate('/');}} />
        </div>
        <div className="header_navigator">
        <ul className="header_menu">
            {nav__links.map((item, index) => (
                
                <NavLink
                    key={index}
                    onClick={() => {}}
                    to={item.path}
                    className={(navClass) =>
                    navClass.isActive ?  'nav__active' : ''
                    }
                >
                    <li className='nav__item'>{item.display}</li>
                </NavLink>  
            ))}
        </ul>
        </div>
    </header>
  )
}

export default Header