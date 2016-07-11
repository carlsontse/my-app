import { Component } from '@angular/core';
import {Campaign} from './campaign';
import {CampaignService} from './campaign.service';
import { ActivatedRoute } from '@angular/router';
import { OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'campaign-detail',
  templateUrl: 'app/campaign-detail.component.html',
  styleUrls:  ['app/campaign-detail.component.css'],
  directives: []
})

export class CampaignDetailComponent implements OnInit,OnDestroy {

  campaign: Campaign;
  sub: any;

  constructor(
    private route: ActivatedRoute,
    private campaignService: CampaignService
  ) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.campaignService.getCampaign(id)
        .then(campaign => this.campaign = campaign);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
