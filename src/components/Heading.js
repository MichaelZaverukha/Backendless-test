import React from 'react'
import { Link } from 'react-router-dom'
function Heading() {
  return (
    <header className='header'>
      <div className='header__wrapper'>
         <h1 className='header__logo'>Insight</h1>
         <Link to={'/insightAdd'} className='header__button'>Add an article</Link>
      </div>
    </header>
  )
}

export default Heading