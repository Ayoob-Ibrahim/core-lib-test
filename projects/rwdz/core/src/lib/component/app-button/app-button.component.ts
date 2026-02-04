import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AppSpinnerComponent } from '../app-spinner/app-spinner.component';
@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrl: './app-button.component.scss',
  imports: [CommonModule, MatIconModule, AppSpinnerComponent],
  
})
export class AppButtonComponent {
  @Input() type:
    | 'raised'
    | 'outline'
    | 'flat'
    | 'basic'
    | 'icon'
    | 'fab'
    | 'mini-fab'
    | '' = '';
  @Input() eventType: 'button' | 'submit' = 'button';
  @Input() color: string = 'primary';
  @Input() customStyles: { [key: string]: string } = {};
  @Input() text: string = '';
  @Input() icon: string | null | undefined = '';
  @Input() loading: boolean | null = false;
  @Input() disabled: boolean | null = false;
  @Input() isAction: boolean | null = false;
  @Input() redirectUrl: string | any = '';
  @Input() redirectTarget: string = '_blank';
  @Output() clicked = new EventEmitter<void>();

  colorClass: string = '';

  ngOnInit() {
    this.colorClass =
      (this.isAction ? 'action-button ' : '') + this.getColorClass();
  }

  private getColorClass(): string {
    switch (this.color) {
      case 'primary':
        return 'mat-primary';
      case 'accent':
        return 'mat-accent';
      case 'warn':
        return 'mat-warn';
      case 'white':
        return 'mat-white';
      default:
        return '#000';
    }
  }

  handleClick() {
    this.clicked.emit();
  }
}
