import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageList } from '../../translatorConfig';

@Component({
  selector: 'app-language-translate',
  templateUrl: './language-translate.component.html',
  styleUrls: ['./language-translate.component.scss'],

})
export class LanguageTranslateComponent implements OnInit {
  LanguageList =LanguageList;
  param = {value: 'world'};
  constructor(public translate: TranslateService) {
  }

  ngOnInit() {
  }

}
