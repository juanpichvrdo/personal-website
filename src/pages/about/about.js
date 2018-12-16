import React from 'react'
import Layout from '../../components/layout'

import { skills, familiar, tools } from '../../assets/information/skills'

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
          My skills primarily lie in the front end, but I am able of working my
          way through the backend and I'm capable of doing UI design. I have a
          big thirst for learning new things, I'm leveling my skillset and
          acquiring new knowledge every day!
        </p>
        <h3 className="about-subheading">Skills </h3>
        <div className="skills-grid">
          {skills.map(skill => {
            return (
              <div className="skills-icon-container">
                <span
                  className={skill.class}
                  style={{ fontSize: '5rem', marginBottom: '.5rem' }}
                />
                <p className="skills-text">{skill.name}</p>
              </div>
            )
          })}
        </div>
        <h3 className="about-subheading">Familiar </h3>
        <div className="skills-grid">
          {familiar.map(skill => {
            return (
              <div className="skills-icon-container">
                <span
                  className={skill.class}
                  style={{ fontSize: '5rem', marginBottom: '.5rem' }}
                />
                <p className="skills-text">{skill.name}</p>
              </div>
            )
          })}
        </div>
        <h3 className="about-subheading">Tools </h3>
        <div className="skills-grid">
          {tools.map(tool => {
            return (
              <div className="skills-icon-container">
                <span
                  className={tool.class}
                  style={{ fontSize: '5rem', marginBottom: '.5rem' }}
                />
                <p className="skills-text">{tool.name}</p>
              </div>
            )
          })}
          <div className="skills-icon-container">
            <p className="skills-text">Adobe xd</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
