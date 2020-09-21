import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.page.html',
  styleUrls: ['./campaign.page.scss'],
})
export class CampaignPage implements OnInit {

  protected campaign: any = { id: 1, title: 'Campaign A', description: 'Use hashtag #CampaignA from 10AM - 11AM' };

  constructor() { }

  ngOnInit() {
  }

}
