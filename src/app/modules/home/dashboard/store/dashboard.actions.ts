import { createAction, props } from '@ngrx/store';

export const UpdateMessage = createAction(
  '[Dashboard] Update Message',
  props<{ message: string }>()
);
