import { createContext } from 'react'

const ProjectDetailsContext = createContext({
  projectDetails: [],
  setProjectDetails: projectDetails => []
})


export default ProjectDetailsContext