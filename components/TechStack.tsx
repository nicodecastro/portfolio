const groups = [
  ["Languages & analysis", "Python, R, SQL"],
  ["Databases", "MariaDB, SQL Server, MongoDB"],
  ["Applications & APIs", "React, Laravel, Express"],
  ["Tools & platforms", "Git, Firebase, Shiny"],
];

export default function TechStack() {
  return (
    <section className="content-section toolkit" aria-labelledby="toolkit-heading">
      <h2 id="toolkit-heading">Toolkit</h2>
      <p>The tools I’ve used across my projects and internship.</p>
      <dl>{groups.map(([label, tools]) => <div key={label}><dt>{label}</dt><dd>{tools}</dd></div>)}</dl>
    </section>
  );
}
