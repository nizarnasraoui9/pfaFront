import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './shared/components/authentication/authentication.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BodyComponent } from './shared/components/body/body.component';
import { MainComponent } from './layout/main/main.component';
import { AjouterOrphelinComponent } from './shared/components/ajouter-orphelin/ajouter-orphelin.component';
import { AjouterVeuveComponent } from './shared/components/ajouter-veuve/ajouter-veuve.component';
import { ParrainComponent } from './shared/components/parrain/parrain.component';
import { TransactionComponent } from './shared/components/transaction/transaction.component';
import { AjouterDonneurComponent } from './shared/components/ajouter-donneur/ajouter-donneur.component';
import { VerserTransactionComponent } from './shared/components/verser-transaction/verser-transaction.component';
import { RechercheComponent } from './shared/components/recherche/recherche.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AjouterDossierComponent } from './shared/components/ajouter-dossier/ajouter-dossier.component';
import { ViewPersonComponent } from './shared/components/view-person/view-person.component';
import { ViewResearchComponent } from './shared/components/view-research/view-research.component';
import { TransactionHistoriqueComponent } from './shared/components/transaction-historique/transaction-historique.component';
import { AddAdminComponent } from './shared/components/add-admin/add-admin.component';
import { ModificationComponent } from './shared/components/modification/modification.component';
import { ModifyPersonComponent } from './shared/components/modify-person/modify-person.component';
import { TransactionManagementComponent } from './shared/components/transaction-management/transaction-management.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    MainComponent,
    AjouterOrphelinComponent,
    AjouterVeuveComponent,
    ParrainComponent,
    TransactionComponent,
    AjouterDonneurComponent,
    VerserTransactionComponent,
    RechercheComponent,
    AjouterDossierComponent,
    ViewPersonComponent,
    ViewResearchComponent,
    TransactionHistoriqueComponent,
    AddAdminComponent,
    ModificationComponent,
    ModifyPersonComponent,
    TransactionManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
