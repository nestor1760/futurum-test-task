import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() title: string
  @Input() modalOpen: boolean
  @Output() modalOpenChange = new EventEmitter<boolean>()

  openModalWindow() {
    this.modalOpen = true
    this.modalOpenChange.emit(this.modalOpen)
    console.log(this.modalOpen)
  }
}
