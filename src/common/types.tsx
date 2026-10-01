export interface IExperience {
  position: string;
  company: string;
  companyUrl?: string;
  start: number;
  end?: number;
  summary: string;
  tags: string[];
  /** Shorter position shown on the home page */
  homePosition?: string;
  /** Shorter summary shown on the home page */
  homeSummary?: string;
}

export interface IProject {
  title: string;
  year: number;
  tags: string[];
  link?: string;
  imageUrl?: string;
  summary: string;
  /** Tags shown on the home page, when they differ from the full list */
  homeTags?: string[];
}

export interface NavItem {
  /** Section id on the home page */
  id: string;
  label: string;
  /** Standalone page path */
  href: string;
}
