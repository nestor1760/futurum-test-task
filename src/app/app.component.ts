import { CampaignListService } from './components/campaign-list/campaign-list.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { CommonModule } from '@angular/common';
import { CampaignItemComponent } from './components/campaign-item/campaign-item.component';
import { CampaignListComponent } from './components/campaign-list/campaign-list.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ModalComponent,
    CampaignItemComponent,
    CampaignListComponent,
    HttpClientModule,
    CommonModule,
  ],
  providers: [CampaignListService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'futurum test task';
}
