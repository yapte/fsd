import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDetailsComponent } from './application-details.component';

describe('ApplicationsDetailsComponent', () => {
  let component: ApplicationDetailsComponent;
  let fixture: ComponentFixture<ApplicationDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApplicationDetailsComponent]
    });
    fixture = TestBed.createComponent(ApplicationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
