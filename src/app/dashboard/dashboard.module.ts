import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { GroupsPageModule } from '../groups/groups.module';
import { CampaignsPageModule } from '../campaigns/campaigns.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    GroupsPageModule,
    CampaignsPageModule,
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
