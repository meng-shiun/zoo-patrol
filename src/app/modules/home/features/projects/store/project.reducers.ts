import { createReducer, on, Action, ActionReducerMap } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { IProject, IProjectDetails, IProjectBudgetField } from '@app/shared';
import { ProjectState } from '.';
import { projectAllReducer } from './project-all.reducer';
import { detaildReducer } from './project-details.reducer';
import { budgetFieldReducer } from './project-budgetField.reducer';

export { projectAllReducer, AllProjectState } from './project-all.reducer';
export { detaildReducer, ProjectDetailState } from './project-details.reducer';
export { budgetFieldReducer, ProjectBudgetFieldState } from './project-budgetField.reducer';

// TODO: Implement ngrx/entity
// Example...
// export interface ProjectState extends EntityState<IProject> {
//   // additional entities state property
//   selectedProjectId: number | null;
//   loading: boolean;
//   error: string;
// }
