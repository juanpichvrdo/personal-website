import React from 'react'
import Layout from '../../components/layout'

import projectInfo from '../../assets/information/projectInfo'

import './projects.scss'

const Projects = () => {
  return (
    <Layout>
      <div className="projects">
        <h1 className="projects-heading">
          <span className="tags">{'<'}</span>
          Projects <span className="tags">{'/>'}</span>
        </h1>
        <p
          className="projects-text"
          style={{ fontSize: '2rem', textAlign: 'center' }}
        >
          Here are some of the things I've build, all of these projects are
          completely responsive:
        </p>

        {projectInfo.map(project => {
          return (
            <div className="projects-container">
              <h3 className="projects-subheading">{project.projectName} </h3>
              <img
                src={project.imgPath}
                alt={project.projectName}
                className="projects-img"
              />
              <p className="projects-text">{project.projectInfoText}</p>
              <h4
                className="projects-subheading"
                style={{
                  border: 'none',
                  fontWeight: '700',
                  fontSize: '2.5rem',
                }}
              >
                Tech:{' '}
                {project.languajes.map(languaje => {
                  return (
                    <span
                      className={languaje.className}
                      style={{ fontSize: '3.5rem', marginLeft: '1rem' }}
                    />
                  )
                })}
              </h4>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <a
                  className="projects-link"
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: '1.5rem' }}
                >
                  Code{' '}
                  <span
                    className="icon-github"
                    style={{ fontSize: '3rem', marginLeft: '.5rem' }}
                  />
                </a>
                {project.demoLink && (
                  <a
                    className="projects-link"
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Projects
