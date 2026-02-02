import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrl: './app-input.component.scss',
  imports: [CommonModule],
})
export class AppInputComponent {
  @Input() label!: string;
  @Input() control!: FormControl;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() prefixIcon: string = '';
  @Input() suffixIcon: string = '';
  @Input() required: boolean = false;
  @Input() hintStart: string | undefined = undefined;
  @Input() hintEnd: string | undefined = undefined;
  @Output() iconChange = new EventEmitter<any>();

  ngOnInit(): void {
    this.control.valueChanges.subscribe((newValue) => {
      this.valueChange.emit(newValue);
    });
  }

  @Output() valueChange = new EventEmitter<string>();

  onClickSuffix() {
    this.iconChange.emit(this.suffixIcon);
  }
}
