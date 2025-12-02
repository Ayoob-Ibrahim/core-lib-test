import { NgModule } from '@angular/core';
import { AppTextComponent } from './app-text/app-text.component';
import { CoreComponents } from './core-components.component';

const coreComponents = [CoreComponents, AppTextComponent];

@NgModule({
  declarations: [...coreComponents],
  imports: [],
  exports: [...coreComponents],
})
export class CoreComponentsModule {}
