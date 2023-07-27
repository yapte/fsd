import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsListRowComponent } from './applications-list-row.component';

describe('ApplicationsListRowComponent', () => {
  let component: ApplicationsListRowComponent;
  let fixture: ComponentFixture<ApplicationsListRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApplicationsListRowComponent]
    });
    fixture = TestBed.createComponent(ApplicationsListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
