export interface IExperience {
  position: string;
  company: string;
  companyUrl: string;
  start: number;
  end?: number;
  summary: string;
  tags: string[];
}

export interface IProject {
  title: string;
  year: number;
  tags: string[];
  link: string;
  imageUrl: string;
  summary: string;
  githubLink?: string;
}

export interface Section {
  title: string;
  id: string;
}
