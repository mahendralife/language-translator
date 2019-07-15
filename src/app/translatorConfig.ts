import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient  } from "@angular/common/http";
import { TranslateLoader} from '@ngx-translate/core';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/language/', '.json');
}
export const translatorConfig = {
    loader: {
      provide: TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [HttpClient]
    }
}

export const LanguageList = [ 'en', 'it'];
export const  DefaultLanguage = LanguageList[0];