import React from 'react'
import Layout from '../../components/layout'

import './contact.scss'

const Contact = () => {
  return (
    <Layout>
      <div className="contact">
        <h1 className="contact-heading">
          <span className="tags">{'<'}</span>
          Contact <span className="tags">{'/>'}</span>
        </h1>
        <h3 className="contact-subheading">
          Feel free to contact me through any of the channels below.
        </h3>

        <div className="contact-container">
          <div className="contact-medium">
            <span
              className="icon-gmail"
              style={{ fontSize: '5rem', marginBottom: '.5rem' }}
            />
            <a className="contact-links" href="mailto:jpichardopena@gmail.com">
              jpichardopena@gmail.com
            </a>
          </div>
          <div className="contact-medium">
            <span
              className="icon-linkedin"
              style={{ fontSize: '5rem', marginBottom: '.5rem' }}
            />
            <a
              className="contact-links"
              href="https://www.linkedin.com/in/juandanielpichardo/"
            >
              Juan Daniel Pichardo Peña
            </a>
          </div>
          <div className="contact-medium">
            <span
              className="icon-github"
              style={{ fontSize: '5rem', marginBottom: '.5rem' }}
            />
            <a className="contact-links" href="https://github.com/juanpichvrdo">
              juanpichvrdo
            </a>
          </div>
          <div className="contact-medium">
            <span
              className="icon-phone"
              style={{ fontSize: '5rem', marginBottom: '.5rem' }}
            />
            <span>829-543-6988</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
