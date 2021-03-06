import {RechercheOrphelinComponent} from './shared/components/recherche-orphelin/recherche-orphelin.component';
import {RechercheVeuveComponent} from './shared/components/recherche-veuve/recherche-veuve.component';
import {AjouterOrphelinComponent} from './shared/components/ajouter-orphelin/ajouter-orphelin.component';
import {AjouterVeuveComponent} from './shared/components/ajouter-veuve/ajouter-veuve.component';
import {AjouterDonneurComponent} from './shared/components/ajouter-donneur/ajouter-donneur.component';
import {VerserTransactionComponent} from './shared/components/verser-transaction/verser-transaction.component';

export const menuRouterConfig = [
  {
    path: 'menu',
    children: [
      {path: '', component: RechercheOrphelinComponent},
  {path: 'rechercheVeuve', component: RechercheVeuveComponent},
  {path: 'ajoutOrphelin', component: AjouterOrphelinComponent},
  {path: 'ajouter Veuve', component: AjouterVeuveComponent},
  {path: 'ajouterDonneur', component: AjouterDonneurComponent},
  {path: 'verserTransaction', component: VerserTransactionComponent}]
}
];

