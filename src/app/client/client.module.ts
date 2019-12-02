import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';
import { TopproComponent } from './toppro/toppro.component';
import { BlogcateComponent } from './blogcate/blogcate.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { BlogComponent } from './blog/blog.component';
import { FaqComponent } from './faq/faq.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductComponent } from './product/product.component';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        NgbModule
    ],
    declarations: [ ClientComponent, TopproComponent, BlogcateComponent, BloglistComponent, BlogComponent, FaqComponent, ProductlistComponent, ProductComponent ],
    exports:[ ClientComponent ],
    providers: []
})
export class ClientModule { }
