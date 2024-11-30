import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICampaign } from '../../models/campaign';
import { MatIconModule } from '@angular/material/icon';
import { ModalComponent } from '../modal/modal.component';
import { FormDeleteComponent } from '../form-delete/form-delete.component';

@Component({
  selector: 'app-campaign-item',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    ModalComponent,
    FormDeleteComponent
  ],
  templateUrl: './campaign-item.component.html',
  styleUrl: './campaign-item.component.css'
})
export class CampaignItemComponent {

  confirmModal: boolean = false

  @Input() campaign: ICampaign
  @Output() delete = new EventEmitter<number>()

  openConfirmModal(): void {
    this.confirmModal = true
  }

  onConfirmDelete(): void {
    this.delete.emit(this.campaign.id)
    this.confirmModal = false
  }

  onCancelDelete(): void {
    this.confirmModal = false
  }
}
