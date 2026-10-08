import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight, Bot, BrainCircuit, CheckCircle2, ChevronDown, Code2,
  Cpu, Download, ExternalLink, Github, Linkedin, Mail,
  Menu, MessageCircle, Send, Sparkles, Terminal, X, Zap
} from "lucide-react";

const profile = {
  name: "P.Rajitha Sai",
  fullName: "Padmanabhuni Rajitha Lakshmi Satya Sai",
  role: "Robotics & AI Student | Developer | Problem Solver",
  intro:"I’m a Robotics and AI undergraduate passionate about building intelligent systems, solving real-world problems, and turning ideas into practical technology.",
  education: "B.Tech in Robotics and Artificial Intelligence",
  year: "2nd Year",
  github: "https://github.com/rajithasai28",
  linkedin: "https://www.linkedin.com/in/padmanabhuni-rajitha-lakshmi-satya-sai-33492536b/?isSelfProfile=true",
  email: "rajithasai28@gmail.com"
};

const skills = [
  { title: "Programming", items: ["C", "C++", "Python"], icon: Code2 },
  { title: "Web Development", items: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express"], icon: Terminal },
  { title: "Database & Backend", items: ["MongoDB", "REST APIs", "JWT", "Mongoose"], icon: Cpu },
  { title: "AI & Machine Learning", items: ["AI", "Machine Learning", "Python", "AI/ML Fundamentals"], icon: BrainCircuit },
  { title: "Robotics", items: ["Arduino", "LiDAR", "Sensors", "Robotics"], icon: BrainCircuit }
];

const codingProfiles = [
  { title: "CodeChef", link: "https://www.codechef.com/users/local_cape_59" },
  { title: "Codeforces", link: "https://codeforces.com/profile/rajithasai28" },
  { title: "LeetCode", link: "https://leetcode.com/u/Bjk0VvsUzU/" },
  { title: "HackerRank", link: "https://www.hackerrank.com/profile/rajithasai28" }
];

const projects = [
  {
  title: "Campus Transport Management",
  tag: "Backend / REST API",
  description: "A secure backend system for managing campus transport routes, stops, vehicles, and schedules. Includes authentication, role-based USER/ADMIN access, CRUD operations, validation, protected routes, and centralized error handling.",
  tech: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "bcrypt", "Postman"],
  link: "#"
  },
  {
    title: "LiDAR Based Distance Sensing in Autonomous Systems",
    tag: "Robotics / Autonomous Systems",
    description: "A LiDAR-based distance sensing system using Arduino to measure distances and detect obstacles in real time. The system processes LiDAR data using time-of-flight measurement for accurate and reliable sensing in autonomous applications.",
    tech: ["Arduino Uno", "LiDAR", "Arduino IDE", "Sensors"],
    link: "#"
  },
  {
  title: "Train Booking System",
  tag: "C Programming",
  description: "A command-line train reservation system that allows users to view train details, check seat availability, book tickets, calculate fares, and generate ticket details using a menu-driven interface.",
  tech: ["C", "Structures", "File Handling", "Functions"],
  link: "#"
  },
  {
  title: "Smart Student Task Management System",
  tag: "Data Structures",
  description: "A C-based task management application that helps students organize pending and completed tasks using Linked List, Stack, and Queue with features like delete, undo delete, complete task, and task tracking.",
  tech: ["C", "Linked List", "Stack", "Queue", "Pointers"],
  link: "#"
  },
];

const achievements = [
  {
    title: "2nd Place – Working Model Competition",
    description: "National Science Day 2026 • VNR VJIET",
    icon: "🏆"
  },
  {
    title: "Certificate of Achievement – TCS iON Career Edge",
    description: "Young Professional Course",
    icon: "🎓"
  },
  {
    title: "3rd Place – Capture the Circuit",
    description: "Convergence ’26 • VNR VJIET",
    icon: "🥉"
  }
];

const chatbotKnowledge = {
  projects: projects.map((p) => `${p.title}: ${p.description}`).join("\n"),
  skills: skills.flatMap((s) => s.items).join(", "),
  education: "B.Tech in Robotics & Artificial Intelligence at VNR VJIET, 2025–2029",
  achievements: achievements.map(a => `${a.title} – ${a.description}`).join("; ")
};

