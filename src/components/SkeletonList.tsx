import {
  IonAvatar,
  IonItem,
  IonLabel,
  IonList,
  IonSkeletonText
} from '@ionic/react'

export default function SkeletonList (): JSX.Element {
  return (
    <IonList>
      <IonItem>
        <IonAvatar slot="start" style={{ backgroundColor: '#ccc' }}></IonAvatar>
        <IonLabel>
          <h3>
            <IonSkeletonText
              animated
              style={{ width: '70%' }}
            ></IonSkeletonText>
          </h3>
          <h4>
            <IonSkeletonText
              animated
              style={{ width: '40%' }}
            ></IonSkeletonText>
          </h4>
          <p>
            <IonSkeletonText
              animated
              style={{ width: '20%' }}
            ></IonSkeletonText>
          </p>
          <p>
            <IonSkeletonText
              animated
              style={{ width: '60%' }}
            ></IonSkeletonText>
          </p>
        </IonLabel>
        <span slot="end" className="ion-text-right">
          <p className="ion-no-margin">
            <IonSkeletonText
              animated
              style={{ width: '50px' }}
            ></IonSkeletonText>
          </p>
          <IonSkeletonText animated style={{ width: '30%' }}></IonSkeletonText>
        </span>
      </IonItem>
    </IonList>
  )
}
