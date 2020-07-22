import React from 'react'
import { IonCard,IonCardHeader, IonCardTitle, IonCardContent
} from '@ionic/react'

 function BiorhythmCard() {
  return (
    <IonCard className='ion-text-center'>
      <IonCardHeader>
        <IonCardTitle>18 Feb 2020</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>Physical: 83%</p>
        <p>Emotional: 23%</p>
        <p>Intellectual: 55%</p>

      </IonCardContent>
    </IonCard>
  )
}

export default BiorhythmCard;
