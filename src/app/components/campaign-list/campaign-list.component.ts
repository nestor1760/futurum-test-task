import { Component, Input, OnInit } from '@angular/core';
import { ICampaign } from '../../models/campaign';
import { CampaignListService } from './campaign-list.service';
import { CampaignItemComponent } from '../campaign-item/campaign-item.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-campaign-list',
  standalone: true,
  imports: [
    CampaignItemComponent,
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './campaign-list.component.html',
  styleUrl: './campaign-list.component.css'
})
export class CampaignListComponent implements OnInit {
  allCampaign: ICampaign[] = []
  @Input() userBalance: number

  constructor(private campaignListService: CampaignListService) { }

  ngOnInit(): void {
    this.campaignListService.getCampaigns().subscribe((data) => {
      this.allCampaign = data
    })
    this.campaignListService.fetchCampaigns()
  }

  deleteCampaign(id: number): void {
    this.campaignListService.deleteElement(id).subscribe(() => {
      this.allCampaign = this.allCampaign.filter((campaign) => campaign.id !== id);
    });
  }
}
