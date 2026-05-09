type Responsibility =
  | 'Data Engineering'
  | 'Machine Learning Engineering'
  | 'Architecture'
  | 'DevOps'
  | 'Cloud Engineering'
  | 'Full Stack Development'
  | 'Cybersecurity'
  | 'Cost Optimization'
  | 'Strategy'
  | 'CTO';

export interface Project {
  industry: string;
  title: string;
  startTime: Date;
  endTime?: Date;
  allocation?: number;
  client?: string;
  description?: string;
  responsibilities?: Responsibility[];
  technologies?: string[];
  imageLineAwesomeClass?: string;
}
