import { IonIcon } from '@ionic/react'
import { calendarOutline, checkmarkOutline } from 'ionicons/icons'
import { Day } from '../shared/Days'
import { CategoryClass } from '../shared/models/weekMenu'
import { moneyCLP } from '../shared/utils/utils'

interface Props {
  categories: CategoryClass[]
  selectedDay: Day
}

const ProviderData: React.FC<Props> = ({ categories, selectedDay }) => {
  return (
    <>
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
            <IonIcon icon={calendarOutline} className="md hydrated"></IonIcon>
            PIDE AHORA PARA EL mar. 21
          </span>
        </div>
      </section>

      <section className="tabs">
        {categories.map((category) => (
          <div className="tabs-item" key={category.code}>
            <div>
              <div className="check">
                <IonIcon icon={checkmarkOutline} ></IonIcon>
              </div>
              <img src={category.imageURL} alt={category.name} />
              <span>{category.name}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="products">
        {
          selectedDay.categories.map((category) => (
            <div key={category.code + category.name}>
              <label>{category.name}</label>
              <ul>
                {
                  category.products.map((product) => (
                    <li key={product.id}>
                      <img className="img" src={ product.imageList[0].downloadURL } alt={product.name} />
                      <div className="info">
                        <p className="name">{product.name}</p>
                        <p className="price">{moneyCLP(Number(category.price))}</p>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </section>

    </>
  )
}

export default ProviderData
