import {
  mobile,
  List,
  Passop,
  Design,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: reactjs,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Next.js",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2023 - may 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Next.js Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "may 2023 - june 2023",
    points: [
      "Developed and maintained web applications using Next.js and related technologies.",
    "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    "Implemented responsive design and ensured cross-browser compatibility.",
    "Participated in code reviews and provided constructive feedback to other developers."
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "july 2023 - sep 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "oct 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Ayush Prashant",
    designation: "CFO",
    company: "Acme Co",
    image: "https://avatars.githubusercontent.com/u/159645107?v=4",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Aman Deep",
    designation: "COO",
    company: "DEF Corp",
    image: "https://avatars.githubusercontent.com/u/82175986?s=100&v=4",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Kunal Kushwaha",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://avatars.githubusercontent.com/u/42698533?s=100&v=4",
  },
];

const projects = [
  {
    name: "Next.js Layout",
    description:
      "A modern Next.js-based platform that provides a seamless experience for searching. It ensures fast performance, efficient server-side rendering, and responsive design for a smooth and intuitive user experience on all devices.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Design,
    source_code_link: "https://github.com/AyushPrashant/next-layout",
  },
  {
    name: "Pass-Manager",
    description:
      "A secure password manager that allows users to store site URLs, usernames, and passwords locally. This feature ensures that login credentials are saved in the browser’s local storage for easy access and management, providing a convenient way to manage and retrieve your credentials safely.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "localstorage",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Passop,
    source_code_link: "https://github.com/AyushPrashant/Password-local",
  },
  {
    name: "To-do List",
    description:
       "to-do list app for tracking and managing your tasks. Easily add, edit, and organize your tasks to stay on top of what you need to do.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "localstorage",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: List,
    source_code_link: "https://github.com/AyushPrashant/Todo-list",
  },
];

export { services, technologies, experiences, testimonials, projects };