function getBotReply(message) {
  const q = message.toLowerCase().trim();
  if (q.includes("project"))
    return `Rajitha has worked on:\n\n${chatbotKnowledge.projects}`;
  if (q.includes("education"))
    return "Rajitha's education:\n\n• 2025–2029: B.Tech in Robotics & Artificial Intelligence — VNR VJIET\n• 2023–2025: Intermediate MPC — Sri Chaitanya Kalasala, 981/1000\n• 2023: SSC — Unique High School, 9.8 GPA";
  if (q.includes("cgpa"))
    return "Rajitha's current B.Tech CGPA is 9.6.";
  if (q.includes("experience"))
    return "Rajitha is currently pursuing the AI-Powered Full Stack Web Developer Program at VNR VJIET. She is learning JavaScript, Node.js, full-stack development and AI integration.";
  if (q.includes("interest"))
    return "Rajitha is interested in Robotics, Artificial Intelligence, Machine Learning, software development, problem solving and building practical technology solutions.";
  if (q.includes("robotics") || q.includes("robot") || q.includes("lidar"))
    return "Rajitha has worked on a LiDAR-based distance sensing project using Arduino for autonomous systems. She is interested in robotics, sensors and autonomous technologies.";
  if (q.includes("contact") || q.includes("email") || q.includes("mail"))
    return "You can contact Rajitha at rajithasai28@gmail.com.";
  if (q.includes("resume") || q.includes("cv"))
    return "You can view or download Rajitha's resume using the Resume button at the top of the portfolio.";
  if (q.includes("skill"))
    return `Rajitha's skills include:\n\n${chatbotKnowledge.skills}.`;
  if (q.includes("achievement"))
    return `Rajitha's achievements:\n\n• ${achievements
      .map(a => `${a.title} – ${a.description}`)
      .join("\n• ")}`;
  if (q.includes("learning"))
    return "Rajitha is currently learning full-stack web development, AI/ML, JavaScript, Node.js, data structures and robotics.";
  if (q.includes("ai") || q.includes("machine learning"))
    return "Rajitha is studying Artificial Intelligence and Machine Learning and is interested in applying AI to practical problems and robotics.";
  if (q.includes("github"))
    return "Rajitha's GitHub: https://github.com/rajithasai28";
  if (q.includes("linkedin"))
    return "Rajitha's LinkedIn profile is available through the LinkedIn icon in the portfolio.";
  if (q.includes("who are you") || q.includes("about rajitha") || q.includes("tell me about"))
    return "Rajitha Sai is a B.Tech student pursuing Robotics & Artificial Intelligence at VNR VJIET. She is interested in software development, AI, machine learning, robotics and problem solving.";
  return "I can answer questions about Rajitha's education, CGPA, skills, projects, achievements, experience, interests, AI, robotics, resume, GitHub, LinkedIn and contact details.";
}

function Navbar({ openChat }) {
  const [mobile, setMobile] = useState(false);
  const links = ["Home", "About", "Education", "Skills", "Projects", "Experience", "Achievements", "Thinking", "Certifications", "Contact"];

  return (
    <header className="nav-wrap">
      <nav className="nav">
        <a className="brand" href="#home">rajitha<span>.sai</span><ArrowUpRight size={17}/></a>
        <button className="mobile-btn" onClick={() => setMobile(!mobile)} aria-label="Menu">
          {mobile ? <X/> : <Menu/>}
        </button>
        <div className={`nav-links ${mobile ? "show" : ""}`}>
          {links.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobile(false)}>{item}</a>
          ))}
          <a className="resume-nav" href="/resume.pdf" target="_blank" rel="noreferrer">
            <Download size={16}/> Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

function RobotVisual() {
  return (
    <div className="robot-scene" aria-label="Robotics illustration">
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="robot-head">
        <div className="robot-eye left"></div>
        <div className="robot-eye right"></div>
        <div className="robot-mouth"></div>
      </div>
      <div className="robot-neck"></div>
      <div className="robot-body">
        <div className="chest-line"></div>
        <div className="chest-dot"></div>
      </div>
      <div className="arm arm-left"><span></span><i></i></div>
      <div className="arm arm-right"><span></span><i></i></div>
      <div className="robot-grid"></div>
    </div>
  );
}

