import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { appRouting } from './app-routing.module';
import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthService } from './services/auth/auth.service';
import { HeaderHomeComponent } from './components/header-home/header-home.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { BodyPostComponent } from './components/body-post/body-post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HeaderHomeComponent,
    CreatePostComponent,
    BodyPostComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
// faltaria archivo donde estan metodos de firebase
export class AppModule { }
