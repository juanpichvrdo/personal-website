import React from 'react'
import Layout from '../../components/layout'

import './about.scss'

const About = () => {
  return (
    <Layout>
      <div className="about">
        <h1 className="about-heading">
          <span className="tags">{'<'}</span>
          About <span className="tags">{'/>'}</span>
        </h1>
        <p className="about-text">
          My skills primarily lie in the front end, but I'm leveling my skillset
          everyday.
        </p>
        <h3 className="about-subheading">Skills</h3>
      </div>
    </Layout>
  )
}

export default About
