import { createReducer, on } from '@ngrx/store';
import { loadSuccess, loadUsersSuccess } from './groups.actions';

export const initialState = [];
// tslint:disable-next-line:variable-name
const _groupsReducer = createReducer(
  initialState,

  on(loadSuccess, (state, data: any) => {
    return [...data.payload];
  }),
);

export function groupsReducer(state, action) {
  return _groupsReducer(state, action);
}

export const initialGroupUsersState = {};
// tslint:disable-next-line:variable-name
const _groupUsersReducer = createReducer(
  initialGroupUsersState,

  on(loadUsersSuccess, (state, data: any) => {
    console.log('i ', state, data);
    const aux = {... state};
    aux[data.payload.groupId] = data.payload.users;
    return aux;
  }),
);

export function groupUsersReducer(state, action) {
  return _groupUsersReducer(state, action);
}
