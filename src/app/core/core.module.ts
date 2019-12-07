import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoreRoutingModule} from './core-routing.module';
import {CoreComponent} from './core.component';
import {ThemeModule} from '../@theme/theme.module';
import {NbMenuModule} from '@nebular/theme';


@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ThemeModule,
    NbMenuModule,
  ],
})
export class CoreModule {
}
