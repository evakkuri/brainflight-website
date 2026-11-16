export interface Experience {
  organization: string;
  title: string;
  kind: 'employment' | 'founding';
  startTime: Date;
  endTime?: Date;
  description?: string;
}

const experience: Experience[] = [
  {
    organization: 'QMill',
    title: 'Software Engineer',
    kind: 'employment',
    startTime: new Date('2026-08-10'),
  },
  {
    organization: 'Stellaris',
    title: 'Co-Founder & CTO',
    kind: 'founding',
    startTime: new Date('2026-03-16'),
    endTime: new Date('2026-08-10'),
    description:
      'Co-founded a startup developing AI-powered enterprise risk management software. ' +
      'Led the technical work across product architecture and development, with a strong ' +
      'focus on AI in both the product and development process. ' +
      'The venture did not progress to a sustainable business.',
  },
];

export const recentExperience = experience.sort((a, b) => {
  if (a.endTime === undefined && b.endTime !== undefined) {
    return -1;
  }

  if (a.endTime !== undefined && b.endTime === undefined) {
    return 1;
  }

  return b.startTime.getTime() - a.startTime.getTime();
});
