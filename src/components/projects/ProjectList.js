import React from 'react'
import ProjectSummary from './ProjectSummary'
import {Link} from 'react-router-dom'

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      <ul>
        {projects && projects.map(project => {
          return(
            <li key={project.id}>
            <Link to={"/project/"+project.id}>
            <ProjectSummary project={project} key={project.id} />
            </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ProjectList