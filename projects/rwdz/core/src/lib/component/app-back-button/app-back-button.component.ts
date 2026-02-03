import { Component, Input } from '@angular/core';
import { BackNavigationService } from '../../service/back-navigation/back-navigation.service';
import { CommonModule } from '@angular/common';
import { AppButtonComponent } from '../app-button/app-button.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './app-back-button.component.html',
  styleUrl: './app-back-button.component.scss',
  imports: [CommonModule,AppButtonComponent,TranslateModule],
})
export class AppBackButtonComponent {
  @Input() color: string = 'primary';

  constructor(private backNavigationService: BackNavigationService) {}

  async onClick() {
    this.backNavigationService.goBack();
  }
}
