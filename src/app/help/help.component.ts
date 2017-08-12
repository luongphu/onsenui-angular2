import { Component, OnInit } from '@angular/core';
import { OnsNavigator, Params } from 'ngx-onsenui';
import { Page1Component } from '../page1/page1.component';

@Component({
  selector: 'ons-page[help]',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor(private navi: OnsNavigator, private params: Params) { }

  ngOnInit() {
  }

  push() {
  	this.navi.element.pushPage(Page1Component);
  }

}
