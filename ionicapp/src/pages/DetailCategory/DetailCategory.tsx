import React from "react";
import { IonGrid, IonRow, IonCol, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, IonLabel, IonImg, IonList, IonItem } from "@ionic/react";
import { getCategorieById } from "../../data/Categorie";
import { getArticleByCategorie } from "../../data/Article";
import { useParams } from "react-router";

const DetailCategory: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const category = getCategorieById(parseInt(id, 10))
  const Articles = getArticleByCategorie(parseInt(id, 10));
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{category.nom}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
            {Articles.map((acticle) => {
                  return <>
                    <IonItem  routerLink={'/detailArticle/' + acticle.nom}>
                        <IonGrid>
                            <IonCol>
                                <IonRow>
                                    <h2>{acticle.nom}</h2>
                                </IonRow>
                                <IonRow>
                                    <p>{acticle.prix}</p>
                                </IonRow>
                            </IonCol>
                        </IonGrid>
                    </IonItem>
                  </>
            })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default DetailCategory;