import { Component, OnInit } from '@angular/core';
import { ICampaign } from '../../models/campaign';
import { CampaignListService } from './campaign-list.service';
import { CampaignItemComponent } from '../campaign-item/campaign-item.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-campaign-list',
  standalone: true,
  imports: [
    CampaignItemComponent,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './campaign-list.component.html',
  styleUrl: './campaign-list.component.css'
})
export class CampaignListComponent implements OnInit {
  allCampaign: ICampaign[] = []
  private pollingSubscription!: Subscription

  constructor(private campaignListService: CampaignListService) { }

  ngOnInit(): void {
    // this.pollingSubscription = interval(1000).subscribe(() => {
    this.campaignListService.getAll().subscribe((data) => {
      this.allCampaign = data
    })

    // })
  }
}
