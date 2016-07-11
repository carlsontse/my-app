import { Component }       from '@angular/core';
import { CampaignService }     from './campaign.service';
import { SubscriptionService } from './subscription.service';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    CampaignService,
    SubscriptionService
  ]
})
export class AppComponent {
  title = 'Campaigns';
}
