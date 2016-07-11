import { Component } from '@angular/core';
import {CampaignService} from './campaign.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'campaign-detail',
  templateUrl: 'app/campaign-detail.component.html',
  styleUrls:  ['app/campaign-detail.component.css'],
  directives: []
})

export class CampaignDetailComponent implements OnInit,OnDestroy {

  campaign: Campaign;

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
