import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAlertsComponent } from './app-alerts.component';

describe('AppAlertsComponent', () => {
  let component: AppAlertsComponent;
  let fixture: ComponentFixture<AppAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAlertsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
