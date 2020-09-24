import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { GroupsPageModule } from '../groups/groups.module';
import { CampaignsPageModule } from '../campaigns/campaigns.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    GroupsPageModule,
    CampaignsPageModule,
    StoreModule,
    ReactiveFormsModule,
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
