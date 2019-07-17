import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingModule } from '../app/Route/Routing.module';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LanguageTranslateComponent } from './component/language-translate/language-translate.component';
import { translatorConfig } from './translatorConfig';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown-angular7';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LanguageTranslateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    TranslateModule.forRoot(translatorConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
