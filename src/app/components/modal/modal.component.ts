import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormCreate } from '../form-create/form-create.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormCreate
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})


export class ModalComponent {
  @Input() title: string
  @Input() openModal: boolean
  @Output() openModalChange = new EventEmitter<boolean>();

  closeModalWindow() {
    this.openModal = false
    this.openModalChange.emit(this.openModal)
    console.log(this.openModal);
  }
}
