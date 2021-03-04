import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthenticationComponent} from './shared/components/authentication/authentication.component';
import {MainComponent} from './layout/main/main.component';

const routes: Routes = [
  {path: 'signIn', pathMatch: 'full', component: AuthenticationComponent},
  {path: 'main', component: MainComponent},
  {path: '', redirectTo: 'signIn', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
