import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime,
} from '@ionic/react';
import React, {useState} from 'react';
import BiorhythmCard from './components/BiorhythmCard'
import {useLocalStorage} from './hooks'

function App() {
  const [dob, setDob] = useLocalStorage('dob','');
  const [targetDate, setTargetDate] = useState(new Date().toISOString());

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
            </IonToolbar>
              </IonHeader>
                <IonContent className="ion-padding">
                    {dob &&
                      <BiorhythmCard dob={dob} targetDate={targetDate}/>
                    }
                  <IonItem>
                    <IonLabel position="fixed">Date of Birth: </IonLabel>
                    <IonDatetime
                    displayFormat="D MMM YYYY"
                      value={dob}
                      onIonChange={(event)=> setDob(event.detail.value)}
                      />
                  </IonItem>

                  <IonItem>
                    <IonLabel position="fixed">Traget Date: </IonLabel>
                    <IonDatetime
                      displayFormat="D MMM YYYY"
                      value={targetDate}
                      onIonChange={(event)=> setTargetDate(event.detail.value)}
                      />
                  </IonItem>
          </IonContent>
        </IonApp>
      );
    }

export default App;
