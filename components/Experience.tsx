import userData from "@/constants/data";

function ExperienceEntry({
  item,
}: {
  item: (typeof userData.experience)[number];
}) {
  return (
    <article className="experience-entry">
      <p className="meta">{item.year.replace("—", "-")}</p>
      <h3>{item.title}</h3>
      <p className="organization">{item.company}</p>
      {item.desc.length > 0 && (
        <ul className="contributions">
          {item.desc.map((description) => (
            <li key={description}>{description}</li>
          ))}
        </ul>
      )}
      {"technologies" in item &&
        item.technologies &&
        item.technologies.length > 0 && (
        <ul className="tags" aria-label="Technologies used">
          {item.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        )}
    </article>
  );
}

export default function Experience() {
  const workExperience = userData.experience.filter(
    (item) => item.type === "Work",
  );
  const leadershipExperience = userData.experience.filter(
    (item) => item.type === "Leadership",
  );

  return (
    <section id="experience" className="content-section">
      <h2>Experience</h2>
      {workExperience.map((item) => (
        <ExperienceEntry key={item.title} item={item} />
      ))}
      <details className="leadership">
        <summary>
          Leadership &amp; community <span aria-hidden="true">+</span>
        </summary>
        <div className="leadership-content">
          {leadershipExperience.map((item) => (
            <ExperienceEntry key={item.title} item={item} />
          ))}
        </div>
      </details>
    </section>
  );
}
