import type Project from '../types/Project';

export const projects: Project[] = [
  {
    industry: 'Energy',
    title: 'Full Stack Development',
    startTime: new Date('2022-10-01'),
    client: 'Energy company',
    responsibilities:
      "Creating the next version of the company's Open Data portal, including architecture, databases, API's, and front-end.",
    keyWords: ['Azure', 'TypeScript', 'Next.js', 'Express', 'Azure SQL'],
    imageLineAwesomeClass: 'la-bolt',
  },
  {
    industry: 'Healthcare',
    title: 'Azure data platform setup',
    startTime: new Date('2023-05-01'),
    client: 'Healthcare consultancy',
    responsibilities:
      'Assisting the client in setting up an Azure & Snowflake data platform. Key responsibilities include architecture & network planning, cloud resource setup, and data engineering.',
    keyWords: ['Azure', 'Snowflake', 'Terraform', 'Data Engineering'],
    imageLineAwesomeClass: 'la-laptop-medical',
  },
  {
    industry: 'Retail',
    title: 'AWS Data Engineering',
    startTime: new Date('2021-09-01'),
    endTime: new Date('2023-05-01'),
    client: 'Large Finnish retailer',
    responsibilities:
      "Data Engineer in a team modernizing data warehousing and reporting for a Finnish retailer's wholesale division. A lot of cloud engineering and Lambda development for integrations and Snowflake external functions.",
    keyWords: ['AWS', 'Terraform', 'Snowflake', 'Agile Data Engine'],
  },
];
