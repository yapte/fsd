import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationStepRowComponent } from './application-step-row.component';

describe('ApplicationStepRowComponent', () => {
  let component: ApplicationStepRowComponent;
  let fixture: ComponentFixture<ApplicationStepRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApplicationStepRowComponent]
    });
    fixture = TestBed.createComponent(ApplicationStepRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
