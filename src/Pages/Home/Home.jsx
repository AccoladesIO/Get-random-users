import React from 'react'
import { useNavigate } from 'react-router'
import './Home.css'

const Home = () => {

  const navigate = useNavigate()
  const handleClick = () =>{
    navigate('/user')
  }

  return (
   <section className='section-home'>
    <article className='textBox'>
      <h1 className='heading-main'>Get Random Users Using Get Random Users API</h1>
      <h3 className='heading-alt'>Created with 💖 by Ononobi 'AccoladesIO' Praise</h3>
      <div className='button-wrapper'>
      <button type='button' onClick={handleClick}>Get Started</button>
      <button type='button'>ReadMe</button>
      </div> 
    </article>
   </section>
  )
}

export default Home