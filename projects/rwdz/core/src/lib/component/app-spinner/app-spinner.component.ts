import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './app-spinner.component.html',
  styleUrl: './app-spinner.component.scss',
  imports: [CommonModule],
})
export class AppSpinnerComponent {
  @Input() mode: 'determinate' | 'indeterminate' = 'indeterminate';
  // 'determinate' | 'indeterminate' | 'buffer' | 'query'
  @Input() color: string = '#000';
  @Input() value: number = 35;
  @Input() diameter: number = 24;
  @Input() width: number = 3;
  @Input() bufferValue: number = 0;
}
