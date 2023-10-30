import React from 'react'
import Image from '../images/parag.jpg'
import Email from '../images/email.png'
import LinkedIn from '../images/linkedin.jpg'
import Icon from './Icon'

function Info() {
  return (
    <div className='info'>
        <img src={Image} alt='Parag Chhaltre' className='image'></img>
        <h2 className='name'>Parag Chhalotre</h2>
        <p className='role'>Frontend Developer</p>
        <p className='website'>paragchhalotre.website</p>
        <div className='buttons'>
        <Icon src={Email} className='email' href='https://mail.google.com/mail/?view=cm&fs=1&to=paragchhalotre3@gmail.com'></Icon>
        <Icon src={LinkedIn} className='linkedin' href='https://www.linkedin.com/in/parag-chhalotre-953554236/'></Icon>
        </div>
    </div>
  )
}

export default Info