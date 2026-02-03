import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatRadioModule } from '@angular/material/radio';
@Component({
  selector: 'app-radio-button',
  templateUrl: './app-radio-button.component.html',
  styleUrl: './app-radio-button.component.scss',
  imports: [CommonModule, ReactiveFormsModule,
    MatRadioModule],
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
  constructor() { }

  onSelectionChange(event: any) {
    this.changed.emit(event);
  }
}
