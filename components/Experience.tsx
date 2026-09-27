import userData from "@/constants/data";

export default function Experience() {
  const [internship, ...leadership] = userData.experience;
  return (
    <section id="experience" className="content-section">
      <h2>Experience</h2>
      <article className="experience-entry">
        <p className="meta">{internship.year.replace("—", "-")}</p>
        <h3>{internship.title}</h3>
        <p className="organization">{internship.company}</p>
        <ul className="contributions">
          <li>Built an internal monitoring dashboard with Laravel, React, and SQL Server.</li>
          <li>Created a Python Windows service to automate secure payslip emails using SQL Server.</li>
          <li>Developed a standalone CRUD application with secure REST APIs and onboarding documentation.</li>
        </ul>
        <ul className="tags" aria-label="Technologies used">
          {["Python", "SQL Server", "Laravel", "React", "REST APIs"].map(tool => <li key={tool}>{tool}</li>)}
        </ul>
      </article>
      <details className="leadership">
        <summary>Leadership & community <span aria-hidden="true">+</span></summary>
        <div className="leadership-content">
          {leadership.map(item => (
            <article key={item.title}>
              <p className="meta">{item.year.replace("—", "-")}</p>
              <h3>{item.title}</h3>
              <p className="organization">{item.company}</p>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </details>
    </section>
  );
}
