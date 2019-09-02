import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepProposalInformationComponent } from './step-proposal-information.component';

describe('StepProposalInformationComponent', () => {
  let component: StepProposalInformationComponent;
  let fixture: ComponentFixture<StepProposalInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepProposalInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepProposalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
