interface Project {
  industry: string;
  title: string;
  startTime: Date;
  endTime?: Date;
  client?: string;
  responsibilities?: string;
  keyWords?: string[];
  image?: string;
}

export default Project;
