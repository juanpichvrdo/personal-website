import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Sidenav from './sidenav/sidenav'
import './style.scss'
import './layout.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Personal portfolio page for Web Developer Juan Daniel.',
            },
            {
              name: 'keywords',
              content:
                'Web, Developer, Santo Domingo, Programación, Code, HTML, CSS, Javascript, React, PHP, Responsive',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className="layout" style={{ transition: 'all .5s' }}>
          <Sidenav className="sidenav" />
          <div className="body">{children}</div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
