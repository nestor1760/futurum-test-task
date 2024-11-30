import { CampaignListService } from './components/campaign-list/campaign-list.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { CommonModule } from '@angular/common';
import { CampaignListComponent } from './components/campaign-list/campaign-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormCreate } from './components/form-create/form-create.component';
import { MatIconModule } from '@angular/material/icon';
import { FormDeleteComponent } from './components/form-delete/form-delete.component';
import { UserBalanceComponent } from './components/user-balance/user-balance.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ModalComponent,
    HeaderComponent,
    CampaignListComponent,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    FormCreate,
    FormDeleteComponent,
    UserBalanceComponent
  ],
  providers: [CampaignListService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Campaign page';
  modalOpen: boolean = false
  userBalance: number = 10000
  remainingBalance: number

  updateRemainingBalance(newRemainingBalance: number): void {
    this.remainingBalance = newRemainingBalance;
  }
}
