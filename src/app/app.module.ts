import { OnsenModule } from 'ngx-onsenui';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';

import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    HelpComponent
  ],
  imports: [
    BrowserModule,
    OnsenModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  entryComponents: [HomeComponent, HelpComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
