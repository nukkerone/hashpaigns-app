import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-card',
  templateUrl: './campaign-card.component.html',
  styleUrls: ['./campaign-card.component.scss'],
})
export class CampaignCardComponent implements OnInit {

  public baseRoute = '/dashboard/campaigns';

  @Input() title: string;
  @Input() description: string;
  @Input() routerLink: string;

  constructor() { }

  ngOnInit() {}

}
