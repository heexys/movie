import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Scrollbars from 'react-custom-scrollbars-2';
import Footer from '../Footer';

const Content = () => {
  return (
    <div className='content_container'>
      <Scrollbars>

      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='film' element={<FilmPage />} />
        <Route path='serial' element={<SerialPage />} />
        <Route path='cartoons' element={<MoviePage />} />
        <Route path='anime' element={<MoviePage />} />
        <Route path='best' element={<Page />} /> */}
      </Routes>
      <Footer />
      </Scrollbars>
    </div>
  )
}

export default Content