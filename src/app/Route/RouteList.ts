import { LoginComponent } from '../component/login/login.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { LanguageTranslateComponent } from '../component/language-translate/language-translate.component';

export const routes = [
    {
        path: '' , component: LoginComponent
    },
    {
        path: 'dashboard', component: DashboardComponent
    },
    {
        path: 'language', component: LanguageTranslateComponent
    }
]