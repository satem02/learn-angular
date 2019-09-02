import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS, StepperSelectionEvent } from '@angular/cdk/stepper';
import { NavigationFormService } from './navigation-form.service';
import * as Steps from '../steps/index';

@Component({
  selector: 'app-navigation-step',
  templateUrl: './navigation-step.component.html',
  styleUrls: ['./navigation-step.component.scss'],
  providers: [NavigationFormService, {
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
  }]
})

export class NavigationStepComponent implements OnInit {

  @ViewChild(Steps.StepProposalInformationComponent, { static: false }) ProposalInformationComponent: Steps.StepProposalInformationComponent;
  @ViewChild(Steps.StepInsuredComponent, { static: false }) InsuredComponent: Steps.StepInsuredComponent;



  constructor(private ref: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.ref.detectChanges();
  }

  get frmStepProposalInformation() {
    return this.ProposalInformationComponent ? this.ProposalInformationComponent.ProposalInformationFormGroup : null;
  }

  get frmInsured() {
    return this.InsuredComponent ? this.InsuredComponent.InsuredFormGroup : null;
  }


  ngOnInit() { }

}