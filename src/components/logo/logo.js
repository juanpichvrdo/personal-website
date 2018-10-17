import React from 'react'
import Tilt from 'react-tilt'
import './Logo.scss'
import logo from './logo.png'

const Logo = () => {
  return (
    <div className="logo-container">
      <Tilt className="Tilt" options={{ max: 50 }}>
        <div className="Tilt-inner">
          <img src={logo} alt="Logo" className="logo-img" />{' '}
        </div>
      </Tilt>
    </div>
  )
}

export default Logo
