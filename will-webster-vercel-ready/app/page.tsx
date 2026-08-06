const projects = [
  {
    number: "01",
    title: "AI Resume Analysis",
    type: "Flask + OpenAI / 2025",
    summary:
      "A full-stack application that compares resumes with job descriptions and turns the result into a clear, actionable match score.",
    result: "25% stronger match scores after targeted resume revisions",
    liveUrl: "https://rezume-analyzer.onrender.com/",
    codeUrl: "https://github.com/willyweb31/Rezume-Analyzer",
    className: "visual-resume",
    visual: (
      <div className="resume-ui" aria-hidden="true">
        <div className="resume-top"><span>Resume.fit</span><i>Analysis complete</i></div>
        <div className="score-ring"><strong>92</strong><small>match score</small></div>
        <div className="keyword-list"><span>Python</span><span>Data</span><span>Systems</span></div>
      </div>
    ),
  },
  {
    number: "02",
    title: "AI Knowledge Base",
    type: "SharePoint + SPFx / 2025",
    summary:
      "An AI-integrated SharePoint knowledge base with custom JavaScript and TypeScript web parts, designed and deployed with an intern team.",
    result: "40% reduction in employee search time",
    className: "visual-knowledge",
    visual: (
      <div className="knowledge-ui" aria-hidden="true">
        <div className="knowledge-search"><span>Ask your organization</span><b>+</b></div>
        <div className="knowledge-answer"><i>AI</i><p>Here is the policy, source, and next step.</p></div>
        <div className="knowledge-sources"><span>01</span><span>02</span><span>03</span></div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Property Management IS",
    type: "SQL + PHP / 2025",
    summary:
      "A team-built information system connecting property listings, tenant screening, lease transactions, and reporting through a relational database.",
    result: "One system for four core business workflows",
    className: "visual-property",
    visual: (
      <div className="property-ui" aria-hidden="true">
        <div className="property-stat"><span>Occupancy</span><strong>94%</strong><i /></div>
        <div className="property-grid"><span /><span /><span /><span /><span /><span /></div>
        <div className="property-label">Portfolio overview</div>
      </div>
    ),
  },
  {
    number: "04",
    title: "Startup Hub",
    type: "Next.js + Sanity / 2025",
    summary:
      "A full-stack platform for discovering and sharing startup ideas, with advanced search, authenticated creator profiles, and user dashboards.",
    result: "One searchable home for founders, ideas, and creator activity",
    liveUrl: "https://startup-hub-sand.vercel.app/",
    codeUrl: "https://github.com/willyweb31/Startup-Hub",
    className: "visual-startup",
    visual: (
      <div className="startup-ui" aria-hidden="true">
        <div className="startup-nav"><strong>STARTUP</strong><span>Discover / Pitch / Connect</span></div>
        <div className="startup-search">Search ideas, industries, and founders <b>&#8599;</b></div>
        <div className="startup-cards"><span><i>01</i>Fintech</span><span><i>02</i>Climate</span><span><i>03</i>Health</span></div>
      </div>
    ),
  },
  {
    number: "05",
    title: "Ski City",
    type: "Flask + MariaDB / 2025",
    summary:
      "A full-stack ski lodge rental application coordinating guest check-ins, equipment reservations, and operational records through a relational database.",
    result: "One workflow for lodge rentals, guests, and equipment",
    liveUrl: "https://cgi.luddy.indiana.edu/~wwebste/i211-project/index.cgi/",
    codeUrl: "https://github.iu.edu/i211sp2025/wwebste-i211-project",
    className: "visual-ski",
    visual: (
      <div className="ski-ui" aria-hidden="true">
        <div className="ski-sun" />
        <div className="ski-mountain mountain-back" />
        <div className="ski-mountain mountain-front" />
        <div className="ski-ticket"><span>SKI CITY</span><strong>LODGE 05</strong><small>Check in / Gear up / Ride</small></div>
      </div>
    ),
  },
  {
    number: "06",
    title: "Scam School",
    type: "Figma + UX Design / 2024",
    summary:
      "An accessible, module-based scam awareness experience designed to help college students recognize manipulation and make safer decisions online.",
    result: "Complex safety guidance turned into approachable learning modules",
    liveUrl: "https://zion.luddy.indiana.edu/info-i300-sp24/tt3-1#project",
    className: "visual-scam",
    visual: (
      <div className="scam-ui" aria-hidden="true">
        <div className="scam-title"><span>SCAM</span><strong>SCHOOL</strong></div>
        <div className="scam-alert">!</div>
        <div className="scam-modules"><span>01 / Spot it</span><span>02 / Check it</span><span>03 / Report it</span></div>
      </div>
    ),
  },
];

const skills = [
  "Dynamics 365 F&O", "Power Automate", "Power BI", "SharePoint / SPFx",
  "Python", "JavaScript", "TypeScript", "SQL", "HTML + CSS", "Azure DevOps",
  "Figma", "Process modeling",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Will Webster home">WW<span>R</span></a>
        <nav aria-label="Primary navigation">
          <a href="#work">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="mailto:wwebste@iu.edu">Get in touch <span aria-hidden="true">&#8599;</span></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow"><span className="status-dot" /> MS Information Systems candidate <span>Bloomington, Indiana</span></div>
        <h1>I build systems<br />that move work <em>forward.</em></h1>
        <div className="hero-bottom">
          <p>I am Will Webster - an enterprise systems specialist and developer connecting people, process, and technology.</p>
          <a className="scroll-link" href="#work"><span aria-hidden="true">&#8595;</span> Selected projects</a>
        </div>
        <div className="hero-orbit" aria-hidden="true"><span>Business + systems + people</span></div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading"><p>Selected projects</p><span>2025</span></div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className={`project-visual ${project.className}`}>{project.visual}</div>
              <div className="project-copy">
                <div className="project-meta"><span>{project.number}</span><span>{project.type}</span></div>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
                <div className="project-result"><span>Result</span><strong>{project.result}</strong></div>
                {(project.liveUrl || project.codeUrl) && (
                  <div className="project-links">
                    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live project <span aria-hidden="true">&#8599;</span></a>}
                    {project.codeUrl && <a href={project.codeUrl} target="_blank" rel="noreferrer">View code <span aria-hidden="true">&#8599;</span></a>}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-heading dark-heading"><p>Experience</p><span>What I have shipped</span></div>
        <div className="experience-grid">
          <article>
            <div className="experience-date">May - Aug 2026</div>
            <div><p className="experience-company">Crowe LLP</p><h2>Dynamics 365 Implementation Intern</h2></div>
            <ul>
              <li>Authored 80+ functional test cases, process flows, design documents, and implementation materials for Crowe&apos;s Metals Accelerator.</li>
              <li>Validated client-facing D365 environments and partnered with developers to resolve six defects ahead of user acceptance testing.</li>
              <li>Built a Power Automate solution using D365 Dataverse and AI to automate production-order monitoring and stakeholder notifications.</li>
            </ul>
          </article>
          <article>
            <div className="experience-date">May - Aug 2025</div>
            <div><p className="experience-company">Wesleyan Investment Foundation</p><h2>IT &amp; Cybersecurity Intern</h2></div>
            <ul>
              <li>Led an intern team in designing and deploying an AI-integrated SharePoint knowledge base with custom SPFx web parts.</li>
              <li>Refactored loan and investment forms for international address standards, improving accessibility and reducing data-entry errors.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="portrait-wrap">
          <img src="/will-webster-headshot.png" alt="Will Webster wearing a gray suit and red tie" />
          <span>Will Webster / Bloomington, IN</span>
        </div>
        <div className="about-copy">
          <div className="about-label"><span>About</span><span>(A little context)</span></div>
          <h2>Technical depth, business context, and a bias toward useful outcomes.</h2>
          <div className="about-columns">
            <p>I am pursuing an M.S. in Information Systems at the Kelley School of Business after earning a B.S. in Informatics from Indiana University&apos;s Luddy School, with minors in Web Design and Policy Analytics.</p>
            <p>My 3.97 GPA, eight semesters on the Dean&apos;s List, and experience teaching web design reflect the same approach I bring to work: learn the system, make it clear, then help others use it well.</p>
          </div>
          <div className="education-notes">
            <div><span>2027</span><strong>M.S. Information Systems</strong><small>Kelley School of Business / MSIS Fellow + Graduate Assistant</small></div>
            <div><span>2026</span><strong>B.S. Informatics</strong><small>Luddy School / Founders Scholar + Web Design TA</small></div>
          </div>
          <div className="outside-note"><span>Outside the screen</span><p>Classic Physique competitor and nutrition + weight-training coach. Third-place finisher and coach to three clients.</p></div>
        </div>
      </section>

      <section className="skills-section">
        <div className="section-heading dark-heading"><p>Technical toolkit</p><span>Systems to front end</span></div>
        <div className="skill-grid">{skills.map((skill, index) => <span key={skill}><b>{String(index + 1).padStart(2, "0")}</b>{skill}</span>)}</div>
      </section>

      <section className="contact-section" id="contact">
        <p>Looking for someone who can connect the dots?</p>
        <h2>Let&apos;s build<br /><em>what comes next.</em></h2>
        <div className="contact-actions">
          <a href="mailto:wwebste@iu.edu">Email Will <span aria-hidden="true">&#8599;</span></a>
          <a href="https://www.linkedin.com/in/willwebster07" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">&#8599;</span></a>
          <a href="/will-webster-resume.pdf" download>Download resume <span aria-hidden="true">&#8595;</span></a>
        </div>
      </section>

      <footer>
        <a className="wordmark footer-mark" href="#top">WW<span>R</span></a>
        <p>Will Webster<br />Information systems + development</p>
        <a href="#top">Back to top &#8593;</a>
      </footer>
    </main>
  );
}
