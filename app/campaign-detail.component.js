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
var campaign_service_1 = require('./campaign.service');
var router_1 = require('@angular/router');
var CampaignDetailComponent = (function () {
    function CampaignDetailComponent(route, campaignService) {
        this.route = route;
        this.campaignService = campaignService;
    }
    CampaignDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.campaignService.getCampaign(id)
                .then(function (campaign) { return _this.campaign = campaign; });
        });
    };
    CampaignDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CampaignDetailComponent = __decorate([
        core_1.Component({
            selector: 'campaign-detail',
            templateUrl: 'app/campaign-detail.component.html',
            styleUrls: ['app/campaign-detail.component.css'],
            directives: []
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, campaign_service_1.CampaignService])
    ], CampaignDetailComponent);
    return CampaignDetailComponent;
}());
exports.CampaignDetailComponent = CampaignDetailComponent;
//# sourceMappingURL=campaign-detail.component.js.map