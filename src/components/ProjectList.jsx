import ProjectPreview from "/Users/mrmeanor/code/sei/labs/marcush-porfolio-react/src/components/ProjectPreveiw.jsx";

const ProjectsList = (props) => {
  return ( 
    <>
    <ul>
        {props.projects.map((project, i) =>

          <ProjectPreview title={project.title} key={i} image={project.image}/>


        )}
      </ul>
    </>
  );
}
export default ProjectsList;