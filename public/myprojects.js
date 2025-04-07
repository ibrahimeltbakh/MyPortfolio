import Socially from "./imgs/Socially.png";
import EasyBuy from "./imgs/Easy Buy.png";
import Elsherif from "./imgs/Elsherif.png";
import RealEstate from "./imgs/REALZMAX.png";
import Ecommerce from "./imgs/E-commerce.png";
import Portfolio from "./imgs/Portfolio.png";
import PrayerTimes from "./imgs/Prayer Times.png";
import CreativeAgency from "./imgs/Creative Agency.png";
import QuizApp from "./imgs/Quiz App.png";
import HangmanGame from "./imgs/Hangman Game.png";
import GuessTheWord from "./imgs/Guess The Word Game.png";
import BondiDesign from "./imgs/Bondi Design.png";
import DashboardDesign from "./imgs/Dashboard Design.png";
import MyWebsiteDesign from "./imgs/my website Design.png";
import KasperDesign from "./imgs/Kasper Design.png";
import LeonDesign from "./imgs/Leon Design.png";
import Trendify from "./imgs/Trendify.png";

const projects = [
  {
    id: 17,
    projectName: "Trendify",
    category: "Next.js",
    description:
      "Trendify is a modern full stack rental platform built with Next.js, offering seamless room listing, authentication via NextAuth, powerful state management with Redux Toolkit, and data fetching using React Query. Styled with Tailwind CSS, it ensures a responsive and elegant user experience.",
    shortDescription:
      "Full stack room rental platform using Next.js, NextAuth, Redux Toolkit, React Query, and Tailwind CSS.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "NextAuth",
      "Redux Toolkit",
      "React Query",
      "Axios",
      "TypeScript",
      "React",
      "React DOM"
    ],
    imgPath: Trendify,
    githubLink: "https://github.com/ibrahimeltbakh/Trendify",
    liveLink: "https://trendify-ibrahimeltbakhs-projects.vercel.app/"
  },

  {

    id: 16,
    projectName: "Socially",
    category: "Next.js",
    description: "Dynamic social media Full Stack website with Next.js, featuring server-side rendering, Tailwind CSS styling, Neon database, Prisma ORM, Clerk authentication, TypeScript safety, and Uploadthing uploads.",
    shortDescription: "Full stack social media site with server-side rendering, authentication, and database integration using Next.js and Tailwind CSS.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Neon",
      "Clerk",
      "Prisma",
      "TypeScript",
      "Uploadthing",
      "Radix UI",
      "Lucide React",
      "React Hot Toast",
      "Date-fns",
      "Class Variance Authority"
    ],
    imgPath: Socially,
    githubLink: "https://github.com/ibrahimeltbakh/socially",
    liveLink: "https://socially-six-khaki.vercel.app/"
  },
  {
    id: 15,
    projectName: "Easy Buy",
    category: "ReactJS",
    description: "A dynamic and responsive eCommerce website using ReactJS, integrating state management with Redux and data fetching with React Query.",
    shortDescription: "E-commerce platform using ReactJS with Redux for state management and React Query for dynamic data fetching.",
    technologies: [
      "ReactJS",
      "Material-UI (MUI)",
      "React Query",
      "Redux",
      "Formik",
      "Yup",
      "stripe",
      "axios",
      "sweetAlert",
      "helmet",
      "toast",
      "React Slick"
    ],
    imgPath: EasyBuy,
    githubLink: "https://github.com/ibrahimeltbakh/EasyBuy",
    liveLink: "https://eassybuy.netlify.app/"
  },
  {
    id: 14,
    projectName: "Elsherif",
    category: "ReactJS",
    description: "Created a Website for an Export agricultural products company using React and Material UI, crafting an interactive layout to display numerous product types.",
    shortDescription: "Website for an agricultural export company, featuring ReactJS and Material UI for an interactive product display.",
    technologies: [
      "ReactJS",
      "Material-UI (MUI)",
      "Vite",
      "Swiper",
      "HTML",
      "CSS"
    ],
    imgPath: Elsherif,
    githubLink: "https://github.com/ibrahimeltbakh/Elsherif-Fruit",
    liveLink: "https://elsherif.netlify.app/"
  },
  {
    id: 13,
    projectName: "REALZMAX",
    category: "Odoo",
    description: "Real Estate company required a responsive website, developed with Odoo's drag and drop builder, to allow easy navigation and viewing of properties.",
    shortDescription: "Real Estate website with responsive design built using Odoo's drag and drop builder for easy navigation.",
    technologies: ["Odoo"],
    imgPath: RealEstate,
    githubLink: "",
    liveLink: "https://www.realzmax.com/"
  },
  {
    id: 12,
    projectName: "E-commerce",
    category: "ReactJS",
    description: "Creating a complete e-commerce website, featuring product listing, user authentication, and a shopping cart.",
    shortDescription: "Complete e-commerce site with product listing, user authentication, and a shopping cart, built with ReactJS.",
    technologies: [
      "ReactJS",
      "Strapi",
      "Material-UI (MUI)",
      "Vite",
      "Swiper",
      "HTML",
      "CSS"
    ],
    imgPath: Ecommerce,
    githubLink: "",
    liveLink: "https://dulcet-hotteok-e36cae.netlify.app/"
  },
  {
    id: 11,
    projectName: "Portfolio",
    category: "ReactJS",
    description: "Personal portfolio website with a Dark mode and Light mode toggle for enhanced user experience. Includes integration with Formspree for contact form submissions.",
    shortDescription: "A personal portfolio website with Dark/Light mode toggle and Formspree contact form integration.",
    technologies: ["HTML", "CSS", "ReactJS", "Vite", "Formspree", "Framer Motion"],
    imgPath: Portfolio,
    githubLink: "https://github.com/ibrahimeltbakh/Portfolio",
    liveLink: ""
  },
  {
    id: 10,
    projectName: "Prayer Times",
    category: "ReactJS",
    description: "Web app that shows the time of prayer, developed in React, and styled with Material-UI for modern, responsive layouts.",
    shortDescription: "A web app displaying prayer times, developed with React and styled using Material-UI.",
    technologies: ["HTML", "CSS", "ReactJS", "Vite", "Material-UI"],
    imgPath: PrayerTimes,
    githubLink: "https://github.com/ibrahimeltbakh/Prayer-Times",
    liveLink: "https://silly-crumble-030e31.netlify.app/"
  },
  {
    id: 9,
    projectName: "Creative Agency",
    category: "JavaScript",
    description: "Dynamic-Interactive Website Using Vanilla JavaScript along with Modern CSS.",
    shortDescription: "Interactive website built with Vanilla JavaScript and modern CSS techniques.",
    technologies: ["HTML", "CSS", "JavaScript (ES6)"],
    imgPath: CreativeAgency,
    githubLink: "https://github.com/ibrahimeltbakh/Creative-Agency",
    liveLink: "https://creativee-agencyy.netlify.app/"
  },
  {
    id: 8,
    projectName: "Quiz App",
    category: "JavaScript",
    description: "A small quiz game where the user will be asked interactive questions created using vanilla JavaScript.",
    shortDescription: "A fun quiz game built using vanilla JavaScript, featuring interactive questions.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imgPath: QuizApp,
    githubLink: "https://github.com/ibrahimeltbakh/Quiz-App",
    liveLink: "https://ibrahimeltbakh.github.io/Quiz-App/"
  },
  {
    id: 7,
    projectName: "Hangman Game",
    category: "JavaScript",
    description: "A classic Hangman game to guess a word within limited chances through an interactive UI created in HTML, CSS, and JavaScript.",
    shortDescription: "A Hangman game to guess words, with limited chances and an interactive UI built with HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imgPath: HangmanGame,
    githubLink: "https://github.com/ibrahimeltbakh/Hangman-game",
    liveLink: "https://ibrahimeltbakh.github.io/Hangman-game/"
  },
  {
    id: 6,
    projectName: "Guess The Word Game",
    category: "JavaScript",
    description: "A word-guessing game using basic HTML, CSS, and JavaScript. It gives dynamic responses.",
    shortDescription: "A simple word-guessing game with dynamic responses, created using HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imgPath: GuessTheWord,
    githubLink: "https://github.com/ibrahimeltbakh/Guess-The-Word-Game",
    liveLink: "https://ibrahimeltbakh.github.io/Guess-The-Word-Game/"
  },
  {
    id: 5,
    projectName: "Bondi Design",
    category: "HTML & CSS",
    description: "A responsive website layout built using Bootstrap for a clean and structured design.",
    shortDescription: "Responsive website layout using Bootstrap, providing a clean and structured design.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    imgPath: BondiDesign,
    githubLink: "https://github.com/ibrahimeltbakh/Bondi",
    liveLink: "https://ibrahimeltbakh.github.io/Bondi/"
  },
  {
    id: 4,
    projectName: "Dashboard Design",
    category: "HTML & CSS",
    description: "Basic, clean dashboard interface, mainly responsive grid layouts with easy navigation.",
    shortDescription: "Simple and clean dashboard layout with responsive grid design and easy navigation.",
    technologies: ["HTML", "CSS"],
    imgPath: DashboardDesign,
    githubLink: "https://github.com/ibrahimeltbakh/Dashboard",
    liveLink: "https://ibrahimeltbakh.github.io/Dashboard/"
  },
  {
    id: 3,
    projectName: "my website Design",
    category: "HTML & CSS",
    description: "A modern website design having strong animation work to develop interactivity for the user. The project shows professional CSS techniques for smooth transitions and engaging animations.",
    shortDescription: "Modern website design with interactive animations and smooth transitions using professional CSS techniques.",
    technologies: ["HTML", "CSS"],
    imgPath: MyWebsiteDesign,
    githubLink: "https://github.com/ibrahimeltbakh/my-website",
    liveLink: "https://ibrahimeltbakh.github.io/my-website/"
  },
  {
    id: 2,
    projectName: "Kasper Design",
    category: "HTML & CSS",
    description: "Modern, responsive website designs with attention to typography and layout structure.",
    shortDescription: "Responsive website design with a focus on typography and layout structure.",
    technologies: ["HTML", "CSS"],
    imgPath: KasperDesign,
    githubLink: "https://github.com/ibrahimeltbakh/Kasper-design",
    liveLink: "https://ibrahimeltbakh.github.io/Kasper-design/"
  },
  {
    id: 1,
    projectName: "Leon Design",
    category: "HTML & CSS",
    description: "Modern, responsive website designs with attention to typography and layout structure.",
    shortDescription: "Modern, responsive website design focusing on typography and layout structure.",
    technologies: ["HTML", "CSS"],
    imgPath: LeonDesign,
    githubLink: "https://github.com/ibrahimeltbakh/Leon-design",
    liveLink: "https://ibrahimeltbakh.github.io/Leon-design/"
  }
];

export default projects;
