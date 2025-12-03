import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppTextComponent } from 'core-components';

@NgModule({
  declarations: [AppTextComponent],
  imports: [CommonModule],
  exports: [AppTextComponent],
})
export class CoreComponentsModule {}
