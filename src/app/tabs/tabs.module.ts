import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  entryComponents: [TabsComponent],
  declarations: [TabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabsModule { }
