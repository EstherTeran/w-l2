import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  // { path: 'login', component: LoginComponent, canActivate: [SessionGuard]},
  // { path: '', pathMatch: 'full', redirectTo: 'login'},
  // { path: 'signup', component: SignupComponent, canActivate: [SessionGuard]},
  // { path: 'home', component: HomeComponent,  canActivate: [AuthGuard]},
  // { path: 'start', component: LoginComponent},
  // { path: '', pathMatch: 'full', redirectTo: 'start'},
  // { path: 'communities', component: SignupComponent},
  // { path: 'home', component: HomeComponent,  canActivate: [AuthGuard]},
];

NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
});
export const appRouting = RouterModule.forRoot(routes);
