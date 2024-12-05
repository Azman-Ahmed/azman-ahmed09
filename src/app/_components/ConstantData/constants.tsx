import axios from 'axios';

export const NAME = 'MD Azman Ahmed';

export const DESIGNATION: { position1: string; position2: string; position3: string; position4: string } = {
  position1: 'Laravel-Next js Developer at SoftBD Ltd.',
  position2: 'Adjunct Faculty at Fareast International University',
  position3: 'Pupil at Codeforces',
  position4: 'Graduated from East West University',
};

export const DETAILS: { Residence: string; City: string; Age: number } = {
  Residence: 'Bangladesh',
  City: 'Dhaka',
  Age: 26,
};

// GitHub Username
const GITHUB_USERNAME = 'Azman-Ahmed';

// Fetcher function to get aggregated language data
export const fetchGitHubLanguages = async () => {
  try {
    const reposResponse = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
    const repos = reposResponse.data;

    let aggregatedLanguages: { [key: string]: number } = {};

    await Promise.all(
      repos.map(async (repo: any) => {
        const { data: languages } = await axios.get(repo.languages_url);
        for (const [language, bytes] of Object.entries(languages)) {
          aggregatedLanguages[language] = (aggregatedLanguages[language] || 0) + (bytes as number);
        }
      })
    );

    return aggregatedLanguages;
  } catch (error: any) {
    console.error('Error fetching GitHub languages', error);
    if (error.response && error.response.status === 403) {
      // Handle GitHub rate limit error
      return { error: "API rate limit exceeded. Please try again later." };
    }
    return null; // Return null or empty object in case of an error
  }
};

export const SKILLS = [
  { title: 'Laravel Developer', level: '50%' },
  { title: 'NextJS Developer', level: '50%' },
  { title: 'Backend Developer', level: '50%' },
  { title: 'Technical Blogger', level: '50%' },
];

export const TECH_STACK = [
  'PHP', 'C++', 'Python', 'JavaScript',
  'HTML', 'CSS',
  'MySQL', 'MongoDB',
  'Git','Github','GitLab',
  'AutoCAD', 'Figma', 'Adobe',
  'Laravel', 'ReactJS', 'NextJS', 'TypeScript', 'Redux','TailwindCSS', 
  'REST API', 'MongoDB', 'MySQL', 'Git', 'GitHub',
];

export const CONTACTS = {
  EMAIL: 'ahmed.azman.bd0007@gmail.com',
  PHONE: '+8801872773081',
  Country: 'Bangladesh',
  City: 'Dhaka',
  Current1: 'SoftBD Ltd.',
  Linkedin: 'www.linkedin.com/in/azman-ewubd',
  Facebook: 'https://www.facebook.com/azman.ahmed.7796',
  Instagram: 'https://www.instagram.com/a_z_man_/profilecard/',
  Twitter: '',
};

export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/Azman-Ahmed',
  LINKEDIN: 'https://www.linkedin.com/in/azman-ewubd/',
  TWITTER: 'https://twitter.com/AzmanAhmed',
  FACEBOOK: 'https://www.facebook.com/azman.ahmed.7796/',
};

export const EDUCATION = [
  {
    id: 0,
    title: 'Undergraduation',
    degree: 'Bachelors in Computer Science & Engineering',
    detail: "Bachelor's Degree in Computer Science & Engineers.",
    year: '2020 - 2024',
  },
  {
    id: 1,
    title: 'University Laboratory School & College',
    degree: 'Higher School Certificate',
    detail: "Completed HSC in Science with a GPA of 4.18",
    year: '2017 - 2019',
  },
  {
    id: 2,
    title: 'Ahmed Bawany Academy',
    degree: 'Secondary School Certificate',
    detail: "Completed SSC in Science with a GPA of 5.00",
    year: '2006 - 2017',
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    company: 'SoftBD Ltd.',
    role: 'Full Stack Developer',
    detail1: 'As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications And As A Backend Developer I am still learning advance features of Laravel 11',
    duration: '07/2024 - Present',
    location: 'Dhaka, Bangladesh',
  },
  {
    id: 2,
    company: 'Fareast International University',
    role: 'Adjunct Faculty',
    detail: 'I Teach Fundamental of Computer Science in FIU',
    duration: '06/2024 - Present',
    location: 'Dhaka, Bangladesh',
  },
  {
    id: 3,
    company: 'East West University',
    role: 'Undergraduate Teaching Assistant',
    detail: 'I have assisted faculties of the CSE department of East West University to conduct lab and classes',
    duration: '01/2022 - 01/2023',
    location: 'Dhaka, Bangladesh',
  },
];

export const EXPERTISE = [
  {
    id: 0,
    title: 'Full Stack Development & Teamwork',
    desc: 'As a Full Stack Developer at SoftBD Ltd., I specialize in both frontend and backend development. On the frontend, I use React and Next.js to build dynamic user interfaces, while on the backend, I am focused on mastering Laravel 11 for building scalable server-side applications. I also bring strong teamwork and collaboration skills, having worked closely with cross-functional teams to deliver projects efficiently.',
  },
  {
    id: 1,
    title: 'Education and Mentorship',
    desc: 'As an educator, I currently serve as an Adjunct Faculty at Fareast International University, teaching the Fundamentals of Computer Science. I also have experience as an Undergraduate Teaching Assistant at East West University, where I assisted in labs and classes for the CSE department. My role involves developing coursework, mentoring students, and helping shape the future of tech professionals.',
  },
  {
    id: 2,
    title: 'Github',
    desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code.",
  },
  {
    id: 3,
    title: 'Open Source Contributor',
    desc: "Open Source is the future. I usually take some time on weekend and contribute to open-source projects. It gives me a chance to learn from best developer's practices and contribute to the community.",
  },
];

