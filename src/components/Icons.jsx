import React from 'react'

import {FaTelegramPlane, FaFacebookF, FaTwitter} from 'react-icons/fa';

const Icons = () => {
  return (
    <ul className='icons_div'>
        <li><FaFacebookF /></li>
        <li><FaTelegramPlane /></li>
        <li><FaTwitter /></li>
    </ul>
  )
}

export default Icons