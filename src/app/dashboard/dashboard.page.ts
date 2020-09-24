import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Groups',
      url: '/dashboard/groups',
      icon: 'people'
    },
    {
      title: 'Campaigns',
      url: '/dashboard/campaigns',
      icon: 'radio'
    },
    {
      title: 'Settings',
      url: '/dashboard/settings',
      icon: 'cog'
    }
  ];
  public page: string;

  constructor(private activatedRoute: ActivatedRoute, public auth: AuthService) { }

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.paramMap.get('id');

    const path = window.location.pathname.split('dashboard/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  logout() {
    this.auth.logout();
  }

}
