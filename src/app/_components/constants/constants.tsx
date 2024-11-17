import axios from 'axios';

export const NAME = 'MD Azman Ahmed';

export const DESIGNATION: { position1: string; position2: string; position3: string; position4: string } = {
  position1: 'Laravel-Next js Developer at SoftBD Ltd. ',
  position2: 'Adjunct Faculty at Fareast International University ',
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
  } catch (error) {
    console.error('Error fetching GitHub languages', error);
    return null; // Return null or empty object in case of an error
  }
};

export const SKILLS = [
  {
    title: 'MERN Stack Developer',
    level: '75%',
  },
  {
    title: 'React Developer',
    level: '91%',
  },
  {
    title: 'Backend Developer',
    level: '54%',
  },
  {
    title: 'Technical Blogger',
    level: '83%',
  },
];

export const TECH_STACK = [
  'JavaScript',
  'ReactJS',
  'NextJS',
  'TypeScript',
  'NodeJS',
  'Redux',
  'Zustand',
  'CSS',
  'SCSS',
  'TailwindCSS',
  'Ant Design',
  'Material UI',
  'Next UI',
  'REST API',
  'MongoDB',
  'MySQL',
  'Git',
  'GitHub',
  'Jira',
  'Figma',
  'Adobe XD',
];

export const CONTACTS = {
  EMAIL: 'ahmed.azman.bd0007@gmail.com',
  PHONE: '+8801872773081',
  Country: "Bangladesh",
  City: "Dhaka",
  Current1: "SoftBD Ltd."
};

export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/Azman-Ahmed',
  LINKEDIN: 'https://www.linkedin.com/in/azman-ewubd/',
  TWITTER: 'https://twitter.com',
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
    company: "SoftBD Ltd.",
    role: "Full Stack Developer",
    detail1: "As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.",
    duration: "07/2024 - Present",
    location: "Dhaka, Bangladesh",
  },
  {
    id: 2,
    company: "Fareast International University",
    role: "Adjunct Faculty",
    detail: "Teaching",
    duration: "06/2024 - Present",
    location: "Dhaka, Bangladesh",
  },
  {
    id: 3,
    company: "East West University",
    role: "Undergraduate Teaching Assistant",
    detail: "Teaching",
    duration: "01/2022 - 01/2023",
    location: "Dhaka, Bangladesh",
  },
];