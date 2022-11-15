import { projects } from "/Users/mrmeanor/code/sei/labs/marcush-porfolio-react/src/data/project.js";
import ProjectsList from "/Users/mrmeanor/code/sei/labs/marcush-porfolio-react/src/components/ProjectList.jsx";

const Projects = () => {
  return ( 
    <>
    <ProjectsList projects={projects}/>
    </>
  );
}

export default Projects;