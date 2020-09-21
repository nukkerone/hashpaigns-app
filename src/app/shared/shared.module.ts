import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CampaignCardComponent } from './campaign-card/campaign-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
  ],
  declarations: [CampaignCardComponent],
  exports: [CampaignCardComponent]
})
export class SharedModule {}
