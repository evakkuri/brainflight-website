export type Certification = {
  name: string;
  imagePath: string;
  link: string;
};

export const certifications: Certification[] = [
  {
    name: 'Certified Information Systems Security Professional (CISSP)',
    imagePath: 'img/certifications/cissp.png',
    link: 'https://www.credly.com/badges/30eddf22-5ef9-431e-91df-7122701a03a0/public_url',
  },
  {
    name: 'Azure Solutions Architect Expert',
    imagePath: 'img/certifications/microsoft-certified-azure-solutions-architect-expert.png',
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/eliasvakkuri/7ABE9B89877DAAB1?sharingId',
  },
  {
    name: 'Azure Data Engineer Associate',
    imagePath: 'img/certifications/microsoft-certified-azure-data-engineer-associate.png',
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/eliasvakkuri/E1BA945F9DC3324A?sharingId',
  },
  {
    name: 'Azure Data Scientist Associate',
    imagePath: 'img/certifications/microsoft-certified-azure-data-scientist-associate.png',
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/eliasvakkuri/F3E1383CF8459C1D?sharingId',
  },
  {
    name: 'HashiCorp Certified: Terraform Associate (003)',
    imagePath: 'img/certifications/hashicorp-certified-terraform-associate-003.png',
    link: 'https://www.credly.com/badges/5328822c-9202-4b77-b5bb-11eb9a2c98d4/public_url',
  },
];
