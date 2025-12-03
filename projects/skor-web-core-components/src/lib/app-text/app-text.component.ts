import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './app-text.component.html',
  styleUrl: './app-text.component.scss',
  standalone: false,
})
export class AppTextComponent {
  @Input() type: string = 'body';
  @Input() size: string = 'large';
  @Input() fontSize: string | undefined = undefined;
  @Input() bold: boolean = false;
  @Input() semiBold: boolean = false;
  @Input() removeMargin: boolean = false;
  @Input() textColor!: string;
  @Input() class!: string;
  @Input() htmlContent!: string;

  get textClass() {
    let classes = `mat-${this.type}-${this.size}`;
    if (this.bold) {
      classes += ' font-bold';
    }
    if (this.semiBold) {
      classes += ' font-semi-bold';
    }
    if (this.removeMargin) {
      classes += ' m-0';
    }
    if (this.class) {
      classes += ` ${this.class}`;
    }
    return classes;
  }
}
