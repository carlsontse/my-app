import { Injectable } from '@angular/core';
import { Campaign } from './campaign';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CampaignService {
  constructor(private http: Http) { }

  private campaignsUrl = 'app/campaigns';  // URL to web api

  private post(campaign: Campaign): Promise<Campaign> {
    let headers = new Headers({
      'Content-Type': 'application/json'});

      return this.http
               .post(this.campaignsUrl, JSON.stringify(campaign), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  // Update existing campaign
  private put(campaign: Campaign) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.campaignsUrl}/${campaign.id}`;

    return this.http
               .put(url, JSON.stringify(campaign), {headers: headers})
               .toPromise()
               .then(() => campaign)
               .catch(this.handleError);
  }

  delete(campaign: Campaign) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.campaignsUrl}/${campaign.id}`;

    return this.http
               .delete(url, headers)
               .toPromise()
               .catch(this.handleError);
  }

  save(campaign: Campaign): Promise<Campaign>  {
    if (campaign.id) {
      return this.put(campaign);
    }
    return this.post(campaign);
  }

  getCampaigns(): Promise<Campaign[]> {
     return this.http.get(this.campaignsUrl)
                .toPromise()
                .then(response => response.json().data)
                .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getCampaign(id: number) {
    return this.getCampaigns()
             .then(campaigns => campaigns.filter(campaign => campaign.id === id)[0]);
  }
}
