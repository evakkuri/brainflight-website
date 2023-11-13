import type Project from '../types/Project';

export const projects: Project[] = [
  {
    industry: 'Energy',
    title: 'Open Data Portal',
    startTime: new Date('2022-10-01'),
    client: 'Energy company',
    responsibilities:
      "Full-stack development of the company's Open Data portal. Key responsiblities: architecture design, full-stack web development (frontend, API, database).",
    keyWords: ['Azure', 'TypeScript', 'Next.js', 'Express', 'Azure SQL'],
    imageLineAwesomeClass: 'la-bolt',
  },
  {
    industry: 'Healthcare',
    title: 'Azure data platform setup',
    startTime: new Date('2023-05-01'),
    endTime: new Date('2023-09-01'),
    client: 'Healthcare consultancy',
    responsibilities:
      'Assisting the client in setting up an Azure & Snowflake data platform. Key responsibilities: architecture & network planning, cloud resource setup, and data engineering.',
    keyWords: ['Azure', 'Snowflake', 'Terraform', 'Data Engineering', 'DevOps'],
    imageLineAwesomeClass: 'la-laptop-medical',
  },
  {
    industry: 'Retail',
    title: 'AWS data platform setup',
    startTime: new Date('2021-09-01'),
    endTime: new Date('2023-05-01'),
    client: 'Large Finnish retailer',
    responsibilities:
      "Part of team building a modern data warehouse for a Finnish retailer's wholesale division. Key responsibilities: cloud engineering, Lambda development.",
    keyWords: ['AWS', 'Lambda', 'Python', 'Terraform', 'Snowflake', 'Agile Data Engine'],
    imageLineAwesomeClass: 'la-boxes',
  },
  {
    industry: 'IT Services',
    title: 'Banking service development',
    startTime: new Date('2021-09-01'),
    endTime: new Date('2022-10-01'),
    client: 'IT Services Provider',
    responsibilities:
      "Part of client's team developing new machine learning-based services for banking. Key responsibilites: ML engineering, API development.",
    keyWords: ['Azure', 'Azure Machine Learning', 'Databricks', 'Python', 'Terraform', 'DevOps'],
    imageLineAwesomeClass: 'la-university',
  },
  {
    industry: 'Startup',
    title: 'Improving efficiency of machine learning solution',
    startTime: new Date('2022-04-01'),
    endTime: new Date('2022-04-01'),
    client: 'Technology Startup',
    responsibilities:
      'Worked with client to improve the runtime efficiency of their machine learning solution. Key responsibilities: architecture plannning, refactoring, performance testing.',
    keyWords: ['GCP', 'Python', 'Docker', 'Natural Language Processing'],
    imageLineAwesomeClass: 'la-laptop-code',
  },
];

const sortedProjects = projects.sort((a, b) => {
  if (a.endTime === undefined && b.endTime === undefined) {
    return b.startTime.getTime() - a.startTime.getTime();
  }

  if (a.endTime === undefined && b.endTime !== undefined) {
    return -1;
  }

  if (a.endTime !== undefined && b.endTime === undefined) {
    return 1;
  }

  return b.endTime!!.getTime() - a.endTime!!.getTime();
});

export const latestProjects = sortedProjects.slice(0, 2);
export const otherBrainflightProjects = sortedProjects.slice(2);
