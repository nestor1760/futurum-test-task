import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ICampaign } from '../../models/campaign';

@Component({
  selector: 'app-campaign-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './campaign-item.component.html',
  styleUrl: './campaign-item.component.css'
})
export class CampaignItemComponent {
  @Input() campaign: ICampaign
}
