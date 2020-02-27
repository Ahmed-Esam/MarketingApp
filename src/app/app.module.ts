import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/login/login.component';
import { SignupComponent } from './layout/signup/signup.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './Home/home/home.component';

const appRoutes: Routes = [
  
  { path: 'Signup', component: SignupComponent },
  { path: 'Login',  component: LoginComponent },
  { path: '',  component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp( {
      apiKey: "AIzaSyBSoWuqVmGPpuTCScBZuypOWA0eGNBb4To",
      authDomain: "angularapp-e0b9e.firebaseapp.com",
      databaseURL: "https://angularapp-e0b9e.firebaseio.com",
      projectId: "angularapp-e0b9e",
      storageBucket: "angularapp-e0b9e.appspot.com",
      messagingSenderId: "98377818961",
      appId: "1:98377818961:web:c8e5424dce0db697f5a970",
      measurementId: "G-NV8XS25Z95"
    }),
    AngularFireAuthModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
