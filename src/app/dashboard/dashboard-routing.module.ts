import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignPage } from '../campaigns/campaign/campaign.page';
import { CampaignsPage } from '../campaigns/campaigns.page';
import { GroupPage } from '../groups/group/group.page';
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
        component: GroupPage,
      },
      {
        path: 'campaigns',
        component: CampaignsPage,
      },
      {
        path: 'campaigns/:id',
        component: CampaignPage,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
