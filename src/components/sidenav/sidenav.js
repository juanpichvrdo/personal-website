import React from 'react'
import { Link } from 'gatsby'
import Logo from '../logo/logo'

import './sidenav.scss'

const links = [
  {
    name: 'Home',
    linkTo: '/',
  },
  {
    name: 'About',
    linkTo: '/about/about',
  },
  {
    name: 'Projects',
    linkTo: '/projects/projects',
  },
  {
    name: 'Contact',
    linkTo: '/contact/contact',
  },
]

const Sidenav = () => {
  return (
    <div className="sidenav">
      <Logo />
      <ul className="sidenav-list">
        {links.map(link => (
          <li className="sidenav-item" key={link.name}>
            <Link to={link.linkTo} className="sidenav-link">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <p className="sidenav-footer">
        Coded with{' '}
        <span
          className="icon-heart"
          style={{ fontSize: '1.4rem', color: '#f0bc5e' }}
        />{' '}
        and{' '}
        <span
          className="icon-music"
          style={{ fontSize: '1.4rem', color: '#f0bc5e' }}
        />{' '}
        by Juan D.
      </p>
    </div>
  )
}

export default Sidenav
