import React from 'react'
import Tilt from 'react-tilt'
import './logo.scss'
import logo from '../../images/logo.png'

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
