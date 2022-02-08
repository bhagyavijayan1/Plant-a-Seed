import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { PlantsComponent } from './plants/plants.component';
import { DonateplantComponent} from './donateplant/donateplant.component';
import { ContactComponent } from './contact/contact.component';
import { UserpageComponent } from './userpage/userpage.component';
import { AdoptComponent } from './adopt/adopt.component';
import { AuthGuard } from './auth.guard';
import { UpdatePlantComponent } from './update-plant/update-plant.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DownloadComponent } from './download/download.component';

const routes: Routes = [
 {
  path : '',
  redirectTo : '/',
  pathMatch : 'full'
 },
 {
   path : 'admin',
   component : AdminComponent
 },
 {
   path : 'signup',
   component : SignupComponent
 },
 {
   path : 'login',
   component : LoginComponent
 },
 {
 path : 'portfolio',
 component : PlantsComponent
 },
 {
   path : 'donate',
   component : DonateplantComponent,
   canActivate: [AuthGuard]
 },
 {
   path : 'contact',
   component : ContactComponent
 },
 {
   path: 'user',
   component : UserpageComponent,
   canActivate: [AuthGuard]
 },
 {
   path : 'adopt',
   component : AdoptComponent
 },
 {
   path : 'update/:id',
   component: UpdatePlantComponent
 },
 {
   path : 'about',
   component : AboutComponent
 },
 {
  path : 'notfound',
  component : PagenotfoundComponent
},
{
  path : 'download',
  component : DownloadComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
