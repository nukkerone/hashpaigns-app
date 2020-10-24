import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { GroupsService } from '../shared/groups.service';

@Injectable()
export class GroupsEffects {

  // Guide: https://ngrx.io/guide/effects

  loadGroups$ = createEffect(() => this.actions$.pipe(
    ofType('[Groups Page] Load Groups'),
    mergeMap(() => this.groupsService.getAll()
      .pipe(
        map(groups => ({ type: '[Groups API] Groups Loaded Success', payload: groups })),
        catchError(() => EMPTY)
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private groupsService: GroupsService
  ) { }

}
