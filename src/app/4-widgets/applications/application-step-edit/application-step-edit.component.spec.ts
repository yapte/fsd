import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationStepEditComponent } from './application-step-edit.component';

describe('ApplicationStepEditComponent', () => {
  let component: ApplicationStepEditComponent;
  let fixture: ComponentFixture<ApplicationStepEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApplicationStepEditComponent]
    });
    fixture = TestBed.createComponent(ApplicationStepEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
