import { CategoryClass, Datum, Prod } from './models/weekMenu'

export interface SubFamily extends Pick<Datum, 'family' | 'value' | 'name'> {
  products: Prod[]
}

export interface Family extends Pick<CategoryClass, 'name' | 'price' | 'code' > {
  subFamilies: SubFamily[]
  products: Prod[]
}

export interface Day {
  value: string
  label: string
  active: boolean
  categories: Family[]
}

export const Week: Day[] = [
  { value: 'lu', label: 'Lunes', active: true, categories: [] },
  { value: 'ma', label: 'Martes', active: false, categories: [] },
  { value: 'mi', label: 'Miércoles', active: false, categories: [] },
  { value: 'ju', label: 'Jueves', active: false, categories: [] },
  { value: 'vi', label: 'Viernes', active: false, categories: [] }
]
