import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-card',
  templateUrl: './app-card.component.html',
  styleUrl: './app-card.component.scss',
  imports: [CommonModule,MatCardModule],
})
export class AppCardComponent {
  @Input() hasHeader: boolean = false;
  @Input() hasFooter: boolean = false;
  @Input() hasActions: boolean = false;
  @Input() removeContentPadding: boolean = false;
  @Input() actionsAlign: 'start' | 'center' | 'end' = 'start';
  @Input() customStyles: { [key: string]: string } = {};
}
