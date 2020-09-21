import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupsPage } from './groups.page';
import { RouterModule } from '@angular/router';
import { GroupPage } from './group/group.page';
import { SharedModule } from '../shared/shared.module';
import { GroupCreateComponent } from './group-create/group-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [GroupsPage, GroupPage, GroupCreateComponent],
  exports: [GroupsPage, GroupPage, GroupCreateComponent],
})
export class GroupsPageModule {}
