import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICampaign } from '../../models/campaign';
import { CampaignListService } from '../campaign-list/campaign-list.service';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { maxKeywords } from '../form-create/utils/maxKeywords';

@Component({
  selector: 'app-form-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './form-edit.component.html',
  styleUrl: './form-edit.component.css'
})
export class FormEditComponent implements OnInit {
  @Input() userBalance: number
  @Input() title: string
  @Input() campaign: ICampaign | null = null
  @Output() closeEditModal = new EventEmitter<void>()
  @Output() updateCampaign = new EventEmitter<ICampaign>()

  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private campaignService: CampaignListService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      keywords: ['', [Validators.required, Validators.maxLength(100)]],
      bid: [0, [Validators.required, Validators.min(15)]],
      fund: [0, [Validators.required, Validators.min(1)]],
      status: ['', Validators.required],
      town: ['', Validators.required],
      radius: [0, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    if (this.campaign) {
      this.form.patchValue({
        name: this.campaign.name,
        keywords: this.campaign.keywords.join(', '),
        bid: this.campaign.bid,
        fund: this.campaign.fund,
        status: this.campaign.status,
        town: this.campaign.town,
        radius: this.campaign.radius
      });
    }
  }

  checkBalance(): boolean {
    const fund = this.form.get('fund')?.value;
    console.log(this.userBalance);
    return this.userBalance >= fund;
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    if (!this.checkBalance()) {
      alert('Insufficient balance to create this campaign!');
      return;
    }

    const updatedCampaign: ICampaign = {
      ...this.campaign,
      ...this.form.value,
      keywords: this.form.value.keywords.split(',').map((keyword: string) => keyword.trim())
    };

    this.campaignService.updateElement(updatedCampaign.id, updatedCampaign).subscribe(
      (updatedCampaign) => {
        console.log('campaign successfully updated', updatedCampaign);
      },
      (error) => {
        console.error('error updating campaign', error);
      }
    );
  }

  get keywords() {
    return (this.form.get('keywords') as FormArray);
  }

  addKeyword(keyword: string): void {
    if (this.keywords.length < 5) {
      this.keywords.push(new FormControl(keyword, Validators.required));
    }
  }

  removeKeyword(index: number): void {
    this.keywords.removeAt(index);
  }

  closeModalWindow(): void {
    this.closeEditModal.emit();
  }
}
