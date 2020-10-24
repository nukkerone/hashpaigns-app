import { createReducer, on } from '@ngrx/store';
import { loadSuccess } from './groups.actions';

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
