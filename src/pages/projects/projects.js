import React from 'react'
import Layout from '../../components/layout'

import projectInfo from './projectInfo'

import './projects.scss'

const Projects = () => {
  return (
    <Layout>
      <div className="projects">
        <h1 className="projects-heading">
          <span className="tags">{'<'}</span>
          Projects <span className="tags">{'/>'}</span>
        </h1>
        <p className="projects-text" style={{ fontSize: '2rem' }}>
          Here are some of the things I've build, all of these projects are
          completly responsive:
        </p>

        {projectInfo.map(project => {
          return (
            <div className="projects-container">
              <h3 className="projects-subheading">{project.projectName} </h3>
              <img
                src={project.imgPath}
                alt={project.projectName}
                style={{ width: '100%' }}
              />
              <p className="projects-text">{project.projectInfoText}</p>
              <p className="projects-text" style={{ marginTop: '2rem' }}>
                Made with:{' '}
                {project.languajes.map(languaje => {
                  return (
                    <span
                      className={languaje.className}
                      style={{ fontSize: '3.5rem', marginLeft: '1rem' }}
                    />
                  )
                })}
              </p>
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
