import React from 'react'
import Layout from '../components/layout'

import './index.scss'

const IndexPage = () => (
  <Layout>
    <div className="home">
      <h1 className="home-heading">Juan Daniel</h1>
      <h3 className="home-subheading">
        <span className="tags">{'<'}</span>
        Web Developer <span className="tags">{'/>'}</span>
      </h3>
      <p>
        Hi! I'm Juan Daniel, self thaugth web developer born, raised, and
        currently linving in Santo Domingo, D.R
      </p>
    </div>
  </Layout>
)

export default IndexPage
