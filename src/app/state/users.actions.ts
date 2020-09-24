import { createAction, props } from '@ngrx/store';

export const add = createAction('[Users Component] Increment', props<{data: any}>());
export const remove = createAction('[Users Component] Decrement', props<{id: number}>());

export const login = createAction('[Users Component] Login', props<{email: string, password: string}>());
export const logout = createAction('[Users Component] Logout');
