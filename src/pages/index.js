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
        Hi, I'm Juan! I'm a 21-year-old web developer born, raised, and
        currently living in Santo Domingo, Dominican Republic. I love simple,
        clean UI's and creating user-friendly webapps using cutting edge
        technologies.
      </p>
      <p className="home-text">
        When not playing around with code, you can catch me trying to finish my
        system engineer degree.
      </p>
      <p className="home-text">
        You can read my CV{' '}
        <a
          className="home-links"
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/open?id=1qSNSwUh8-uhpA5grA0snp4GM1Y5-Lg6d"
        >
          here
        </a>
        , see some of my code on my{' '}
        <a
          className="home-links"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/juanpichvrdo"
        >
          Github
        </a>{' '}
        or if you want to talk about work, tech or movies/music you can shoot me
        a{' '}
        <a className="home-links" href="mailto:jpichardopena@gmail.com">
          message!
        </a>
      </p>
    </div>
  </Layout>
)

export default IndexPage
