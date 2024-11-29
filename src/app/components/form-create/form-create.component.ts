import { CampaignListService } from './../campaign-list/campaign-list.service';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './form-create.component.html',
  styleUrl: './form-create.component.css'
})

export class FormCreate implements OnInit {
  @Input() openModal: boolean
  @Output() openModalChange = new EventEmitter<boolean>();

  form: FormGroup

  constructor(private campaignListService: CampaignListService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      keywords: this.fb.array([], Validators.required),
      bid: [0, [Validators.required, Validators.min(1)]],
      fund: [0, [Validators.required, Validators.min(1)]],
      status: ['', Validators.required],
      town: ['', Validators.required],
      radius: [0, [Validators.required, Validators.min(1)]],
    });
  }

  get keywords(): FormArray {
    return this.form.get('keywords') as FormArray;
  }

  addKeyword(keyword: string): void {
    if (keyword.trim()) {
      this.keywords.push(this.fb.control(keyword.trim()));
    }
  }

  removeKeyword(index: number): void {
    this.keywords.removeAt(index);
  }

  create(): void {
    if (this.form.valid) {
      const formData = this.form.value;
      this.campaignListService.createElement(formData).subscribe({
        next: () => {
          this.campaignListService.fetchCampaigns()
          this.openModal = false
          this.openModalChange.emit(this.openModal)

        },
        error: (error) => {
          console.log(error)
        }
      })
    } else {
      console.log("Form is not valid");
    }
  }
}
