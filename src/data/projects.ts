import type Project from '../types/Project';

export const projects: Project[] = [
  {
    industry: 'Energy',
    title: 'Open Data Portal',
    startTime: new Date('2022-10-01'),
    client: 'Energy company',
    responsibilities:
      "Full-stack development of the company's Open Data portal. Key responsiblities: architecture design, full-stack development for frontend, API, database.",
    keyWords: ['Azure', 'TypeScript', 'Next.js', 'Express', 'Azure SQL'],
    imageLineAwesomeClass: 'la-bolt',
  },
  {
    industry: 'Healthcare',
    title: 'Azure data platform setup',
    startTime: new Date('2023-05-01'),
    client: 'Healthcare consultancy',
    responsibilities:
      'Assisting the client in setting up an Azure & Snowflake data platform. Key responsibilities: architecture & network planning, cloud resource setup, and data engineering.',
    keyWords: ['Azure', 'Snowflake', 'Terraform', 'Data Engineering'],
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
      "Part of client's team developing new machine learning-based services for banking. Key responsibilites: machine learning engineering, API development, improving development practices.",
    keyWords: [
      'Azure',
      'Azure Machine Learning',
      'Databricks',
      'Python',
      'Terraform',
      'Release automation',
      'Testing',
    ],
    imageLineAwesomeClass: 'la-university',
  },
  {
    industry: 'Technology',
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
