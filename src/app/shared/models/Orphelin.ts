export interface Orphelin {
  id: number ;
  CIN: number;
  number;
  dateOuvertureDossier: string;
  nom: string;
  prenom: string;
  dateDeNaissance: string;
  numTel: number;
  adresse: string;
  niveauScolaire: string;
  infoTravail: string;
  revenueMonsuel: number;
  montantAideMonsuelle: number;
  siutationSanitaire: string;
  typeCouvertureSociale: string;
  coutMedicaments: number;
  sexe: string;
  situationConjugale: string;
  etudie: boolean;
  parraine: boolean;
}
