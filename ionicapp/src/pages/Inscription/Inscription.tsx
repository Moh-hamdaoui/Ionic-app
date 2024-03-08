// Inscription.tsx
import React from "react";
import { IonButton, IonContent, IonHeader, IonInput, IonLabel, IonPage, IonText, IonToolbar } from "@ionic/react";
import './Inscription.css'

const Inscription: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonText class="custom-title">Inscription</IonText>
        </IonToolbar>
      </IonHeader>
      <IonContent class="custom-content">
        <IonText class="custom-text">
          <h1>Pour s'inscrire veuillez remplir le formulaire d'inscription : </h1>
        </IonText>
        <IonLabel class="custom-label">Nom :</IonLabel>
        <IonInput class="custom-input" placeholder="Nom"></IonInput>

        <IonLabel class="custom-label">Prenom :</IonLabel>
        <IonInput class="custom-input" placeholder="Prenom"></IonInput>

        <IonLabel class="custom-label">Date de naissance :</IonLabel>
        <IonInput class="custom-input" placeholder="Email" type="date"></IonInput>

        <IonLabel class="custom-label">Email :</IonLabel>
        <IonInput class="custom-input" placeholder="Email"></IonInput>

        <IonLabel class="custom-label">Mot de passe :</IonLabel>
        <IonInput class="custom-input" placeholder="Mot de passe" type="password"></IonInput>

        <IonLabel class="custom-label">Confirmer le Mot de passe :</IonLabel>
        <IonInput class="custom-input" placeholder="Mot de passe" type="password"></IonInput>

        <IonButton routerLink="./login">
          S'inscrire
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Inscription;
