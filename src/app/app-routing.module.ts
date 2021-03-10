import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './layout/main/main.component';
import {AjouterDonneurComponent} from './shared/components/ajouter-donneur/ajouter-donneur.component';
import {BodyComponent} from './shared/components/body/body.component';
import {RechercheComponent} from './shared/components/recherche/recherche.component';
import {AuthenticationComponent} from './shared/components/authentication/authentication.component';
import {AjouterDossierComponent} from './shared/components/ajouter-dossier/ajouter-dossier.component';
import {AddAdminComponent} from './shared/components/add-admin/add-admin.component';

const routes: Routes = [
  {path: 'signIn', component: AuthenticationComponent},
  {path: 'main', component: MainComponent,
    children: [
      {path: '', redirectTo: 'body', pathMatch: 'full'},
      {path: 'ajouterDossier', component: AjouterDossierComponent},
      {path: 'body', component: BodyComponent},
      {path: 'recherche', component: RechercheComponent},
      {path: 'ajouterDonneur', component: AjouterDonneurComponent},
      {path: 'ajouterAdmin', component: AddAdminComponent}]
  },
  {path: '', redirectTo: 'signIn', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
