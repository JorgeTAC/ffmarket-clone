import { IonIcon } from '@ionic/react'
import { calendarOutline, caretDownOutline } from 'ionicons/icons'
import { Day } from '../shared/Days'

interface Props {
  handleClick: (day: Day) => void
  week: Day[]
}
const DaysSelector: React.FC<Props> = ({
  handleClick,
  week
}) => {
  return (
    <>
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
        {week.map((day) => {
          return (
            <div
              key={day.value}
              className={day.active ? 'day selected' : 'day'}
              onClick={() => handleClick(day)}
            >
              <span className="name">{day.label}</span>
              <div>
                <span className="value">{day.value}</span>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default DaysSelector
