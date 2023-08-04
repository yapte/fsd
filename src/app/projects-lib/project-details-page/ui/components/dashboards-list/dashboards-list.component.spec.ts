import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardsListComponent } from './dashboards-list.component';

describe('DashboardsListComponent', () => {
  let component: DashboardsListComponent;
  let fixture: ComponentFixture<DashboardsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardsListComponent]
    });
    fixture = TestBed.createComponent(DashboardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
