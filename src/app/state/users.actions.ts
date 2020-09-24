import { createAction, props } from '@ngrx/store';

export const add = createAction('[Users Component] Increment', props<{data: any}>());
export const remove = createAction('[Users Component] Decrement', props<{id: number}>());
