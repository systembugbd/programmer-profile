// config.js
module.exports = {
  github: {
    username: "systembugbd", // Your GitHub org/user name. (Required)
    sortBy: "stars", // stars | updated
    limit: 16, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: "md-shaheb-ali-wwwdon",
    twitter: "md_shaheb_ali",
    facebook: "",
    dribbble: "",
    behance: "",
    medium: "",
    devto: "",
    website: "https://github.com/systembugbd",
    email: "systembugbd@gmail.com",
  },
  skills: [
    "PHP",
    "Laravel",
    "JavaScript",
    "React.js",
    "Vue.js",
    "Node.js",
    "Jquery",
    "MySQL",
    "Git",
    "CSS",
    "Antd",
    "Tailwind",
    "Bootstrap",
  ],
  experiences: [
    {
      company: "Graphic People | Wundermanthompson",
      position: "Web Developer",
      from: "Oct 2015",
      to: "Present",
    },
    {
      company: "Athena Software Associates Ltd.",
      position: "Web Developer",
      from: "January 2014",
      to: "February 2015",
    },
    {
      company: "Transaction World Ltd.",
      position: "Web Application Developer",
      from: "January 2013",
      to: "Dec 2013",
    },
    {
      company: "Smart DataSoft",
      position: "Web Developer",
      from: "January 2011",
      to: "November 2012",
    },
  ],
  education: [
    {
      institution: "Northern University Bangladesh",
      degree: "Master of Business Administration",
      from: "2013",
      to: "2015",
    },
    {
      institution: "Laskarpur Degree College",
      degree: "Bachelor of Social Science",
      from: "2004",
      to: "2008",
    },
    {
      institution: "Laskarpur Degree College",
      degree: "Higher Secondary Certificate (HSC)",
      from: "2002",
      to: "2004",
    },
    {
      institution: "Puthia PN High Govt. School",
      degree: "Secondary School Certificate (SSC)",
      from: "2001",
      to: "2002",
    },
  ],
  blog: {
    // Display blog posts from your medium or dev.to account. (Optional)
    source: "dev.to", // medium | dev.to
    username: "systembugbd",
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id
    id: "", // UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  themeConfig: {
    default: "dark",

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should we use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded default
    respectPrefersColorScheme: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
    ],
  },
};
