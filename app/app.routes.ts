import { provideRouter, RouterConfig }  from '@angular/router';
import { CampaignComponent } from './campaign.component';
import { SubscriptionComponent } from './subscription.component';
import { CampaignDetailComponent } from './campaign-detail.component';

const routes: RouterConfig = [
  {
    path: 'subscriptions',
    component: SubscriptionComponent
  },
  {
    path: 'campaigns',
    component: CampaignComponent
  },
  {
    path: 'campaigns/:id',
    component: CampaignDetailComponent
  },
  {
    path: '',
    redirectTo: '/campaigns',
    pathMatch: 'full'
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
