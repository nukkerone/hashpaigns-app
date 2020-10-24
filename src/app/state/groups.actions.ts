import { createAction, props } from '@ngrx/store';

export const load = createAction('[Groups Page] Load Groups', props<{data: any}>());
export const loadSuccess = createAction('[Groups API] Groups Loaded Success', props<{data: any}>());
