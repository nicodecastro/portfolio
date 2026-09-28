const groups: [string, string[]][] = [
  ["Languages & analysis", ["Python, SQL, C, JavaScript, Java, PHP, R"]],
  ["Data & Databases", [
    "Microsoft SQL Server, MySQL, MariaDB",
    "MongoDB, Firebase, Supabase",
    "CSV-based processing, Excel, Google Sheets"
  ]],
  ["Applications & APIs", [
    "JavaScript, TypeScript, React, Next.js, Tailwind CSS,",
    "Node.js, PHP, Express.js, Laravel, OAuth, JWT, REST",
  ]],
  ["Platforms & Tools", ["Git, Github, VS Code, Discord, Teams, Windows Services"]],
];

export default function TechStack() {
  return (
    <section className="content-section toolkit" aria-labelledby="toolkit-heading">
      <h2 id="toolkit-heading">Toolkit</h2>
      <p>The tools I’ve used across my projects and internship.</p>
      <dl>{groups.map(([label, lines]) => 
        <div key={label}>
            <dt>{label}</dt>
            <dd>
                {lines.map((line, i) => (
                    <span key={i}>{line}{i < lines.length - 1 && <br />}</span>
                ))}
            </dd>
        </div>)}
    </dl>
    </section>
  );
}
