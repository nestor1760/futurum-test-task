import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICampaign } from '../../models/campaign';
import { MatIconModule } from '@angular/material/icon';
import { ModalComponent } from '../modal/modal.component';
import { FormDeleteComponent } from '../form-delete/form-delete.component';
import { FormEditComponent } from '../form-edit/form-edit.component';

@Component({
  selector: 'app-campaign-item',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    ModalComponent,
    FormDeleteComponent,
    FormEditComponent
  ],
  templateUrl: './campaign-item.component.html',
  styleUrl: './campaign-item.component.css'
})
export class CampaignItemComponent {

  confirmModal: boolean = false
  editModal: boolean = false

  @Input() campaign: ICampaign
  @Input() userBalance: number
  @Output() delete = new EventEmitter<number>()
  @Output() update = new EventEmitter<ICampaign>();

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

  openEditModal(): void {
    this.editModal = true
  }

  closeEditModal(): void {
    this.editModal = false
  }

  getNewCampaign(updatedCampaign: ICampaign): void {
    this.update.emit(updatedCampaign)
    this.campaign = updatedCampaign
    this.closeEditModal()
  }
}
