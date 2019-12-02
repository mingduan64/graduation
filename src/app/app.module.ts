import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { FooterComponent } from './admin/footer/footer.component';
import { ManageaboutComponent } from './admin/manageabout/manageabout.component';
import { ManagecateComponent } from './admin/managecate/managecate.component';
import { NavComponent        } from './client/nav/nav.component';
import { AboutusComponent } from './client/aboutus/aboutus.component';
import { CategoryComponent } from './client/category/category.component';
import { FootComponent } from './client/foot/foot.component';
import { ClientRoutingModule } from './client/client.routing';
import { AdminRoutingModule } from './admin/admin.routing';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { HomepageComponent } from './client/homepage/homepage.component';
import { CommonModule } from '@angular/common';
import { ManagehomeComponent } from './admin/managehome/managehome.component';
import { ManagefaqComponent } from './admin/managefaq/managefaq.component';
import { ManageblogcateComponent } from './admin/manageblogcate/manageblogcate.component';
import { ManageteamComponent } from './admin/manageteam/manageteam.component';
import { ManageclientComponent } from './admin/manageclient/manageclient.component';
import { ManageblogComponent } from './admin/manageblog/manageblog.component';
import { ManageproductComponent } from './admin/manageproduct/manageproduct.component';
import { ManageorderComponent } from './admin/manageorder/manageorder.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomepagecarouselComponent } from './admin/homepagecarousel/homepagecarousel.component';
import { TopsaleComponent } from './admin/topsale/topsale.component';
import { AboutusbackgroundComponent } from './admin/aboutusbackground/aboutusbackground.component';
import { AboutusmethodComponent } from './admin/aboutusmethod/aboutusmethod.component';
import { AboutusadvComponent } from './admin/aboutusadv/aboutusadv.component';
import { OfficeComponent } from './admin/office/office.component';
import { FaqheaderComponent } from './admin/faqheader/faqheader.component';
import { FaqquizComponent } from './admin/faqquiz/faqquiz.component';
import { HcarouselService } from './admin/homepagecarousel/hcarousel.service';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AddhcaComponent } from './admin/addhca/addhca.component';
import { UpdatehcaComponent } from './admin/updatehca/updatehca.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './client/signin/signin.component';
import { SignupComponent } from './client/signup/signup.component';

import { AuthService } from './shared/auth.service';
import { TokenStorage } from './shared/token.storage';
import { FlashMessagesModule } from 'angular2-flash-messages/module';
import { ValidateService } from './shared/validate.service';
import { AuthGuard } from './shared/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CollapseModule } from 'ngx-bootstrap/collapse';





@NgModule({
  declarations: [

    AppComponent,
    AdminComponent,
    ClientComponent,
    NavbarComponent,
    FooterComponent,
    ManageaboutComponent,
    ManagecateComponent,
    NavComponent,
    FootComponent,
    AboutusComponent,
    CategoryComponent,
    SidebarComponent,
    HomepageComponent,
    ManagehomeComponent,
    ManagefaqComponent,
    ManageblogcateComponent,
    ManageteamComponent,
    ManageclientComponent,
    ManageblogComponent,
    ManageproductComponent,
    ManageorderComponent,
    ProfileComponent,
    DashboardComponent,
    HomepagecarouselComponent,
    TopsaleComponent,
    AboutusbackgroundComponent,
    AboutusmethodComponent,
    AboutusadvComponent,
    OfficeComponent,
    FaqheaderComponent,
    FaqquizComponent,
    AddhcaComponent,
    UpdatehcaComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    ClientRoutingModule,
    FlashMessagesModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CollapseModule,
    
    
  ],
  providers: [HcarouselService, AuthService, TokenStorage, ValidateService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
