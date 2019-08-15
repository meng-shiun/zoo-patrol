import { createAction, props } from '@ngrx/store';

export const updateMessage = createAction(
  '[Dashboard] Update Message',
  props<{ message: string }>()
);
