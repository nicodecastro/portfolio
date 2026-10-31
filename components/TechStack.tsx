import userData from "@/constants/data";

export default function TechStack() {
  return (
    <section className="content-section toolkit" aria-labelledby="toolkit-heading">
      <h2 id="toolkit-heading">Toolkit</h2>
      <p>The tools I’ve used across my projects and work.</p>
      <dl>{userData.techStack.map(({ label, lines }) =>
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
