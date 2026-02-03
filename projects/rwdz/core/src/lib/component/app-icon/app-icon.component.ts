import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'app-icon',
  templateUrl: './app-icon.component.html',
  styleUrl: './app-icon.component.scss',
  imports: [CommonModule,MatIconModule,MatTooltipModule],
})
export class AppIconComponent {
  @Input() iconName: string = '';
  @Input() color: string = '';
  @Input() size: number = 24;
  @Input() toolTipPosition: TooltipPosition | undefined = undefined;
  @Input() toolTipText: string = '';

  get iconContainerStyle() {
    let bgColor = `${this.color}1A`;
    return this.color ? { 'background-color': bgColor } : {};
  }

  get iconStyle() {
    return this.color || this.size
      ? {
          color: this.color,
          'font-size': `${this.size}px`,
          width: `${this.size}px`,
          height: `${this.size}px`,
        }
      : {};
  }
}
