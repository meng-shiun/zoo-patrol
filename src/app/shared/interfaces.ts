export interface ITab {
  name: string;
  link: string;
}

// Meta data of a project
export interface IProject {
  id: number | null;
  client: string;
  name: string;
  manager: string;
  status: string;
  deadline: string;
  details?: IProjectDetails;
  budget_field?: IProjectBudgetField;
}

/**
 * @param id: Need to be identical to IProject ID
 */
export interface IProjectDetails {
  id: number | null;
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

/**
 * @param id: Need to be identical to IProject ID
 */
export interface IProjectBudgetField {
  id: number | null;
  budgetItems: IBudgetItem[];
}

export interface IClient {
  id: number;
  name: string;
}

export interface IProjectManager {
  id: number;
  name: string;
}

export interface IProjectStatus {
  id: number;
  status: string;
}
