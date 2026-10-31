import ProjectImage from "./ProjectImage";
import userData from "@/constants/data";

export default function FeaturedProjects() {
  const otherProjects = userData.projects.filter(project => !userData.selectedProjects.some(item => item.title === project.title));
  return (
    <section id="projects" className="content-section">
      <div className="section-title"><h2>Selected projects</h2><span className="section-note">Academic & personal work</span></div>
      <div className="project-list">
        {userData.selectedProjects.map(item => {
          const project = userData.projects.find(p => p.title === item.title)!;
          return (
            <article className="project" key={item.title}>
              <ProjectImage src={project.imgUrl} title={project.title} />
              <div className="project-body">
                <p className="meta">{item.category}</p>
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    {project.liveLink && <a href={project.liveLink} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live app`}>Live app <span aria-hidden="true">↗</span></a>}
                    <a href={project.codeLink} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source code`}>Source code <span aria-hidden="true">↗</span></a>
                  </div>
                </div>
                <p>{item.summary}</p>
                <ul className="tags" aria-label="Technologies used">{project.technologies.map(tool => <li key={tool}>{tool}</li>)}</ul>
                <details className="project-details">
                  <summary>My contribution <span aria-hidden="true">+</span></summary>
                  <div><p>{item.contribution}</p></div>
                </details>
              </div>
            </article>
          );
        })}
      </div>
      <details className="project-archive">
        <summary>More projects <span aria-hidden="true">+</span></summary>
        <div className="archive-list">{otherProjects.map(project => <article key={project.title}><h3><a href={project.codeLink} target="_blank" rel="noreferrer">{project.title} ↗</a></h3><p>{project.description.replaceAll("—", ": ")}</p><p className="meta">{project.technologies.join(" / ")}</p></article>)}</div>
      </details>
      <a className="text-link" href={`${userData.socialLinks.github}?tab=repositories`} target="_blank" rel="noreferrer">Explore my GitHub profile <span aria-hidden="true">↗</span></a>
    </section>
  );
}
