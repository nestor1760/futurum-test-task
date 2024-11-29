import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICampaign } from '../../models/campaign';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-campaign-item',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './campaign-item.component.html',
  styleUrl: './campaign-item.component.css'
})
export class CampaignItemComponent {
  @Input() campaign: ICampaign
  @Output() delete = new EventEmitter<number>()

  onDelete(): void {
    this.delete.emit(this.campaign.id)
  }
}
