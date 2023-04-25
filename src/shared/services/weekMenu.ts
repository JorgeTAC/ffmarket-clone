import { WeekMenu } from '../models/weekMenu'

const URL_WEEK_MENU =
  'https://us-central1-irp-system.cloudfunctions.net/weekMenuFitfood'

export async function getWeekMenu (): Promise<WeekMenu> {
  return await fetch(URL_WEEK_MENU, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      company: 'NeozyuxJrPPNiwkwiPfy',
      week: 'default'
    })
  })
    .then(async (response) => await (response.json() as Promise<WeekMenu>))
    .then((data) => data)
}
