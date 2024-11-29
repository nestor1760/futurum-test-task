import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICampaign } from '../../models/campaign';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaignListService {
  private campaigns$ = new BehaviorSubject<ICampaign[]>([]);
  private url = "http://localhost:3000/campaigns"

  constructor(private httpClient: HttpClient) { }

  getCampaigns(): Observable<ICampaign[]> {
    return this.campaigns$.asObservable();
  }

  fetchCampaigns(): void {
    this.httpClient.get<ICampaign[]>(this.url).subscribe((data) => {
      this.campaigns$.next(data);
    });
  }

  createElement(item: ICampaign) {
    return this.httpClient.post('http://localhost:3000/campaigns', item)
  }

  deleteElement(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`)
  }
}
