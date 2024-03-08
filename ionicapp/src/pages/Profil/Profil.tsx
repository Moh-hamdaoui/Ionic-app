import React from "react";
import {IonIcon, IonAvatar, IonContent, IonHeader, IonInput, IonPage, IonText, IonToolbar, IonTitle, IonButton } from "@ionic/react";
import './Profil.css'; 
import  { personCircleOutline, calendarOutline, callOutline, logoInstagram, mailOutline, keyOutline } from 'ionicons/icons'; 


const Profil: React.FC = () => {
    return (
      <IonPage>
        <IonHeader className="container">
            <div>
              <h1>MOHAMMED HAMDAOUI</h1>
            </div>
            <div>
              <IonAvatar>
                <IonIcon icon={personCircleOutline} style={{ fontSize: '100px', color: 'var(--ion-color-primary)' }} />
              </IonAvatar>
            </div>
        </IonHeader>
        <IonContent>
          <div className="form-profil">
            <IonInput className="custom-input" placeholder="MOHAMMED HAMDAOUI">
              <IonIcon icon={personCircleOutline} slot="start" />
            </IonInput>
            <IonInput className="custom-input" placeholder="Birthday">
              <IonIcon icon={calendarOutline} slot="start" />
            </IonInput>
            <IonInput className="custom-input" placeholder="818 123 4567">
              <IonIcon icon={callOutline} slot="start" />
            </IonInput>
            <IonInput className="custom-input" placeholder="Instagram account">
              <IonIcon icon={logoInstagram} slot="start" />
            </IonInput>
            <IonInput className="custom-input" placeholder="info@email.com">
              <IonIcon icon={mailOutline} slot="start" />
            </IonInput>
            <IonInput className="custom-input" placeholder="Password" type="password">
              <IonIcon icon={keyOutline} slot="start" />
            </IonInput>
          </div>
          <div className="button-container">
            <IonButton className="button-edite" style={{ color: '#751f85' }}>
              Edit profile
            </IonButton>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Profil;