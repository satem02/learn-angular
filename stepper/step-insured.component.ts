import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-insured',
  templateUrl: './step-insured.component.html',
  styleUrls: ['./step-insured.component.scss']
})
export class StepInsuredComponent implements OnInit {

  InsuredFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.InsuredFormGroup = this.formBuilder.group({
      address: ['', Validators.required]
    });
 } 
}