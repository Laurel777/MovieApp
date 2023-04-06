import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UsercheckComponent } from './usercheck/usercheck.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MovieComponent } from './movie/movie.component';

import { AdmincheckComponent } from './admincheck/admincheck.component';
import { AdminComponent } from './admin/admin.component';
import { AdminuserComponent } from './adminuser/adminuser.component';
import { RegisternewuserComponent } from './registernewuser/registernewuser.component';
import { LogoutComponent } from './logout/logout.component';
import { MovielistComponent } from './movielist/movielist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';
import { MoviepageComponent } from './moviepage/moviepage.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UsercheckComponent,
    WelcomeComponent,
    MovieComponent,
       AdmincheckComponent,
    AdminComponent,
    AdminuserComponent,
    RegisternewuserComponent,
    LogoutComponent,
    MovielistComponent,
    SearchComponent,
    MoviepageComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
