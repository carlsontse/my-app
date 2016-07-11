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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var CampaignService = (function () {
    function CampaignService(http) {
        this.http = http;
        this.campaignsUrl = 'app/campaigns'; // URL to web api
    }
    CampaignService.prototype.post = function (campaign) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.campaignsUrl, JSON.stringify(campaign), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    // Update existing campaign
    CampaignService.prototype.put = function (campaign) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.campaignsUrl + "/" + campaign.id;
        return this.http
            .put(url, JSON.stringify(campaign), { headers: headers })
            .toPromise()
            .then(function () { return campaign; })
            .catch(this.handleError);
    };
    CampaignService.prototype.delete = function (campaign) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.campaignsUrl + "/" + campaign.id;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    CampaignService.prototype.save = function (campaign) {
        if (campaign.id) {
            return this.put(campaign);
        }
        return this.post(campaign);
    };
    CampaignService.prototype.getCampaigns = function () {
        return this.http.get(this.campaignsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    CampaignService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    CampaignService.prototype.getCampaign = function (id) {
        return this.getCampaigns()
            .then(function (campaigns) { return campaigns.filter(function (campaign) { return campaign.id === id; })[0]; });
    };
    CampaignService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CampaignService);
    return CampaignService;
}());
exports.CampaignService = CampaignService;
//# sourceMappingURL=campaign.service.js.map