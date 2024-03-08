import { IonCol, IonContent, IonGrid, IonHeader, IonList, IonPage, IonSearchbar, IonTitle, IonToolbar, IonRow, IonItem, IonButton, IonImg  } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Home.css';
import { useState } from 'react';
import { getAllCategories } from '../../data/Categorie';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [categories, setCategories] = useState(getAllCategories)
  const [urlImages, setUrlImages] = useState([
  "https://i.pinimg.com/originals/25/33/66/253366149b6be918e2ebde00adc5d818.jpg", 
  "https://img-4.linternaute.com/1znKXjiK4DcdsqEgpnOJxi3AWCA=/1500x/smart/d7ed506e36164b408e98cb749331892e/ccmcms-linternaute/41890510.jpg", 
  "https://www.allibert-trekking.com/iconographie/ef/PA1_atlas.jpeg"
  ])
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonSearchbar placeholder='Rechercher un produit'/>
          <IonGrid>
            <IonRow>
              {categories.map((category) => {
                return <>
                <IonCol>
                  <Link to={"DetailCategory/"+category.id}>
                    {category.nom}
                  </Link>
                </IonCol>
                </>
              })}
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent class='center'>
        <IonList>
          {urlImages.map((image) => {
            return <IonImg src ={image}/>
          })}
        </IonList>
        <IonButton routerLink="./login">Se connecter</IonButton>
        <IonButton routerLink="./inscription">S'inscrire</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
