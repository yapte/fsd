import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsDetailsPageComponent } from './applications-details-page.component';

describe('ApplicationsDetailsPageComponent', () => {
  let component: ApplicationsDetailsPageComponent;
  let fixture: ComponentFixture<ApplicationsDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApplicationsDetailsPageComponent]
    });
    fixture = TestBed.createComponent(ApplicationsDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
