import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './app-photo-upload.component.html',
  styleUrl: './app-photo-upload.component.scss',
  imports: [CommonModule],
})
export class AppPhotoUploadComponent {
  @ViewChild('photoInput') photoInput!: ElementRef;
  @Input() label: string = '';
  @Input() hint: string = '';
  @Input() photo: string | null = null;
  @Input() accept: string = '.jpg, .jpeg, .png';
  @Input() iconName: string = 'photo_camera';
  @Input() resetFlag: boolean = false;
  @Input() control!: FormControl;

  @Output() photoSelected = new EventEmitter<any>();

  @Input() preview: string | ArrayBuffer | null | undefined = null;

  constructor() {}

  ngOnInit(): void {
    if (!this.control) {
      throw new Error(
        'PhotoUploadComponent requires a FormControl as an input'
      );
    }
  }

  triggerPhotoInput() {
    this.photoInput.nativeElement.click();
  }

  onPhotoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const photo = input.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        this.preview = e.target?.result;
      };
      reader.readAsDataURL(photo);

      // Set the photo object to the passed form control without setting the input's value directly
      this.control?.setValue(photo);
      this.control.markAsDirty();
      this.control.markAsTouched();

      this.photoSelected.emit(photo);
    }
  }
}
