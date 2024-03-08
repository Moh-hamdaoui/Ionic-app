import React from "react";
import { IonGrid, IonRow, IonCol, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, IonLabel, IonImg, IonList, IonItem } from "@ionic/react";
import { getArticleByName } from "../../data/Article";
import { useParams } from "react-router";

const DetailArticle: React.FC = () => {
  const { nom } = useParams<{ nom: string }>();

  const article = getArticleByName(nom);

  if (!article) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Article non trouvé</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonText>
            <p>L'article avec le nom "{nom}" n'a pas été trouvé.</p>
          </IonText>
        </IonContent>
      </IonPage>
    );
  }
    return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>{article.nom}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItem>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonImg src={article.imageUrl} alt={article.nom} />
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonLabel>Description: {article.description}</IonLabel>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonLabel>Prix: {article.prix} </IonLabel>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonList>
          </IonContent>
        </IonPage>
      );
    };
    
    export default DetailArticle;