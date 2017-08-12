import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnsenModule, OnsNavigator } from 'ngx-onsenui';
import { CommonModule } from '@angular/common';

import { HelpComponent } from './help.component';

@NgModule({
  imports: [
    CommonModule,
    OnsenModule
  ],
  providers: [OnsNavigator],
  entryComponents: [HelpComponent],
  declarations: [HelpComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HelpModule { }
