import { OnsenModule } from 'ngx-onsenui';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { Page1Component } from './page1/page1.component';

import { AppService } from './app.service';

const components = [
  TabsComponent,
  HomeComponent,
  HelpComponent,
  Page1Component,
];

@NgModule({
  declarations: [
    AppComponent,
    ...components,
  ],
  imports: [
    BrowserModule,
    OnsenModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  entryComponents: components,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
