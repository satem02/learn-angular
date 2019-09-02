import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-step-proposal-information',
  templateUrl: './step-proposal-information.component.html',
  styleUrls: ['./step-proposal-information.component.scss']
})
export class StepProposalInformationComponent implements OnInit {
  ProposalInformationFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {  
    this.ProposalInformationFormGroup = this.formBuilder.group({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required)
    });

 } 
}