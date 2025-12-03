import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppTextComponent } from '../lib/app-text/app-text.component';

@NgModule({
  declarations: [AppTextComponent],
  imports: [CommonModule],
  exports: [AppTextComponent],
})
export class CoreComponentsModule {}
