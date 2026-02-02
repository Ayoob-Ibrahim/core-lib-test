import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './app-image.component.html',
  styleUrl: './app-image.component.scss',
  imports: [CommonModule],
})
export class AppImageComponent {
  @Input() src: string = '';
  @Input() height: string = '';
  @Input() width: string = '';
  @Input() ngClass: string = '';
  @Input() defaultImage: string = '';
  @Input() customStyles: { [key: string]: string } = {};
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }
}
