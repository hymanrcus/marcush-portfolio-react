import { projects } from "/Users/mrmeanor/code/sei/labs/marcush-porfolio-react/src/data/projects.js";
import { useLocation } from "react-router-dom";
import findProject from "/Users/mrmeanor/code/sei/labs/marcush-porfolio-react/src/utillities/findProject.js";

const ProjectDetails = () => {
  const location = useLocation()
  const project = findProject(location.pathname)
  return ( 
    <>
      <h1> {projects.title} </h1>
      <p> {project.description} </p>
      <img src={project.image} alt="proj screenshot" />
    </>
  );
}

export default ProjectDetails;