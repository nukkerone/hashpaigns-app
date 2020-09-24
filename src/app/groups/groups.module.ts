import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupsPage } from './groups.page';
import { RouterModule } from '@angular/router';
import { GroupPage } from './group/group.page';
import { SharedModule } from '../shared/shared.module';
import { GroupCreateComponent } from './group-create/group-create.component';
import { GroupUsersPage } from './group-users/group-users.page';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [GroupsPage, GroupPage, GroupCreateComponent, GroupUsersPage, AddUserComponent],
  exports: [GroupsPage, GroupPage, GroupCreateComponent, GroupUsersPage, AddUserComponent],
})
export class GroupsPageModule {}
