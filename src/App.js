import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime,
  IonCard,
  IonCardTitle,
  IonCardHeader,
  IonCardContent

} from '@ionic/react';
import React, {useState} from 'react';
import BiorhythmCard from './components/BiorhythmCard'

function App() {
  const [ dob, setDob] = useState('');

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

        <IonItem>
        <IonLabel position="floating">Date of Birth: </IonLabel>
        <IonDatetime
        displayFormat="D MMM YYYY"
          value={dob}
          onIonChange={(event)=> setDob(event.detail.value)}
        />
        </IonItem>
        <BiorhythmCard />

        
      </IonContent>
    </IonApp>
  );
}

export default App;
