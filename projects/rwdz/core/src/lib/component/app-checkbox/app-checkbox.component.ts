import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './app-checkbox.component.html',
  styleUrl: './app-checkbox.component.scss',
  imports: [CommonModule],
})
export class AppCheckboxComponent {
  @Input() control!: FormControl;
  @Input() label?: any;
  @Input() labelBold?: boolean = false;
  @Input() showCheckbox?: boolean = true;
  @Input() showErrorAlert?: boolean = true;

  @Output() changed:EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private translate: TranslateService) {}

  onChange(event: any) {
    if (this.showCheckbox) {
      if (this.label) {
        this.label.checked = event.checked;
      }
      this.changed.emit(event);
    } else {
      this.changed.emit(event.checked);
    }
  }
}
