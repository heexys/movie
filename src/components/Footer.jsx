import React from 'react'
import Icons from './Icons'

import logo from '../assets/footer_logo.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer_container'>
        <div className="footer_logo">
            <img src={logo} alt="" />
        </div>
        <div className="">
            <div>
                <div>
                    <h1>HEEXYS.KINO</h1>
                </div>
                <div>
                    <NavLink to={""}>Horror</NavLink>
                </div>
            </div>
            <div></div>
        </div>
        <Icons />
    </div>
  )
}

export default Footer   