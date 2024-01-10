export type Certification = {
  name: string;
  imagePath: string;
  link: string;
};

export const certifications: Certification[] = [
  {
    name: 'Azure Solutions Architect Expert',
    imagePath: 'img/certifications/microsoft-certified-azure-solutions-architect-expert.png',
    link: 'https://www.credly.com/badges/8103e27c-ffe7-449a-acdb-bcd40240d356/public_url',
  },
  {
    name: 'Azure Data Engineer Associate',
    imagePath: 'img/certifications/microsoft-certified-azure-data-engineer-associate.png',
    link: 'https://www.credly.com/badges/09dac906-5f45-4b0c-b802-4f3d0d1ec41d/public_url',
  },
  {
    name: 'Azure Data Scientist Associate',
    imagePath: 'img/certifications/microsoft-certified-azure-data-scientist-associate.png',
    link: 'https://www.credly.com/badges/2d99b7cf-07b7-480d-a009-0171ab71c515/public_url',
  },
];
