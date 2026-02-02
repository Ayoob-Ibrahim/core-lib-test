import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRadioButtonComponent } from './app-radio-button.component';

describe('AppRadioButtonComponent', () => {
  let component: AppRadioButtonComponent;
  let fixture: ComponentFixture<AppRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRadioButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
