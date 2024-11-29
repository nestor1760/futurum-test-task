import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICampaign } from '../../models/campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignListService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<ICampaign[]>('http://localhost:3000/campaigns')
  }

  createElement(item: ICampaign) {
    return this.httpClient.post('http://localhost:3000/campaigns', item)
  }
}
