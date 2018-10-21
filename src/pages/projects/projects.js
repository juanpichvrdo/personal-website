import React from 'react'
import Layout from '../../components/layout'

import './projects.scss'

const Projects = () => {
  return (
    <Layout>
      <div className="projects">
        <h1 className="projects-heading">
          <span className="tags">{'<'}</span>
          Projects <span className="tags">{'/>'}</span>
        </h1>
        <h3 className="projects-subheading">Thing's I've build: </h3>
      </div>
    </Layout>
  )
}

export default Projects
