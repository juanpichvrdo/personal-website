import React from 'react'
import Layout from '../../components/layout'
import { FaReact } from 'react-icons/fa'

import './about.scss'

const About = () => {
  return <Layout>
      <div className="about">
        <h1 className="about-heading">
          <span className="tags">{'<'}</span>
          About <span className="tags">{'/>'}</span>
        </h1>
        <p className="about-text">
          My skills primarily lie in the front end, but I'm leveling my
          skillset everyday and branching to other areas.
        </p>
        <h3 className="about-subheading">Skills </h3>
        <FaReact style={{color: 'orangered'}} />
      </div>
    </Layout>
}

export default About
