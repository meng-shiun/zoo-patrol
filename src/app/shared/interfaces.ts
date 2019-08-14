export interface ITab {
  name: string;
  link: string;
}

// Meta data of a project
export interface IProject {
  id: number;
  client: string;
  name: string;
  manager: string;
  status: string;
  deadline: string;
  details?: IProjectDetails;
  budget_field?: IProjectBudgetField;
}

export interface IProjectDetails {
  project_id: number;
  client: string;
  sub_clinet: string;
  name: string;
  manager: string;
  status: string;
}

export interface IProjectPlanning {
  id: number;
  description: string;
}

export interface IBudgetItem {
  budget: number;
  type: string;
  hours: number;
}

export interface IProjectBudgetField {
  project_id: number;
  total?: IBudgetItem[];
}
