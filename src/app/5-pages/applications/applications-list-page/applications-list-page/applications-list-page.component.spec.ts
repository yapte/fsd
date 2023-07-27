import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsListPageComponent } from './applications-list-page.component';

describe('ApplicationsListPageComponent', () => {
  let component: ApplicationsListPageComponent;
  let fixture: ComponentFixture<ApplicationsListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationsListPageComponent]
    });
    fixture = TestBed.createComponent(ApplicationsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
