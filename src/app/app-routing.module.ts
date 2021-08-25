import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';


//Guards
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';


// Two arrow functions from 
//https://github.com/angular/angularfire/blob/master/docs/auth/router-guards.md
// First says to redirect to SignIn
// Second says to redirect to home
const redirectUnauthorizedToSignIn = () => redirectUnauthorizedTo(['signIn']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']);

// canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToHome }
// canActivate is Common for applying guard and data says ki if not authoried to kaha bhejnaa 
const routes: Routes = [
  {path:'signIn',component:SignInComponent,canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectLoggedInToHome }},
  {path:'signUp',component:SignUpComponent},
  {path:'error',component:PagenotfoundComponent},
  {path:'', component:HomeComponent ,canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToSignIn }},
  {path:'**', redirectTo:'/error',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
