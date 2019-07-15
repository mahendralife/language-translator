import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { routes} from '../Route/RouteList';

@NgModule({
    imports: [
      RouterModule.forRoot(
        routes,
        { enableTracing: false } // <-- debugging purposes only
      )
      // other imports here
    ],
    exports:[RouterModule]

  })

export class RoutingModule { }