import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { PlantService } from './plant.service';
import { AuthGuard } from './auth.guard';
import { NavService } from './nav.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { PlantsComponent } from './plants/plants.component';
import { DonateplantComponent } from './donateplant/donateplant.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { UserpageComponent } from  './userpage/userpage.component';
import { HeaderComponent } from './header/header.component';
import { PlantFilterPipe } from './plant-filter.pipe';
import { AdoptComponent } from './adopt/adopt.component';
import { UpdatePlantComponent } from './update-plant/update-plant.component';
import { HomedetailComponent } from './homedetail/homedetail.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DownloadComponent } from './download/download.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    AdminComponent,
    LoginComponent,
    PlantsComponent,
    DonateplantComponent,
    ContactComponent,
    FooterComponent,
    UserpageComponent,
    HeaderComponent,
    PlantFilterPipe,
    AdoptComponent,
    UpdatePlantComponent,
    HomedetailComponent,
    AboutComponent,
    PagenotfoundComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()

  ],
  providers: [NavService , AuthService, AuthGuard, PlantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
