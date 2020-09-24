import { createReducer, on } from '@ngrx/store';
import { add, remove } from './users.actions';

export const initialState = [];

// tslint:disable-next-line:variable-name
const _usersReducer = createReducer(
  initialState,

  on(add, (state, data: any) => {
    let d = {...data, ...{ id: state.length + 1}};
    return [...state, ...[d]];
  }),

  on(remove, (state, data) => {
    const removeId = state.findIndex(u => u.id === data.id);
    if (removeId === -1) { return [...state]; }
    const newState = [...state];
    newState.splice(removeId);
    return newState;
  }),
);

export function usersReducer(state, action) {
  return _usersReducer(state, action);
}
