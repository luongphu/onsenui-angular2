import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'ons-page[home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  i = 0;

  constructor(private _service: AppService) { }

  ngOnInit() {
  }

  inc() {
    this.i++;
  }

  switchTab() {
    console.log(this._service);
    // (3) service を使って (1) の ElementRef にアクセスし、
    //     nativeElement プロパティで DOM 要素を取得し、setActiveTab 関数を叩く
    this._service.tabsComponent.tabbarElementRef.nativeElement.setActiveTab(1);
  }
}
