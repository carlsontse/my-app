import { Component } from '@angular/core';
import { Subscription } from './subscription';
import { SubscriptionService } from './subscription.service';
import { CampaignService } from './campaign.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-subscriptions',
  templateUrl: 'app/subscription.component.html',
  styleUrls:  ['app/subscription.component.css'],
  directives: []
})

export class SubscriptionComponent implements OnInit {
  subscriptions = [];
  error: any;

  constructor(
    private router: Router,
    private subscriptionService: SubscriptionService,
    private campaignService: CampaignService) {
  }

  ngOnInit() {
    this.getSubscriptions();
  }

  ngAfterViewInit() {
  //  $(document).foundation();
  }

  getSubscriptions() {
    this.subscriptionService.getSubscriptions().then(
      subscriptions => {
        this.subscriptions = subscriptions;
        var that=this;
        $.each(this.subscriptions, function(i, subscription) {
          that.campaignService.getCampaign(subscription.campaignId).then(
            campaign => {
              subscription.campaign = campaign;
            }
          );
        });

      }
    );
  }

}
