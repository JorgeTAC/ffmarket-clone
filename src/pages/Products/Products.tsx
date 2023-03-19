import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import "./Products.css";
import {
  cartOutline,
  arrowBackOutline,
  caretDownOutline,
  calendarOutline,
} from "ionicons/icons";
import { Days } from "../../shared/Days";
import { useState } from "react";

const Products: React.FC = () => {
  const [days, setDays] = useState(Days);
  function handleClick(day: any) {
    console.log("clicked");
    if (day.active) {
      return;
    }
    const newDays = days.map((d) => {
      if (d.value === day.value) {
        return { ...d, active: true };
      }
      return { ...d, active: false };
    });
    setDays(newDays);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <section className="toolbar">
            <div className="box">
              <IonIcon icon={arrowBackOutline} className="back"></IonIcon>
            </div>
            <div className="box" style={{ color: "rgba(0, 0, 0, .3)" }}>
              Smart Fridge
            </div>
            <div className="box">
              {/* <IonIcon
                src="./qr-code-scan.svg"
                name="qr"
                className="qr"
              ></IonIcon> */}
              <div className="cart">
                <span className="badge" style={{ color: "white" }}>
                  0
                </span>
                <IonIcon icon={cartOutline}></IonIcon>
              </div>
            </div>
          </section>
        </IonToolbar>

        <section className="select-month">
          <div className="left">
            Marzo
            <IonIcon icon={caretDownOutline}></IonIcon>
          </div>
          <div className="right">
            <IonIcon icon={calendarOutline}></IonIcon>
            Escoge tú semana y haz tú pedido
          </div>
        </section>

        <section className="calendar with-border">
          {days.map((day) => {
            return (
              <div
                key={day.value}
                className={day.active ? "day selected" : "day"}
                onClick={() => handleClick(day)}
              >
                <span className="name">{day.label}</span>
                <div>
                  <span className="value">{day.value}</span>
                </div>
              </div>
            );
          })}
        </section>
      </IonHeader>
      <IonContent fullscreen>
        <main className="content">
          <section className="provider">
            <img
              alt="Fit Food - Comidas preparadas"
              className="img"
              src="https://firebasestorage.googleapis.com/v0/b/keyu-app.appspot.com/o/providers%2FFIT%20FOOD%202.png?alt=media&amp;token=78ccd686-7177-456e-8a34-b97c1f4c64af"
            />
            <div className="info">
              <p className="name">Fit Food - Comidas preparadas</p>
              <p className="description"> empresa </p>
              <span className="badge">
                <IonIcon
                  icon={calendarOutline}
                  className="md hydrated"
                ></IonIcon>
                PIDE AHORA PARA EL mar. 21
              </span>
            </div>
          </section>
        </main>
      </IonContent>
    </IonPage>
  );
};

export default Products;
