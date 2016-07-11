import { Component } from '@angular/core';
import { Campaign } from './campaign';
import { CampaignService } from './campaign.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-campaigns',
  templateUrl: 'app/campaign.component.html',
  styleUrls:  ['app/campaign.component.css'],
  directives: []
})

export class CampaignComponent implements OnInit {
  campaigns = [];
  error: any;
  editCampaign: Campaign;

  constructor(
    private router: Router,
    private campaignService: CampaignService) {
  }

  ngOnInit() {
    this.getCampaigns();
  }

  ngAfterViewInit() {
    $(document).foundation();
  }

  addCampaign() {
    //this.addingCampaign = true;
    //this.selectedCampaign = null;
  }

  initNewCampaign() {
    this.editCampaign = new Campaign();
  }

  saveNewCampaign() {
    if (this.savedCampaign) {
        this.savedCampaign.title = this.editCampaign.title;
        this.savedCampaign.message = this.editCampaign.message;
    } else {
      this.campaigns.unshift(this.editCampaign);
    }
    // TODO: Call POST on CampaignService
  }

  close(savedCampaign: Campaign) {
    //this.addingCampaign = false;
    if (savedCampaign) { this.getCampaigns(); }
  }

  deletecampaign(campaign: Campaign, event: any) {
    event.stopPropagation();
  /*  this.campaignService
        .delete(campaign)
        .then(res => {
          this.campaignes = this.campaignes.filter(h => h !== campaign);
          if (this.selectedCampaign === campaign) { this.selectedCampaign = null; }
        })
        .catch(error => this.error = error);*/
  }

  setCampaign(campaign) {
    this.savedCampaign = campaign;
    this.editCampaign = new Campaign();
    this.editCampaign.title = campaign.title;
    this.editCampaign.message = campaign.message;
  }

  getCampaigns() {
    this.campaignService.getCampaigns().then(
      campaigns => this.campaigns = campaigns
    );
  }

  onSelect(campaign: Campaign) {
    //this.selectedCampaign = campaign;
  }
  gotoDetail() {
    //this.router.navigate(['/detail', this.selectedcampaign.id]);
  }
}
