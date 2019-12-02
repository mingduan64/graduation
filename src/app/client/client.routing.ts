import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { ClientComponent } from './client.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CategoryComponent } from './category/category.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
   
  //  { path: '', redirectTo: '/#', pathMatch: 'full'},
    { path: '', 
      component: ClientComponent,
      children: [
        { path:'', redirectTo: '/homepage', pathMatch: 'full' },
       // { path: 'signin',        component: SigninComponent},
        { path: 'homepage',      component: HomepageComponent},
        { path: 'aboutus',       component: AboutusComponent },
        { path: 'category',      component: CategoryComponent }
      ]
    },
    { path: 'signin',         component: SigninComponent },
  { path: 'signup',           component: SignupComponent },
    
   ];
   
   @NgModule({
       
    imports: [RouterModule.forChild(routes)],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    exports: [RouterModule]
   })
  



export class ClientRoutingModule { }
