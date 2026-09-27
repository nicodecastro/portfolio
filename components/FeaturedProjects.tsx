import Image from "next/image";
import userData from "@/constants/data";

const selected = [
  {
    title: "FoodUP",
    category: "Database design",
    summary: "A restaurant review application with a relational database and a Python desktop interface.",
    contribution: "Designed the MariaDB schema and implemented complex database queries, alongside full-stack application development.",
  },
  {
    title: "Generic Solvers App",
    category: "Numerical computing",
    summary: "An interactive application for interpolation, regression, and diet optimization.",
    contribution: "Implemented quadratic spline interpolation, polynomial regression, and the simplex method. Built the interface with R Shiny and deployed it on ShinyApps.",
  },
  {
    title: "AgriConnect",
    category: "Full-stack development",
    summary: "An academic e-commerce platform connecting farmers and consumers.",
    contribution: "Led a team of four through planning and execution, and contributed full-stack development with React, Express, MongoDB, and REST APIs.",
  },
];

export default function FeaturedProjects() {
  const otherProjects = userData.projects.filter(project => !selected.some(item => item.title === project.title));
  return (
    <section id="projects" className="content-section">
      <div className="section-title"><h2>Selected projects</h2><span className="section-note">Academic & personal work</span></div>
      <div className="project-list">
        {selected.map(item => {
          const project = userData.projects.find(p => p.title === item.title)!;
          return (
            <article className="project" key={item.title}>
              <a className="project-thumbnail" href={project.codeLink} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source on GitHub`}>
                <Image src={project.imgUrl} alt={`${project.title} application screenshot`} width={280} height={180} sizes="(max-width: 520px) 35vw, 130px" />
              </a>
              <div className="project-body">
                <p className="meta">{item.category}</p>
                <h3><a href={project.codeLink} target="_blank" rel="noreferrer">{project.title} <span aria-hidden="true">↗</span></a></h3>
                <p>{item.summary}</p>
                <ul className="tags" aria-label="Technologies used">{project.technologies.map(tool => <li key={tool}>{tool}</li>)}</ul>
                <details className="project-details">
                  <summary>My contribution <span aria-hidden="true">+</span></summary>
                  <div><p>{item.contribution}</p><div className="project-links"><a href={project.codeLink} target="_blank" rel="noreferrer">Source code ↗</a>{project.liveLink && <a href={project.liveLink} target="_blank" rel="noreferrer">Live app ↗</a>}</div></div>
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
      <a className="text-link" href={`${userData.socialLinks.github}?tab=repositories`} target="_blank" rel="noreferrer">Explore GitHub <span aria-hidden="true">↗</span></a>
    </section>
  );
}
