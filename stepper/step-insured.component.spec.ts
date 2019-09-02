import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepInsuredComponent } from './step-insured.component';

describe('StepInsuredComponent', () => {
  let component: StepInsuredComponent;
  let fixture: ComponentFixture<StepInsuredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepInsuredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepInsuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
