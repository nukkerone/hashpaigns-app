import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupsPage } from '../groups/groups.page';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'groups',
        component: GroupsPage,
      },
      {
        path: 'groups/:id',
        component: GroupsPage,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
