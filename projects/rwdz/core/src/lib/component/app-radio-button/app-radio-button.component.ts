import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  templateUrl: './app-radio-button.component.html',
  styleUrl: './app-radio-button.component.scss',
  imports: [CommonModule],
})
export class AppRadioButtonComponent {
  @Input() control!: FormControl;
  @Input() label?: string;
  @Input() value?: string;
  @Input() defaultSelected: any;
  @Input() multi?: boolean = false;
  @Input() optionsList?: any[];
  @Input() classes: string = '';

  @Output() changed = new EventEmitter<boolean>();
  constructor() {}

  onSelectionChange(event: any) {
    this.changed.emit(event);
  }
}
