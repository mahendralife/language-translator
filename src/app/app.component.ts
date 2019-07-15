import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {LanguageList, DefaultLanguage  } from './translatorConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(public translate: TranslateService){
    translate.addLangs(LanguageList);
    translate.setDefaultLang(DefaultLanguage);
  }
  title = 'my-login-app-a';
}
