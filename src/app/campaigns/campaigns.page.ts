import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.page.html',
  styleUrls: ['./campaigns.page.scss'],
})
export class CampaignsPage implements OnInit {

  protected campaigns = [
    { id: 1, title: 'Campaign A', description: 'Use hashtag #CampaignA from 10AM - 11AM' },
    { id: 2, title: 'Campaign B', description: 'Use hashtag #CampaignB from 10AM - 11AM' },
    { id: 3, title: 'Campaign C', description: 'Use hashtag #CampaignC from 10AM - 11AM' },
    { id: 4, title: 'Campaign D', description: 'Use hashtag #CampaignD from 10AM - 11AM' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
