import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppTextComponent } from './app-text/app-text.component';

const components = [AppTextComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class CoreComponentsModule {}
