import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageList } from '../../translatorConfig';
import { dropdownList , getDropDown} from './dropdown';

@Component({
  selector: 'app-language-translate',
  templateUrl: './language-translate.component.html',
  styleUrls: ['./language-translate.component.scss'],

})

export class LanguageTranslateComponent implements OnInit {

  //For Language English and Italic
  LanguageList = LanguageList;
  param = { value: 'world' };


  //For Multi Select
  dropdownList = dropdownList;
  selectedItems = [];
  dropdownSettings = {};

  constructor(public translate: TranslateService) {
    this.dropdownList = getDropDown(translate.defaultLang);
    // if user can chnage seleced language 
    translate.onLangChange.subscribe( lng => { 
      this.dropdownList = getDropDown(lng['lang']);
    });

  }


  ngOnInit() {
  
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
    onItemSelect(item: any) {
      console.log(item);
    }
    onSelectAll(items: any) {
      console.log(items);
    }

}
