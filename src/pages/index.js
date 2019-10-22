import React from 'react'
import Layout from '../components/layout'

import './index.scss'

const IndexPage = () => (
  <Layout>
    <div className="home">
      <h1 className="home-heading">
        <span className="tags">{'<'}</span>
        Juan Daniel <span className="tags">{'/>'}</span>
      </h1>
      <p className="home-text">
        Hi, I'm Juan! I'm a 22-year-old web developer born and raised in Santo Domingo, Dominican Republic. I love simple,
        clean UI's and creating user-friendly webapps using cutting edge
        technologies.
      </p>
      <p className="home-text">
        You can see some of my code on my{' '}
        <a
          className="home-links"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/juanpichvrdo"
        >
          Github
        </a>{' '}
        or if you want to talk you can shoot me
        a{' '}
        <a className="home-links" href="mailto:jpichardopena@gmail.com">
          message!
        </a>
      </p>
    </div>
  </Layout>
)

export default IndexPage;

// You can read my CV{ ' ' }
// <a
//   className="home-links"
//   target="_blank"
//   rel="noopener noreferrer"
//   href="https://drive.google.com/open?id=1XiCYet-RQbxkV80i3FtNx1q8gbdAHWTs"
// >
//   here
//         </a>
