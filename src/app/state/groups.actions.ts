import { createAction, props } from '@ngrx/store';

export const load = createAction('[Groups Page] Load Groups');
export const loadSuccess = createAction('[Groups API] Groups Loaded', props<{data: Array<any>}>());

export const loadUsers = createAction('[Group Users Page] Load Group Users', props<{groupId: number}>());
export const loadUsersSuccess = createAction('[Groups API] Group Users Loaded', props<{groupId: number, data: Array<any>}>());
