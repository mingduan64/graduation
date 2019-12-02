import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ManageaboutComponent } from './manageabout/manageabout.component';
import { ManagecateComponent } from './managecate/managecate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageblogcateComponent } from './manageblogcate/manageblogcate.component';
import { ManageblogComponent} from './manageblog/manageblog.component';

import { ManagehomeComponent } from './managehome/managehome.component';
import { ManageclientComponent } from './manageclient/manageclient.component';
import { ManagefaqComponent } from './managefaq/managefaq.component';
import { ManageorderComponent } from './manageorder/manageorder.component';
import { ManageproductComponent } from './manageproduct/manageproduct.component';
import { ManageteamComponent } from './manageteam/manageteam.component';
import { HomepagecarouselComponent } from './homepagecarousel/homepagecarousel.component';
import { TopsaleComponent } from './topsale/topsale.component';
import { AddhcaComponent } from './addhca/addhca.component';
import { UpdatehcaComponent } from './updatehca/updatehca.component';


const routes: Routes = [
    {path: 'admin', redirectTo: '/admin/dashboard', pathMatch: 'full'},
    {
      path: 'admin',
      component: AdminComponent,
      children: [
       // { path: 'admin', redirectTo: '/admin/dashboard', pathMatch: 'full'},
        { path: 'manageaboutus' ,         component: ManageaboutComponent      },
        { path: 'managecategory',         component: ManagecateComponent       },
        { path: 'dashboard'   ,           component: DashboardComponent        },
        { path: 'manageblog',             component: ManageblogcateComponent   },
        { path: 'manageblog/blog',        component: ManageblogComponent       },
        { path: 'managehomepage',         component: ManagehomeComponent       },
        { path: 'manageclientsaccount',   component: ManageclientComponent     },
        { path: 'managefaq',              component: ManagefaqComponent        },
        { path: 'manageorder',            component: ManageorderComponent      },
        { path: 'manageproduct',          component: ManageproductComponent    },
        { path: 'manageteam',             component: ManageteamComponent       },
        { path: 'managehomepage/carousel',component: HomepagecarouselComponent }, 
      //  children:[
        //  {path: 'addhca', component: AddhcaComponent},
          //{path: 'updatehca', component: UpdatehcaComponent}] },

        { path: 'managehomepage/topsale', component: TopsaleComponent          },
        { path: 'addhca'                ,component: AddhcaComponent            },
        { path: 'updatehca/:id'         ,component: UpdatehcaComponent         }
      ]
    }
   ];
   
   @NgModule({    
    imports: [RouterModule.forChild(routes)],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    exports: [RouterModule]
   })
  



export class AdminRoutingModule { }
