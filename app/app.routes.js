"use strict";
var router_1 = require('@angular/router');
var campaign_component_1 = require('./campaign.component');
var subscription_component_1 = require('./subscription.component');
var campaign_detail_component_1 = require('./campaign-detail.component');
var routes = [
    {
        path: 'subscriptions',
        component: subscription_component_1.SubscriptionComponent
    },
    {
        path: 'campaigns',
        component: campaign_component_1.CampaignComponent
    },
    {
        path: 'campaigns/:id',
        component: campaign_detail_component_1.CampaignDetailComponent
    },
    {
        path: '',
        redirectTo: '/campaigns',
        pathMatch: 'full'
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map