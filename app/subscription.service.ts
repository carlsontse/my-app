import { Injectable } from '@angular/core';
import { Subscription } from './subscription';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SubscriptionService {
  constructor(private http: Http) { }

  private subscriptionsUrl = 'app/subscriptions';  // URL to web api

  getSubscriptions(): Promise<Subscription[]> {
     return this.http.get(this.subscriptionsUrl)
                .toPromise()
                .then(response => response.json().data)
                .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
