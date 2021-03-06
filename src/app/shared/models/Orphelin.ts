export interface Orphelin {
  id: number ;
  CIN: number;
  number;
  dateOuvertureDossier: Date;
  nom: string;
  prenom: string;
  dateDeNaissanc: Date;
  numTel: number;
  adresse: string;
  niveauScolaire: string;
  typeTravaille: string;
  situationTravaille: string;
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
