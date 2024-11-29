import { CampaignListService } from './../campaign-list/campaign-list.service';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { ICampaign } from '../../models/campaign';

@Component({
  selector: 'app-form-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './form-create.component.html',
  styleUrl: './form-create.component.css'
})

export class FormCreate {
  @Input() openModal: boolean
  @Output() openModalChange = new EventEmitter<boolean>();

  // constructor(private campaignListService: CampaignListService) { }
  // formData: ICampaign = {
  //   id: 0,
  //   name: '',
  //   keywords: [''],
  //   bid: 0,
  //   fund: 0,
  //   status: '',
  //   town: '',
  //   radius: 0
  // }

  // create() {
  //   this.campaignListService.createElement(this.formData).subscribe({
  //     next: () => {
  //       this.openModal = false
  //       this.openModalChange.emit(this.openModal);
  //     },
  //     error: (error) => {
  //       console.log(error);

  //     }
  //   })
  // }

  form: FormGroup

  constructor(private campaignListService: CampaignListService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      keywords: ['', Validators.required],
      bid: [0, [Validators.required, Validators.min(1)]],
      fund: [0, [Validators.required, Validators.min(1)]],
      status: ['', Validators.required],
      town: ['', Validators.required],
      radius: [0, [Validators.required, Validators.min(1)]],
    });
  }

  create(): void {
    if (this.form.valid) {
      const formData = this.form.value;
      this.campaignListService.createElement(formData).subscribe({
        next: () => {
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