function Hero({ openChat }) {
  return (
    <section id="home" className="hero section">
      <div className="hero-copy">
        <div className="status-pill"><span></span> Currently pursuing B.Tech • 2nd Year</div>
        <p className="eyebrow">Hi, I'm</p>
        <h1>Rajitha <em>Sai.</em></h1>
        <h2>Robotics & AI Student <b>|</b> Developer <b>|</b> Problem Solver</h2>
        <p className="hero-text">{profile.intro}</p>
        <div className="hero-actions">
          <a className="primary-btn" href="#projects">View My Projects <ArrowUpRight size={18}/></a>
          <a className="secondary-btn" href="/resume.pdf" target="_blank" rel="noreferrer"><Download size={18}/> Download Resume</a>
        </div>
        <div className="socials">
          <a href={profile.github} target="_blank" rel="noreferrer"><Github/></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin/></a>
          <a href={`mailto:${profile.email}`}><Mail/></a>
          <span></span>
          <a className="connect" href="#contact">Let's Connect <ArrowUpRight size={17}/></a>
        </div>
      </div>
      <RobotVisual />
      <button className="chat-launch" onClick={openChat}><MessageCircle size={20}/> Ask about Rajitha</button>
      <div className="hero-footer">CURIOUS MIND · PRACTICAL SOLUTIONS · 01 / ROBOTICS & AI</div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="section-title">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <SectionTitle eyebrow="01 / ABOUT" title="Building with curiosity." />
      <div className="about-grid">
        <div className="about-card large-card">
          <Sparkles className="card-icon"/>
          <h3>Who I am</h3>
          <p>
            I'm a Robotics and Artificial Intelligence student who enjoys turning ideas into
            working systems. I like exploring software, AI, embedded systems and robotics while
            continuously improving my problem-solving skills.
          </p>
        </div>
        <div className="about-card">
          <Zap className="card-icon"/>
          <h3>What drives me</h3>
          <p>Learning by building, experimenting with technology and creating solutions that are useful in the real world.</p>
        </div>
        <div className="about-card">
          <BrainCircuit className="card-icon"/>
          <h3>Current focus</h3>
          <p>Full-stack development, AI integration, data structures, computer vision and robotics projects.</p>
        </div>
      </div>
    </section>
  );
}
function Education() {
  return (
    <section id="education" className="section">
      <SectionTitle eyebrow="02 / MY JOURNEY" title="Education." />

      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div>
            <span className="date">2025-2029 — PRESENT</span>
            <h3>B.Tech — Robotics & Artificial Intelligence</h3>
            <h4>VNR VJIET</h4>
            <p>
              Currently pursuing B.Tech in Robotics and Artificial Intelligence,
              building skills in programming, AI, robotics and software development.
            </p>

            <div className="cgpa-box">
              <span>Current CGPA</span>
              <strong>9.6</strong>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div>
            <span className="date">2023 — 2025</span>
            <h3>Intermediate — MPC</h3>
            <h4>Sri Chaitanya Kalasala</h4>
            <p>Completed Intermediate education with a score of 981 / 1000.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div>
            <span className="date">2023</span>
            <h3>Secondary School — SSC</h3>
            <h4>Unique High School</h4>
            <p>Completed secondary education with a GPA of 9.8.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
function Skills() {
  return (
    <section id="skills" className="section alt">
      <SectionTitle eyebrow="03 / SKILLS" title="Tools I work with." />

      <div className="skills-grid">
        {skills.map(({ title, items, icon: Icon }) => (
          <div className="skill-card" key={title}>
            <div className="skill-heading">
              <Icon />
              <h3>{title}</h3>
            </div>

            <div className="chips">
              {items.map((x) => <span key={x}>{x}</span>)}
            </div>
          </div>
        ))}
        {/* ADD CODING PLATFORMS HERE */}
        <div className="skill-card">
          <div className="skill-heading">
            <Code2 />
            <h3>Coding Platforms</h3>
          </div>
          <div className="chips">
            {codingProfiles.map((profile) => (
              <a
                key={profile.title}
                href={profile.link}
                target="_blank"
                rel="noreferrer"
              >
                {profile.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle eyebrow="04 / PROJECTS" title="Things I've built." />
      <div className="project-grid">
        {projects.map((p, i) => (
          <article className="project-card" key={p.title}>
            <div className="project-top">
              <span>0{i + 1}</span>
              <a href={p.link}><ExternalLink size={18}/></a>
            </div>
            <p className="project-tag">{p.tag}</p>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="chips">{p.tech.map((x) => <span key={x}>{x}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section alt">
      <SectionTitle eyebrow="05 / EXPERIENCE" title="Learning through practice." />
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div>
            <span className="date">2026 — PRESENT</span>
            <h3>AI-Powered Full Stack Web Developer Program</h3>
            <h4>VNR VJIET</h4>
            <p>Working with JavaScript, Node.js, full-stack web development and AI integration while building practical applications.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div>
            <span className="date">2026 — PRESENT</span>
            <h3>B.Tech — Robotics & Artificial Intelligence</h3>
            <h4>Undergraduate Study</h4>
            <p>Developing foundations in programming, data structures, AI, robotics, sensors and software engineering.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="section">
      <SectionTitle eyebrow="06 / ACHIEVEMENTS" title="Milestones." />
      <div className="achievement-list">
        {achievements.map((a, i) => (
          <div className="achievement" key={a.title}>
            <span>0{i + 1}</span><CheckCircle2/><p>{a.title} – {a.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
function HowIThink() {
  const steps = [
    ["01", "UNDERSTAND", "Understand the problem clearly."],
    ["02", "BREAK DOWN", "Divide it into smaller problems."],
    ["03", "LEARN", "Find the concepts and tools needed."],
    ["04", "BUILD", "Create a simple working solution."],
    ["05", "TEST", "Check what works and what doesn't."],
    ["06", "IMPROVE", "Fix, refine and make it better."]
  ];

  return (
    <section id="thinking" className="section alt">
      <SectionTitle eyebrow="07 / MY APPROACH" title="How I think." />

      <div className="thinking-list">
        {steps.map(([number, title, text]) => (
          <div className="thinking-item" key={number}>
            <span>{number}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
function Certifications() {
  return (
    <section id="certifications" className="section alt">
      <SectionTitle eyebrow="08 / CERTIFICATIONS" title="Learning beyond the classroom." />
      <div className="cert-grid">
        <div className="cert-card"><Terminal/><div><h3>AI-Powered Full Stack Web Developer Program</h3><p>VNR VJIET • Ongoing</p></div></div>
        <div className="cert-card"><BrainCircuit/><div><h3>Robotics & AI Project Work</h3><p>Hands-on academic and prototype development</p></div></div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <SectionTitle eyebrow="09 / CONTACT" title="Let's build something." />
      <div className="contact-box">
        <p>Have an opportunity, project idea or collaboration in mind?</p>
        <div className="email-display">
          <Mail size={18} />
          <span>{profile.email}</span>
        </div>
        <div className="contact-links">
          <a href={profile.github} target="_blank" rel="noreferrer"><Github/> GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a>
          <a href={`mailto:${profile.email}`}><Mail/> Email</a>
        </div>
      </div>
    </section>
  );
}

function Chatbot({ open, close }) {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! I'm Rajitha's portfolio assistant. Ask me about her projects, skills, resume, education or achievements." }
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef(null);
  useEffect(() => {
  if (endRef.current) {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }
}, [messages]);
  if (!open) return null;
  const send = (question = input) => {
  const text = question.trim();
  if (!text) return;
  const reply = getBotReply(text);
  setMessages((m) => [
    ...m,
    { role: "user", text: text },
    { role: "bot", text: reply || "Sorry, I couldn't find an answer." }
  ]);
  setInput("");
};

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div><div className="bot-avatar"><Bot size={18}/></div><div><strong>Rajitha's Assistant</strong><small>Profile chatbot</small></div></div>
        <button onClick={close}><X/></button>
      </div>
      <div className="chat-messages">
        {messages.map((m, i) => <div key={i} className={`bubble ${m.role}`}>{m.text}</div>)}
        <div ref={endRef}/>
      </div>
      <div className="quick-prompts">
        {[
          "Tell me about Rajitha",
          "What are her projects?",
          "What are her skills?",
          "What is her CGPA?",
          "Tell me about her education",
          "What are her achievements?",
          "What experience does she have?",
          "What is she learning?",
          "What are her interests?",
          "Tell me about her AI skills",
          "Tell me about her robotics work",
          "What is her GitHub?",
          "How can I contact her?",
          "Show me her resume"
        ].map((q) => (
          <button
            key={q}
            onClick={() => send(q)}
          >
            {q}
          </button>
        ))}
      </div>
      <div className="chat-input">
        <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder="Ask about Rajitha..." />
        <button onClick={send}><Send size={17}/></button>
      </div>
    </div>
  );
}

export default function App() {
  const [chat, setChat] = useState(false);

  return (
    <>
      <Navbar openChat={() => setChat(true)} />
      <main>
        <Hero openChat={() => setChat(true)} />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <HowIThink />
        <Certifications />
        <Contact />
      </main>
      <footer><span>© {new Date().getFullYear()} Rajitha Sai</span><span>Built with React · Robotics & AI</span></footer>
      <Chatbot open={chat} close={() => setChat(false)} />
    </>
  );
}