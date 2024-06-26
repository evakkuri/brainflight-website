import type Project from '../types/Project';

const projects: Project[] = [
  {
    industry: 'SaaS Startup',
    title: 'Improving efficiency of machine learning solution',
    startTime: new Date('2022-04-01'),
    endTime: new Date('2022-04-30'),
    client: 'Technology Startup',
    allocation: 0.2,
    description:
      'Worked with client to improve the runtime efficiency of their machine learning solution.\n' +
      'Within a short timeframe we were able to locate and fix a severe bottleneck in the ' +
      'solution, improving response time considerably.',
    responsibilities: ['Machine Learning Engineering'],
    technologies: ['GCP', 'Python', 'Docker'],
    imageLineAwesomeClass: 'la-laptop-code',
  },
  {
    industry: 'Retail',
    title: 'AWS data platform setup',
    startTime: new Date('2021-09-01'),
    endTime: new Date('2023-05-01'),
    client: 'Large Finnish retailer',
    allocation: 0.2,
    description:
      "Our small team modernized the client's data and reporting platform by migrating existing " +
      'solution to AWS, Snowflake and Power BI.\n' +
      'Project highlights were close collaboration with client stakeholders and successful ' +
      'delivery of value in small packages. We received special thanks for the maintainability ' +
      'of our solution and high quality of documentation, making handover very efficient.',
    responsibilities: ['Cloud Engineering', 'Data Engineering'],
    technologies: ['AWS', 'Lambda', 'Python', 'Terraform', 'Snowflake', 'Agile Data Engine'],
    imageLineAwesomeClass: 'la-boxes',
  },
  {
    industry: 'IT Services',
    title: 'Banking service development',
    startTime: new Date('2021-09-01'),
    endTime: new Date('2022-10-01'),
    client: 'IT Services Provider',
    allocation: 0.8,
    description:
      "Worked as part of client's team developing new ML-based banking services.\n" +
      "My main responsibility was to bring data scientist's models to production by improving " +
      'code quality, testing and performance.\n' +
      'I also worked on the architecture and development of the backend and data processing, and ' +
      'participated in setting product strategy.',
    responsibilities: [
      'Machine Learning Engineering',
      'Architecture',
      'DevOps',
      'Data Engineering',
    ],
    technologies: ['Azure', 'Azure Machine Learning', 'Databricks', 'Python', 'Terraform'],
    imageLineAwesomeClass: 'la-university',
  },
  {
    industry: 'Energy',
    title: 'Open Data Portal',
    startTime: new Date('2022-10-01'),
    endTime: new Date('2024-06-10'),
    client: 'Energy company',
    allocation: 0.8,
    description:
      "Developed new version of client's Open Data portal from designs to production.\n" +
      'The new version has improved user experience and a more maintanable application ' +
      "architecture as part of client's technology landscape.",
    responsibilities: ['Architecture', 'Full Stack Development'],
    technologies: ['Azure', 'TypeScript', 'Next.js', 'Express', 'Azure SQL'],
    imageLineAwesomeClass: 'la-bolt',
  },
  {
    industry: 'Healthcare',
    title: 'Azure data platform setup',
    startTime: new Date('2023-05-01'),
    endTime: new Date('2023-09-01'),
    client: 'Healthcare consultancy',
    allocation: 0.2,
    description:
      'PoC for setting up an Azure & Snowflake cloud data platform.\n' +
      "We evaluated if a cloud data platform would be a good alternative to client's existing " +
      'on-premise solution from security, performance, cost, and developer experience ' +
      'perspectives.',
    responsibilities: ['Architecture', 'Cybersecurity', 'Cloud Engineering', 'DevOps'],
    technologies: ['Azure', 'Snowflake', 'Terraform'],
    imageLineAwesomeClass: 'la-laptop-medical',
  },
  {
    industry: 'Healthcare',
    title: 'Power BI Embedded autoscaling',
    startTime: new Date('2024-01-01'),
    endTime: new Date('2024-02-29'),
    allocation: 0.2,
    client: 'Healthcare consultancy',
    description:
      'I implemented a solution that automatically scales PBIE capacities based on ' +
      'compute load.\nAs a result the client was able to cut PBIE costs by 30% during the first ' +
      'month even with very conservative guardrails, with no observed impact to user experience.',
    responsibilities: ['Cost Optimization', 'DevOps'],
    technologies: ['Azure', 'Power BI', 'Terraform', 'Python'],
    imageLineAwesomeClass: 'la-laptop-medical',
  },
  {
    industry: 'Energy',
    title: 'Web app lifecycle upgrade',
    startTime: new Date('2024-01-18'),
    endTime: new Date('2024-04-12'),
    allocation: 1.0,
    client: 'Energy company',
    description:
      'Modernized a web application and migrated its runtime platform to ' +
      'Azure Kubernetes Service.\nThe new version has a streamlined ' +
      'codebase and architecture, enabling easier maintainability and new feature ' +
      'development.',
    responsibilities: ['Architecture', 'Full Stack Development'],
    technologies: ['Azure', 'Kubernetes', 'TypeScript', 'Next.js', 'Kafka'],
    imageLineAwesomeClass: 'la-bolt',
  },
  {
    industry: 'Manufacturing',
    title: 'AI strategy definition',
    startTime: new Date('2024-02-01'),
    endTime: new Date('2024-03-31'),
    allocation: 0.1,
    client: 'Manufacturing company',
    description: [
      'Worked as part of consultant team to help client define AI strategy,',
      'focus areas and development operating model.\n',
      'Participated as subject-matter expert in client interviews and workshops.',
    ].join(' '),
    responsibilities: ['Strategy'],
    technologies: ['GenAI'],
    imageLineAwesomeClass: 'la-industry',
  },
  {
    industry: 'Software Consulting',
    title: 'Azure AI concept development',
    startTime: new Date('2024-06-01'),
    endTime: new Date('2024-06-30'),
    allocation: 0.1,
    client: 'Consulting company',
    description:
      'Participated as SME in developing AI service offering for the client.\n' +
      'My contribution included a high-level architecture, technology stack, and case examples.',
    responsibilities: ['Architecture', 'Strategy'],
    technologies: ['Azure', 'GenAI'],
    imageLineAwesomeClass: 'la-laptop-code',
  },
  {
    industry: 'Energy',
    title: 'Monitoring system development',
    startTime: new Date('2024-06-10'),
    client: 'Energy company',
    allocation: 1,
    description:
      'Developing internal monitoring systems for the client, used by operators in daily work.\n' +
      'The systems integrate extensively with Kafka for real-time data processing and ' +
      'visualization.',
    responsibilities: ['Full Stack Development'],
    technologies: ['TypeScript', 'Java', 'Kafka', 'Kafka Streams', 'Kubernetes'],
    imageLineAwesomeClass: 'la-bolt',
  },
];

export const sortedProjects = projects.sort((a, b) => {
  // If only one project is ongoing, the ongoing project comes first
  if (a.endTime === undefined && b.endTime !== undefined) {
    return -1;
  }

  if (a.endTime !== undefined && b.endTime === undefined) {
    return 1;
  }

  // Otherwise, sort by start date descending
  return b.startTime!!.getTime() - a.startTime!!.getTime();
});

export const latestProjects = sortedProjects.slice(0, 2);
export const otherBrainflightProjects = sortedProjects.slice(2);
