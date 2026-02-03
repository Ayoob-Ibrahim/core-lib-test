import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrl: './app-input.component.scss',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    TranslateModule,ReactiveFormsModule
  ],
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
