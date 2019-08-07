export interface ITab {
  name: string;
  link: string;
}

export interface IProject {
  id: number;
  client: string;
  name: string;
  manager: string;
  status: string;
  deadline: string;
}

export interface IProjectDetails {
  id: number;
  client: string;
  name: string;
  manager: string;
  status: string;
}

export interface IProjectPlanning {
  id: number;
  description: string;
}

export interface IProjectBudget {
  id: number;
  budget: number;
  type: string;
}
