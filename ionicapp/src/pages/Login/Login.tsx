import React from "react";
import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonText, IonToolbar, IonTitle } from "@ionic/react";
import './Login.css'; 

const Login: React.FC = () => {
  return (
    <IonPage className="login-page"> 
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="center">
        <div className="login-container"> 
          <IonText>
            <h1>Veillez se connecter : </h1> 
          </IonText>
          <IonInput className="custom-input" placeholder="Email"></IonInput> 
          <IonInput className="custom-input" placeholder="Mot de passe" type="password"></IonInput> 
          <IonButton className="custom-button" routerLink="./profil">Se connecter</IonButton> 
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
