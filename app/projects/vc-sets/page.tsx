import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import ProjectImage from "@/components/ProjectImage";
import ThemeToggle from "@/components/ThemeToggle";
import userData from "@/constants/data";

export const metadata: Metadata = {
  title: "Nico De Castro | VC SETS Case study",
  description: "A case study of VC SETS, a cross-platform volleyball statistics app with offline scoring and tournament management.",
  robots: { index: false, follow: false },
};

export default function VCSetsCaseStudy() {
  const project = userData.projects.find(project => project.title === "VC SETS")!;

  return (
    <div className="case-study">
      <header className="case-study-navigation">
        <Link href="/#projects">← Back to projects</Link>
        <ThemeToggle />
      </header>
      <main id="main-content">
        <article aria-labelledby="case-study-title">
          <header className="case-study-intro">
            <h1 id="case-study-title">VC SETS</h1>
            <p className="case-study-deck">How I kept the stat encoding from becoming a post-tournament side quest</p>
            <p className="case-study-meta">
              <time dateTime="2026-10-31">October 31, 2026</time>
              <span aria-hidden="true"> · </span>
              <span>9 min read</span>
            </p>
            <div className="case-study-author">
              <Image src={userData.avatarUrl} alt="" width={30} height={30} />
              <span><strong>Nico De Castro</strong></span>
            </div>
            <figure className="case-study-figure">
                <ProjectImage src="/projects/vcsets-home.png" title={project.title} width={1850} height={880} sizes="(max-width: 760px) calc(100vw - 40px), 720px" />
                <figcaption>VC SETS Homepage.</figcaption>
            </figure>
            <section aria-labelledby="introduction-title">
              <h2 id="introduction-title">What is VC SETS?</h2>
              <p>
                VC SETS stands for the Volleyball Club Statistics & Event Tracking System, a volleyball player statistics and tournament management app that I developed for the UPLB Volleyball Club. It helps tournament staff organize matches, record player actions, and produce standings and statistics.
              </p> 
              <p>
                I built it with Flutter for cross-platform support for Windows, Android, and the web. Although, the web application was mainly used during the later stages of development and during deployment. It stores scoring data locally on each device. Two scorers record a match independently then an admin can import and compare their logs and resolve differences before finalizing an official result. Player statistics can be exported to the club&apos;s existing Google Sheets report for individual award calculations.
              </p>
              <ul className="tags" aria-label="Technologies used">
                {project.technologies.map(technology => <li key={technology}>{technology}</li>)}
              </ul>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noreferrer">Live app <span aria-hidden="true">↗</span></a>
                <a href={project.codeLink} target="_blank" rel="noreferrer">Source code <span aria-hidden="true">↗</span></a>
              </div>
              <div className="case-study-prompt">
                <h3>My role and development approach</h3>
                <p>
                    I developed VC SETS with OpenAI&apos;s Codex, taking responsibility for requirements gathering, project specifications, and reviewing the plans and code it produced. My role was primarily project management and technical decisions, while Codex handled full-stack development. I evaluated its proposed approach and checked whether the implementation met the requirements and worked as intended. To be honest, it was my first time using AI this extensively and it taught me a lot on AI-assisted software development like how much of a headache it gives you once it starts sabotaging itself with errors.
                </p>
              </div>
            </section>
          </header>

          <section className="case-study-section" aria-labelledby="problem-title">
            <h2 id="problem-title">The problem</h2>
            <figure className="case-study-figure">
              <ProjectImage src={"/projects/v0-stat-tracker.png"} title={project.title} sizes="(max-width: 760px) calc(100vw - 40px), 720px" />
              <figcaption>Pre-VC SETS stat tracker.</figcaption>
            </figure>
            <div className="case-study-prompt">
              <h3>Our Initial Google Sheets and Apps Script-based Tracker</h3>
              <p>
                Prior to VC SETS, I was already tapped to update the UPLB Volleyball Club's automated stats spreadsheet except it was only semi-automated since individual player stats had to be manually encoded from a written sheet after a game. The only automated part was determining the best performing players and individual awards from the encoded player stats using spreadsheet formulas.
              </p>
              <p>
                Thus, I developed the first stat tracker running inside Google Sheets. Drawings served as buttons, Google Apps Script handled interactions, and the encoded player stats could be directly accessed by the spreadsheet formulas that calculated top performers and individual awards. It allowed anyone to encode during a match and was to be used for an internal volleyball tournament.
              </p>
            </div>
            <div className="case-study-prompt">
              <h3>Connectivity Problems During the Tournament</h3>
              <p>
                On the day of the tournament, poor internet connectivity made the tracker largely unusable. Google Sheets struggled to connect, and the scripts failed to run. We had to record player statistics manually.
              </p>
              <figure className="case-study-figure case-study-figure--supporting">
                <ProjectImage src="/projects/v0-stat-tracker-trying-to-connect.png" title="Google Sheets tracker trying to connect" sizes="(max-width: 760px) calc(100vw - 40px), 720px" />
                <figcaption>The Google Sheets tracker struggling to connect during the tournament.</figcaption>
              </figure>
            </div>
            <div className="case-study-prompt">
              <h3>Rebuilding VC SETS for Offline Use</h3>
              <p>
                The organization was preparing for a larger volleyball tournament, with teams from other university organizations registering to participate. To address the problems encountered during the previous tournament, I decided to rebuild the system as VC SETS, with offline operation as the primary requirement.
              </p>
              <p>
                Working with Codex, I planned an approach that stored data locally within the app, with file imports and exports for backups. After assessing the technology options, Flutter was chosen to support native applications for Windows and Android, alongside an installable progressive web app for iOS, macOS, and Linux. 
              </p>
              <p>
                I retained the existing Google Sheets used to calculate top performers and awards. To support this workflow, I added a player statistics CSV export that is compatible with the format of the sheets. This reduced the work required to reproduce and verify the award formulas within the app and allowed other tournaments to apply their own formulas to the exported data supporting data reusability and interoperability.
              </p>
            </div>
          </section>

          <section className="case-study-section" aria-labelledby="workflow-title">
            <h2 id="workflow-title">The workflow</h2>
            <figure className="case-study-figure">
              <ProjectImage src={project.imgUrl} title={project.title} sizes="(max-width: 760px) calc(100vw - 40px), 720px" />
              <figcaption>The stat tracker in action.</figcaption>
            </figure>
            <div className="case-study-prompt">
              <h3>Step 1: Setup the tournament</h3>
              <p>Staff create the tournament, add teams and player rosters, and configure the match rules. They then generate matchups for round robin, knockout, or pool play followed by a knockout bracket.</p>
              <figure className="case-study-figure case-study-figure--supporting">
                <ProjectImage src="/projects/setup-tournament.png" title="Sample tournament page" sizes="(max-width: 760px) calc(100vw - 40px), 720px" />
                <figcaption>A sample tournament already setup.</figcaption>
              </figure>
            </div>
            <div className="case-study-prompt">
              <h3>Step 2: Back up the tournament</h3>
              <p>Before the matches, staff export a full backup containing the tournament data. Keeping a backup copy provides a way to restore the records for other devices.</p>
              <figure className="case-study-figure case-study-figure--supporting">
                <ProjectImage src="/projects/data-screen.png" title="Data page of the app" sizes="(max-width: 760px) calc(100vw - 40px), 720px" />
                <figcaption>Data page with options for importing/exporting a full backup or importing a .vcgame package.</figcaption>
              </figure>
            </div>
            <div className="case-study-prompt">
              <h3>Step 3: Prepare both scoring devices</h3>
              <p>Staff can import the backup on the scoring device. They open the scheduled game and each scorer selects an assigned team, and both choose the same first server. Before scoring each set, they save their team&apos;s starting lineup.</p>
              <figure className="case-study-figure case-study-figure--supporting">
                <ProjectImage src="/projects/prepare-devices.png" title="Two devices with different teams being scored" sizes="(max-width: 760px) calc(100vw - 40px), 720px" />
                <figcaption>Two separate devices with different teams being scored.</figcaption>
              </figure>
            </div>
            <div className="case-study-prompt">
              <h3>Step 4: Record the match independently</h3>
              <p>Both scorers record every rally winner and player actions for their assigned team. Each device keeps its own log locally, so scoring does not require a live connection between the devices.</p>
              <p>For example, when Team A wins a rally, both scorers award the point to Team A. Team A&apos;s scorer can also record the player action that earned it, such as a successful attack. Meanwhile, Team B's scorer will record the error that caused it such as a misreceive.</p>
              <figure className="case-study-figure case-study-figure--supporting">
                <ProjectImage src="/projects/record-match.png" title="A device recording a team of an ongoing game." sizes="(max-width: 760px) calc(100vw - 40px), 720px" />
                <figcaption>A device recording a team of an ongoing game.</figcaption>
              </figure>
            </div>
            <div className="case-study-prompt">
              <h3>Step 5: Exchange and compare the logs</h3>
              <p>After the match, the second scorer exports their completed .vcgame file. Staff import it on the tournament device and open reconciliation.</p>
              <p>The app aligns entries by set and rally sequence, then flags missing rallies and differences in winners or scores.</p>
              <figure className="case-study-figure case-study-figure--supporting">
                <ProjectImage src="/projects/reconciliation.png" title="Reconciliation screen." sizes="(max-width: 760px) calc(100vw - 40px), 720px" />
                <figcaption>Reconciliation screen showing disagreements between the exported logs.</figcaption>
              </figure>
            </div>
            <div className="case-study-prompt">
              <h3>Step 6: Resolve differences and finalize</h3>
              <p>Staff review each disagreement and choose the correct entry or make a manual correction. The app checks the reconciled result against the match rules before finalization. It retains the scorer logs and saves an official record with the finalization details.</p>
              <figure className="case-study-figure case-study-figure--supporting">
                <ProjectImage src="/projects/summary-1.png" title="Summary screen of a finalized game." sizes="(max-width: 760px) calc(100vw - 40px), 720px" />
                <figcaption>Summary screen of a finalized game.</figcaption>
              </figure>
            </div>
            <div className="case-study-prompt">
              <h3>Step 7: Prepare statistics and awards</h3>
              <p>Finalized matches feed standings and player statistics. Staff export the player statistics as CSV and transfer them into the club&apos;s existing Google Sheets report, where the award formulas calculate top performers and individual awards.</p>
              <figure className="case-study-figure case-study-figure--supporting">
                <ProjectImage src="/projects/reports-screen.png" title="Reports screen." sizes="(max-width: 760px) calc(100vw - 40px), 720px" />
                <figcaption>Reports screen.</figcaption>
              </figure>
            </div>
          </section>

          <section className="case-study-section" aria-labelledby="engineering-title">
            <h2 id="engineering-title">Engineering decisions</h2>
            <div className="case-study-prompt">
              <h3>Offline-first through local storage and file exchange</h3>
              <p>
                VC SETS was designed so each device could record a match without a live connection between scorers. Drift stores app data in SQLite through WebAssembly in the browser. The web build includes its SQLite WebAssembly file and Drift worker locally. Underneath, the database holds one serialized application state rather than separate normalized tables for every tournament entity.
              </p>
              <p>
                This approach simplified local scoring and the transfer of complete backups between devices. Staff still need to manage file transfers, identify which device holds the latest data, and safeguard backup files against loss. The project includes a web app manifest for PWA installation, though offline behavior requires verification on each supported browser and device. I tested the app on several iPad models and confirmed uninterrupted offline use during those tests. Other devices and browsers remain unverified.
              </p>
            </div>
            <div className="case-study-prompt">
              <h3>Independent scoring and reconciliation</h3>
              <p>
                Each statistician encoder keeps a separate rally log. VC SETS aligns entries by set and rally sequence, then flags missing rallies, different winners, and different scores. Staff can correct set numbering, exclude a rally, choose a scorer&apos;s entry, or make a manual override. The app validates the resulting match against its rules, retains the scorer logs, and records the finalization decision.
              </p>
              <p>
                The software makes disagreements visible and traceable; the organizer still decides which account reflects what happened on court. Game packages and backups use versioned JSON with a SHA-256 integrity hash to detect accidental corruption or changes to the contents during storage and transfer. The app also records imported package IDs to reject repeat imports. Sender authentication is outside the scope of this staff-managed workflow, where organizers obtain files directly from trusted tournament personnel. The exported player names and match statistics are treated as non-confidential tournament records, so the files are not encrypted. The hash supports integrity checking, but it does not prove who created a file or prevent someone from modifying its contents and recalculating the hash.
              </p>
            </div>
            <div className="case-study-prompt">
              <h3>Reporting and existing award calculations</h3>
              <p>
                Standings and player totals are derived from finalized official matches, rather than maintained as another editable set of numbers. Player statistics can be exported as CSV in the same format as the existing Google Sheets spreadsheet. Other tournaments can adapt their own award rules without changing the scoring app.
              </p>
            </div>
            <div className="case-study-prompt">
              <h3>Responsive layout for tournament devices</h3>
              <p>
                The interface was designed for the laptops, iPads, and tablets intended for the first live deployment. Wider layouts use a navigation rail and more room for match details; narrower layouts use bottom navigation and compact screens.
              </p>
            </div>
          </section>

          <section className="case-study-section" aria-labelledby="results-title">
            <h2 id="results-title">Results and lessons</h2>
            <div className="case-study-prompt">
              <h3>Tournament outcome</h3>
              <p>
                VC SETS was used in a UPLB Volleyball Club's Volleyball Grand Prix 2026 tournament with 10 teams, two brackets, and 20 tournament staff. In-game digitization and streamlined data preparation reduced statistics consolidation turnaround from the usual one to two days to under a day.
              </p>
            </div>
            <div className="case-study-prompt">
              <h3>Lessons from a court with bad WIFI</h3>
              <p>
                I learned that the conditions around an app can shape it as much as the features. Our Google Sheets tracker struggled with unstable internet, so local scoring became a requirement for VC SETS. I also learned to keep what already worked. The existing award formulas stayed in Sheets, and CSV exports connected the new app to them without rebuilding those calculations under a tournament deadline. I also learned to ask more specific questions about how the statisticians worked during a match and turn their answers into instructions the app could follow.
              </p>
            </div>
            <div className="case-study-prompt">
              <h3>Limitations and next steps</h3>
              <p>
                It is worth noting that faster turnaround did not reduce staffing. The previous stat tracking process involved a writer and caller per team while the new process added an encoder using the app. VC SETS improved the turnaround time at the cost of requiring one more person during capture.
              </p>
              <p>
                I planned and developed the application with Codex. Known bugs remain to be addressed. If you found and want to report one, feel free to open an issue in the <a href={project.codeLink} target="_blank" rel="noreferrer"><u>github repo</u></a>.
              </p>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