export const RECOMMENDATIONS = [
  {
    id: 0,
    name: 'John Smith',
    image: "images/john-smith.jpg",
    designation: 'Senior Software Engineer | JavaScript | React | Node.js',
    view: "I had the pleasure of working with Osama on several international projects, and I can confidently say that he is one of the most dedicated and knowledgeable developers I have ever worked with. His expertise in React and Node.js is exceptional, and his attention to detail ensures high-quality code. Osama's ability to collaborate with remote teams and adapt to different working environments makes him a true asset to any development team. Highly recommend! 🌟",
    linkednURL: "https://www.linkedin.com/in/john-smith-12345/"
  },
  {
    id: 1,
    name: 'Marie Dubois',
    image: "images/marie-dubois.jpg",
    designation: 'Full Stack Developer | Python | Django | JavaScript',
    view: "Osama is an outstanding developer with a unique combination of technical skills and creative problem-solving abilities. We collaborated on a few cross-border projects, and his ability to pick up new technologies and contribute to the team was remarkable. His work in React and JavaScript is top-notch, and his dedication to delivering quality work on time is commendable. I highly recommend Osama for any development role, especially for React-based projects.",
    linkednURL: "https://www.linkedin.com/in/marie-dubois-67890/"
  },
];



export const REVIEWS = [
  {
      id: 0,
      clientName: 'Lucas Müller',
      clientLocation: 'Germany',
      clientSource: 'Upwork',
      clientReview: 'Osama is an excellent web developer with a deep understanding of front-end technologies like React. He delivered the project ahead of schedule and with great attention to detail. His communication was clear and professional throughout the process. I would love to collaborate with him again.',
  },
  {
      id: 1,
      clientName: 'Sara Fernandez',
      clientLocation: 'Spain',
      clientSource: 'Freelancer',
      clientReview: 'I had the pleasure of working with Osama on a React project. He was efficient, proactive, and his problem-solving skills were impressive. The work was completed to a high standard, and Osama always kept me updated on the progress. Highly recommended for anyone looking for a skilled developer!',
  },
];


export const PROJECTS = [
  {
    id: 0,
    title: "Stylometry-based Author Profiling on Bangla Text Using Text Clustering",
    description:
      "This project focuses on author profiling using stylometric analysis of Bangla texts. By employing text clustering techniques, we aim to identify and group texts written by the same author. The repository includes data preprocessing scripts, feature extraction methods, clustering algorithms, and evaluation metrics tailored for Bangla language texts.",
    githubURL: "https://github.com/Azman-Ahmed/Stylometry-based-Author-Profiling-on-Bangla-Text-Using-Text-Clustering",
    imageURL: "/images/stylometry-project.png",
  },
  {
    id: 1,
    title: "DoDash",
    description:
      "I’ve finished working on DoDash, a To-Do app built with Laravel. It includes features like user authentication with Jetstream, task creation, editing, and deletion, as well as status tracking and due dates. Next steps: I plan to integrate React to improve the frontend and make it more interactive.",
    githubURL: "https://github.com/Azman-Ahmed/DoDash",
    imageURL: "/images/dodash.png",
  },
  {
    id: 2,
    title: "Portfolio Website using NEXTJS 15",
    description:
      "A portfolio website built using NEXTJS 15 to showcase projects and achievements. The website is designed to be responsive and includes a section for displaying projects and contact information.",
    githubURL: "https://github.com/Azman-Ahmed/azman-ahmed09",
    imageURL: "/images/portfolio-website.png",
  },
  {
    id: 3,
    title: "Laravel-React CRUD Application",
    description:
      "A simple CRUD application built using Laravel for the backend and React for the frontend. This project demonstrates the integration of these two technologies for building a full-stack application.",
    githubURL: "https://github.com/Azman-Ahmed/Laravel-Reacts-CRUD",
    imageURL: "/images/laravel-react-crud.png",
  },
  
];



export const ROADMAP = [
  {
    id: 1,
    title: "Phase 1: Planning",
    description: "Research and gather requirements.",
    date: "January 2024",
    completed: true,
  },
  {
    id: 2,
    title: "Phase 2: Design",
    description: "Create wireframes and UI designs.",
    date: "February 2024",
    completed: true,
  },
  {
    id: 3,
    title: "Phase 3: Development",
    description: "Build features and implement functionality.",
    date: "March 2024",
    completed: false,
  },
  {
    id: 4,
    title: "Phase 4: Testing",
    description: "Perform tests and debugging.",
    date: "April 2024",
    completed: false,
  },
  {
    id: 5,
    title: "Phase 5: Launch",
    description: "Deploy the website.",
    date: "May 2024",
    completed: false,
  },
];



export const CompetitionItem = [
  {
    id: 0,
    title: "National Collegiate Programming Contest",
    description: "A nationwide coding competition testing algorithmic problem-solving skills.",
    date: "2024-03-13",
    location: "Jahangirnagar University, Savar, Dhaka-1342",
    imageURL: "/images/ncpc2023.jpg", 
    competitionType: "Coding",
  },  
  {
    id: 1,
    title: "UAP Inter University Programming Contest",
    description: "An inter University coding competition testing algorithmic problem-solving skills.",
    date: "2024-04-17",
    location: "University Asia Pacific, Dhaka",
    imageURL: "/images/uap2024.jpg", 
    competitionType: "Coding",
  },  
  {
    id: 2,
    title: "2023 ICPC Asia Dhaka Regional Site Online Preliminary Contest",
    description: "An online preliminary contest for ICPC Asia Dhaka Regional Site.", // Add a placeholder or meaningful description
    date: "2023-10-13",
    location: "Dhaka, Bangladesh",
    imageURL: "/images/icpc2023regional.png", 
    competitionType: "Coding",
  },  
];

