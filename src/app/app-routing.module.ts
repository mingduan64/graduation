import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin/admin.routing';
import { ClientRoutingModule} from './client/client.routing';
import { HomepageComponent } from './client/homepage/homepage.component';


const routes: Routes = [
  

 
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
