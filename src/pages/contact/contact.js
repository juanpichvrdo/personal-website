import React from 'react'
import Layout from '../../components/layout'

import './contact.scss'

const contactInfo = [
  {
    icon: 'icon-github',
    href: 'https://github.com/juanpichvrdo',
    text: 'juanpichvrdo',
  },
  {
    icon: 'icon-gmail',
    href: 'mailto:jpichardopena@gmail.com',
    text: 'jpichardopena@gmail.com',
  },
  // {
  //   icon: 'icon-linkedin',
  //   href: 'https://www.linkedin.com/in/juandanielpichardo/',
  //   text: 'Juan Daniel Pichardo Peña',
  // },
]

const Contact = () => {
  return (
    <Layout>
      <div className="contact">
        <h1 className="contact-heading">
          <span className="tags">{'<'}</span>
          Contact <span className="tags">{'/>'}</span>
        </h1>
        <p className="contact-text">
          Feel free to contact me through any of the channels below.
        </p>

        <div className="contact-container">
          {contactInfo.map(contact => {
            return (
              <div className="contact-medium">
                <span
                  className={contact.icon}
                  style={{ fontSize: '4rem', marginBottom: '.5rem' }}
                />
                <a
                  className="contact-links"
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.text}
                </a>
              </div>
            )
          })}

          <div className="contact-medium" style={{ display: 'inline-block' }}>
            <span
              className="icon-phone"
              style={{ fontSize: '4rem', marginBottom: '.5rem' }}
            />
            <span className="contact-phone">829-543-6988</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
