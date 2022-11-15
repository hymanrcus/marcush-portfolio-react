
const Project = ({projects}) => {
  return (
    <>
    {projects.map(project =>(
      <section>
        <h2>{project.name}</h2>
        <img src={project.image} alt={project.name} />
        <p>{project.description}</p>
      </section>
    ))}
    </>
  );
}

export default Project;