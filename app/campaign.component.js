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
var campaign_1 = require('./campaign');
var campaign_service_1 = require('./campaign.service');
var router_1 = require('@angular/router');
var CampaignComponent = (function () {
    function CampaignComponent(router, campaignService) {
        this.router = router;
        this.campaignService = campaignService;
        this.campaigns = [];
    }
    CampaignComponent.prototype.ngOnInit = function () {
        this.getCampaigns();
    };
    CampaignComponent.prototype.ngAfterViewInit = function () {
        $(document).foundation();
    };
    CampaignComponent.prototype.addCampaign = function () {
        //this.addingCampaign = true;
        //this.selectedCampaign = null;
    };
    CampaignComponent.prototype.initNewCampaign = function () {
        this.editCampaign = new campaign_1.Campaign();
    };
    CampaignComponent.prototype.saveNewCampaign = function () {
        if (this.savedCampaign) {
            this.savedCampaign.title = this.editCampaign.title;
            this.savedCampaign.message = this.editCampaign.message;
        }
        else {
            this.campaigns.unshift(this.editCampaign);
        }
        // TODO: Call POST on CampaignService
    };
    CampaignComponent.prototype.close = function (savedCampaign) {
        //this.addingCampaign = false;
        if (savedCampaign) {
            this.getCampaigns();
        }
    };
    CampaignComponent.prototype.deletecampaign = function (campaign, event) {
        event.stopPropagation();
        /*  this.campaignService
              .delete(campaign)
              .then(res => {
                this.campaignes = this.campaignes.filter(h => h !== campaign);
                if (this.selectedCampaign === campaign) { this.selectedCampaign = null; }
              })
              .catch(error => this.error = error);*/
    };
    CampaignComponent.prototype.setCampaign = function (campaign) {
        this.savedCampaign = campaign;
        this.editCampaign = new campaign_1.Campaign();
        this.editCampaign.title = campaign.title;
        this.editCampaign.message = campaign.message;
    };
    CampaignComponent.prototype.getCampaigns = function () {
        var _this = this;
        this.campaignService.getCampaigns().then(function (campaigns) { return _this.campaigns = campaigns; });
    };
    CampaignComponent.prototype.onSelect = function (campaign) {
        //this.selectedCampaign = campaign;
    };
    CampaignComponent.prototype.gotoDetail = function () {
        //this.router.navigate(['/detail', this.selectedcampaign.id]);
    };
    CampaignComponent = __decorate([
        core_1.Component({
            selector: 'my-campaigns',
            templateUrl: 'app/campaign.component.html',
            styleUrls: ['app/campaign.component.css'],
            directives: []
        }), 
        __metadata('design:paramtypes', [router_1.Router, campaign_service_1.CampaignService])
    ], CampaignComponent);
    return CampaignComponent;
}());
exports.CampaignComponent = CampaignComponent;
//# sourceMappingURL=campaign.component.js.map