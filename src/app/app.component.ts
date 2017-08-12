import { Component, ViewChild, ElementRef } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  home = HomeComponent;
  help = HelpComponent;

  // (1) @ViewChild を使って ons-tabbar 要素の ElementRef を取得する
  @ViewChild('tabbar') tabbarElementRef: ElementRef;

  constructor(private _service: AppService) {
    // (2) service を使って (1) の ElementRef に別のコンポーネントからもアクセスできるようにする
    this._service.appComponent = this;
  }
}
