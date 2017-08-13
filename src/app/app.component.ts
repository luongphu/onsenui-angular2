import { Component, ViewChild, ElementRef } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tabs = TabsComponent;

  constructor() {

  }
}
