const skillsData = {
  core: {
    title: "Core Programming & Data",
    subtitle: "Foundational programming and data handling skills.",
    skills: [
      {
        name: "Python",
        level: "Advanced",
        desc: "Used for data analysis, ML, automation.",
      },
      {
        name: "SQL",
        level: "Advanced",
        desc: "Querying and managing relational databases.",
      },
      {
        name: "Advanced Excel",
        level: "Advanced",
        desc: "Pivot tables, VLOOKUP, macros.",
      },
      {
        name: "Data Structures",
        level: "Intermediate",
        desc: "Arrays, trees, graphs, algorithms.",
      },
    ],
  },

  data: {
    title: "Data Analysis & Visualization",
    subtitle: "Transform raw data into insights.",
    skills: [
      {
        name: "Pandas",
        level: "Advanced",
        desc: "Data manipulation and analysis.",
      },
      {
        name: "NumPy",
        level: "Advanced",
        desc: "Numerical computing with arrays.",
      },
      {
        name: "Power BI",
        level: "Advanced",
        desc: "Interactive dashboards and reports.",
      },
    ],
  },

  ml: {
    title: "Machine Learning & AI",
    subtitle: "Predictive models and intelligent systems.",
    skills: [
      {
        name: "Machine Learning",
        level: "Advanced",
        desc: "Supervised & unsupervised learning.",
      },
      {
        name: "Scikit-Learn",
        level: "Advanced",
        desc: "ML library for Python.",
      },
      {
        name: "Deep Learning",
        level: "Intermediate",
        desc: "Neural networks & architectures.",
      },
    ],
  },

  genai: {
    title: "Generative AI & LLMs",
    subtitle: "Next-gen AI with language models.",
    skills: [
      {
        name: "Generative AI",
        level: "Intermediate",
        desc: "Creating content with AI models.",
      },
      {
        name: "Large Language Models",
        level: "Intermediate",
        desc: "GPT, Claude, Llama architectures.",
      },
      {
        name: "Prompt Engineering",
        level: "Advanced",
        desc: "Crafting effective AI prompts.",
      },
    ],
  },

  mlops: {
    title: "MLOps & Deployment",
    subtitle: "Production-ready ML pipelines.",
    skills: [
      {
        name: "MLOps",
        level: "Intermediate",
        desc: "ML operations & workflows.",
      },
      {
        name: "Docker",
        level: "Intermediate",
        desc: "Containerization platform.",
      },
      {
        name: "FastAPI",
        level: "Advanced",
        desc: "Modern Python web framework.",
      },
    ],
  },

  cloud: {
    title: "Cloud & Tools",
    subtitle: "Version control and cloud infrastructure.",
    skills: [
      {
        name: "Git & GitHub",
        level: "Beginner",
        desc: "Version control & collaboration.",
      },
      {
        name: "Azure (Basics)",
        level: "Beginner",
        desc: "Microsoft cloud platform.",
      },
    ],
  },
};
function openSkills(key) {
  const data = skillsData[key];

  document.getElementById("skillsTitle").innerText = data.title;
  document.getElementById("skillsSubtitle").innerText = data.subtitle;

  const list = document.getElementById("skillsList");
  list.innerHTML = "";

  data.skills.forEach((skill) => {
    list.innerHTML += `
      <div class="skill-card">
        <div class="skill-top">
          <h4>${skill.name}</h4>
          <span class="badge ${skill.level.toLowerCase()}">${skill.level}</span>
        </div>
        <p>${skill.desc}</p>
      </div>
    `;
  });

  document.getElementById("skillsModal").classList.add("active");
}

function closeSkills() {
  document.getElementById("skillsModal").classList.remove("active");
}
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 },
);

document.querySelectorAll(".fade-up").forEach((el) => {
  observer.observe(el);
});
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.letterSpacing = "1px";
  });

  link.addEventListener("mouseleave", () => {
    link.style.letterSpacing = "0px";
  });
});

document.querySelectorAll("a, button").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform += " scale(1.8)";
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.transform += " scale(1)";
  });
});
