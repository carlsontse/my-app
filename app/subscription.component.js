"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var subscription_service_1 = require('./subscription.service');
var campaign_service_1 = require('./campaign.service');
var router_1 = require('@angular/router');
var SubscriptionComponent = (function () {
    function SubscriptionComponent(router, subscriptionService, campaignService) {
        this.router = router;
        this.subscriptionService = subscriptionService;
        this.campaignService = campaignService;
        this.subscriptions = [];
    }
    SubscriptionComponent.prototype.ngOnInit = function () {
        this.getSubscriptions();
    };
    SubscriptionComponent.prototype.ngAfterViewInit = function () {
        //  $(document).foundation();
    };
    SubscriptionComponent.prototype.getSubscriptions = function () {
        var _this = this;
        this.subscriptionService.getSubscriptions().then(function (subscriptions) {
            _this.subscriptions = subscriptions;
            var that = _this;
            $.each(_this.subscriptions, function (i, subscription) {
                that.campaignService.getCampaign(subscription.campaignId).then(function (campaign) {
                    subscription.campaign = campaign;
                });
            });
        });
    };
    SubscriptionComponent = __decorate([
        core_1.Component({
            selector: 'my-subscriptions',
            templateUrl: 'app/subscription.component.html',
            styleUrls: ['app/subscription.component.css'],
            directives: []
        }), 
        __metadata('design:paramtypes', [router_1.Router, subscription_service_1.SubscriptionService, campaign_service_1.CampaignService])
    ], SubscriptionComponent);
    return SubscriptionComponent;
}());
exports.SubscriptionComponent = SubscriptionComponent;
//# sourceMappingURL=subscription.component.js.map