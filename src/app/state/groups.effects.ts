import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, switchMap, catchError, tap } from 'rxjs/operators';
import { GroupsService } from '../shared/groups.service';

@Injectable()
export class GroupsEffects {

  // Guide: https://ngrx.io/guide/effects

  loadGroups$ = createEffect(() => this.actions$.pipe(
    ofType('[Groups Page] Load Groups'),
    mergeMap(() => this.groupsService.getAll()
      .pipe(
        map(groups => ({ type: '[Groups API] Groups Loaded', payload: groups })),
        catchError(() => EMPTY)
      )
    )
  ));

  loadGroupUsers$ = createEffect(() => this.actions$.pipe(
    ofType('[Groups Page] Load Group Users'),
    switchMap((action: any) => this.groupsService.getUsers(action.groupId)
      .pipe(
        /*tap(d => console.log('LoadGroupUsers Effect ', d)),*/
        map(users => ({ type: '[Groups API] Group Users Loaded', payload: {groupId: action.groupId, users} })),
        catchError(() => EMPTY)
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private groupsService: GroupsService
  ) { }

}
