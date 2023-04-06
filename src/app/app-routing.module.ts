import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdmincheckComponent } from './admincheck/admincheck.component';
import { AdminuserComponent } from './adminuser/adminuser.component';
import { LogoutComponent } from './logout/logout.component';
import { MovieComponent } from './movie/movie.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MoviepageComponent } from './moviepage/moviepage.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisternewuserComponent } from './registernewuser/registernewuser.component';
import { UsercheckComponent } from './usercheck/usercheck.component';
import { UserlistComponent } from './userlist/userlist.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"welcome", component:WelcomeComponent},
  {path:"", component:WelcomeComponent},
  {path:'movie/:id',component:MoviepageComponent},
  {path:'search/:searchItem',component:MovieComponent},
  {path:"adminuser", component:AdminuserComponent},
  {path:'payment', component:PaymentComponent},
  {path:"admin/logout", component:LogoutComponent},
  {path:"usercheck/newuser", component:RegisternewuserComponent},
  {path:"admin", component:AdminComponent},
  {path:"admin/movielist" , component:MovielistComponent},
  {path:"admincheck", component:AdmincheckComponent},
  {path:"usercheck", component:UsercheckComponent},
  {path:"user", component:UserlistComponent},
  {path:"admin/userlist",component:UserlistComponent},
  {path:"movie", component:MovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
