import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICampaign } from '../../models/campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignListService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ICampaign[]>('http://localhost:3000/campaigns')
  }
}
