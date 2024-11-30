import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICampaign } from '../../models/campaign';
import { BehaviorSubject, catchError, Observable, switchMap, tap, throwError } from 'rxjs';

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
    this.httpClient.get<ICampaign[]>(this.url).pipe(
      catchError((error) => {
        console.error('Error fetching campaigns:', error);
        return throwError(() => error);
      })
    ).subscribe((data) => {
      this.campaigns$.next(data);
    });
  }

  createElement(item: ICampaign): Observable<ICampaign> {
    return this.httpClient.post<ICampaign>(this.url, item).pipe(
      catchError((error) => {
        console.error('Error creating campaign:', error);
        return throwError(() => error);
      })
    );
  }

  deleteElement(id: number): Observable<ICampaign[]> {
    return this.httpClient.delete<ICampaign>(`${this.url}/${id}`).pipe(
      catchError((error) => {
        console.error('Error deleting campaign:', error)
        return throwError(() => error)
      }),
      switchMap(() => {
        return this.httpClient.get<ICampaign[]>(this.url)
      }),
      tap((updatedCampaigns) => {
        this.campaigns$.next(updatedCampaigns)
      })
    );
  }
}
