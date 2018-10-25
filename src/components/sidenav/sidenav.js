import React, { Component } from 'react'
import { Link } from 'gatsby'
import Logo from '../logo/logo'

import './sidenav.scss'
import './menu.scss'

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

class Sidenav extends Component {
  state = {
    sideNavOpen: false,
  }

  handleViewSideNav = () => {
    this.setState({ sideNavOpen: !this.state.sideNavOpen })
  }

  render() {
    const sideNavClass = this.state.sideNavOpen
      ? 'sidenav sidenav-open'
      : 'sidenav'
    const btnClass = this.state.sideNavOpen ? 'menu-btn open' : 'menu-btn'

    return (
      <div>
        <React.Fragment>
          <div onClick={this.handleViewSideNav} className={btnClass}>
            <div className="btn-line" />
            <div className="btn-line" />
            <div className="btn-line" />
          </div>
          <div className={sideNavClass}>
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
        </React.Fragment>
      </div>
    )
  }
}

// const Sidenav = () => {
//   return (

//   )
// }

export default Sidenav
