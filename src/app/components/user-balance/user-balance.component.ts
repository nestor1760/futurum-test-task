import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CampaignListService } from '../campaign-list/campaign-list.service';
import { ICampaign } from '../../models/campaign';

@Component({
  selector: 'app-user-balance',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './user-balance.component.html',
  styleUrl: './user-balance.component.css'
})
export class UserBalanceComponent implements OnInit {

  campaigns: ICampaign[] = [];
  activeCampaigns: ICampaign[] = [];
  remainingBalance: number = 0;

  @Input() userBalance: number
  @Output() remainingBalanceChange = new EventEmitter<number>();

  constructor(private campaignListService: CampaignListService) { }

  ngOnInit(): void {
    this.campaignListService.getCampaigns().subscribe((campaigns) => {
      this.campaigns = campaigns;
      this.activeCampaigns = this.campaigns.filter(campaign => campaign.status === 'on');
      const totalActiveCampaignBudget = this.activeCampaigns.reduce((sum, campaign) => sum + campaign.fund, 0);
      this.remainingBalance = this.userBalance - totalActiveCampaignBudget;

      this.remainingBalanceChange.emit(this.remainingBalance);
    });

    this.campaignListService.fetchCampaigns();
  }
}
