import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-delete',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './form-delete.component.html',
  styleUrl: './form-delete.component.css'
})
export class FormDeleteComponent {

  @Input() title: string
  @Input() openModal: boolean = false;
  @Output() confirmDelete = new EventEmitter<void>()
  @Output() cancelDelete = new EventEmitter<void>()

  onConfirm(): void {
    this.confirmDelete.emit();
  }

  onCancel(): void {
    this.cancelDelete.emit();
  }
}
