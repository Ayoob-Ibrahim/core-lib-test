import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPhotoUploadComponent } from './app-photo-upload.component';

describe('AppPhotoUploadComponent', () => {
  let component: AppPhotoUploadComponent;
  let fixture: ComponentFixture<AppPhotoUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppPhotoUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPhotoUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
