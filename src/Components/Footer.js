import React from 'react'
import X from '../images/twitter.png'
import Fb from '../images/facebook.png'
import Insta from '../images/instagram.png'
import Git from '../images/github.png'
import Icon from './Icon'

function Footer() {
  return (
    <div className='footer'>
        <Icon src={X} className='x' href='https://twitter.com/ChhalotreParag'></Icon>
        <Icon src={Fb} className='fb' href='https://www.facebook.com/profile.php?id=100075242471245'></Icon>
        <Icon src={Insta} className='insta' href='https://www.instagram.com/parag_chhalotre/'></Icon>
        <Icon src={Git} className='git' href='https://github.com/Parag123ch'></Icon>
    </div>
  )
}

export default Footer