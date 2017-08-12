import { Component, OnInit } from '@angular/core';
import { OnsNavigator, Params } from 'ngx-onsenui';

@Component({
  selector: 'ons-page[page1]',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  constructor(private navi: OnsNavigator, private params: Params) { }
  
  ngOnInit() {
  }
  
  pop() {
    this.navi.element.popPage();
  }
}
