import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonToolbar
} from '@ionic/react'
import './Products.css'
import { cartOutline, arrowBackOutline } from 'ionicons/icons'
import { useEffect, useState } from 'react'
import { getWeekMenu } from '../../shared/services/weekMenu'
import DaysSelector from '../../components/DaysSelector'
import ProviderData from '../../components/ProviderData'
import SkeletonList from '../../components/SkeletonList'
import { Day, Family, SubFamily, Week } from '../../shared/Days'
import { CategoryClass, Datum, Prod } from '../../shared/models/weekMenu'

const Products: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [week, setWeek] = useState([...Week])
  const [subFamilies, setSubFamilies] = useState<Datum[]>([])
  const [categories, setCategories] = useState<CategoryClass[]>([])
  const [selectedDay, setSelectedDay] = useState<Day>(week[0])

  const handleClick = (day: Day): void => {
    console.log('click', day)

    if (day.active) {
      return
    }
    const newDays = week.map((d) => {
      if (d.value === day.value) {
        return { ...d, active: true }
      }
      return { ...d, active: false }
    })

    setWeek(newDays)
  }

  useEffect(() => {
    const getWeekMenuData = async (): Promise<void> => {
      const response = await getWeekMenu()
      setSubFamilies(response.data)
      setCategories(response.categories)
      setLoading(false)
    }
    getWeekMenuData().catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    if ((categories.length === 0) || (subFamilies.length === 0)) { return }

    const newWeek = week.map((day) => {
      const families = categories.map<Family>(({ name, price, code }) => {
        const newSubFamilies: SubFamily[] = subFamilies.filter((subFamily) => {
          return subFamily.family === code
        }).map((subFamily) => {
          subFamily.days = subFamily.days.filter((d) => {
            return day.value === d.name
          })

          console.log(day, { subFamily, day })

          const products = subFamily.days.map((d) => d.prods[0]).filter(Boolean)

          return {
            family: subFamily.family,
            name: subFamily.name,
            value: subFamily.value,
            products
          }
        })

        const products = newSubFamilies.reduce((acc: Prod[], subFamily) => {
          const setProds = new Set(acc.map((p) => p.id))
          return [...acc, ...subFamily.products.filter((p) => !setProds.has(p.id))]
        }, [])

        return {
          name,
          price,
          code,
          subFamilies: newSubFamilies,
          products
        }
      })

      return { ...day, categories: families.filter((f) => f.products.length > 0) }
    })

    setWeek(newWeek)
  }, [categories, subFamilies])

  useEffect(() => {
    console.log('week', week)

    const selectedDay = week.find((day) => day.active)
    if ((selectedDay == null) || selectedDay?.categories.length === 0) {
      return
    }
    setSelectedDay(selectedDay)
  }, [week])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <section className="toolbar">
            <div className="box">
              <IonIcon icon={arrowBackOutline} className="back"></IonIcon>
            </div>
            <div className="box" style={{ color: 'rgba(0, 0, 0, .3)' }}>
              Smart Fridge
            </div>
            <div className="box">
              <div className="cart">
                <span className="badge" style={{ color: 'white' }}>
                  0
                </span>
                <IonIcon icon={cartOutline}></IonIcon>
              </div>
            </div>
          </section>
        </IonToolbar>

        <DaysSelector handleClick={handleClick} week={week} />
      </IonHeader>
      <IonContent fullscreen>
        <main className="content">
          {loading && [0, 1, 2].map((_, index) => <SkeletonList key={index} />)}

          {!loading && (categories.length > 0) && (
            <ProviderData categories={categories} selectedDay={selectedDay}/>
          )}
        </main>
      </IonContent>
    </IonPage>
  )
}

export default Products
