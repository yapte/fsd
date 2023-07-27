import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationStepCreateComponent } from './application-step-create.component';

describe('ApplicationStepCreateComponent', () => {
  let component: ApplicationStepCreateComponent;
  let fixture: ComponentFixture<ApplicationStepCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApplicationStepCreateComponent]
    });
    fixture = TestBed.createComponent(ApplicationStepCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
