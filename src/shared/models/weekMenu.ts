export interface WeekMenu {
  ok: boolean
  data: Datum[]
  categories: CategoryClass[]
}

export interface CategoryClass {
  price: number | string
  imageURL: string
  name: string
  active: boolean
  sort: number
  showInApp: boolean
  code: string
}

export interface Datum {
  name: string
  days: Day[]
  showInApp?: boolean
  family: string
  value: string
}

export interface Day {
  prods: Prod[]
  name: Name
}

export enum Name {
  Ju = 'ju',
  Lu = 'lu',
  Ma = 'ma',
  Mi = 'mi',
  Vi = 'vi',
}

export interface Prod {
  id: string
  package: Package
  cost: number
  description: string
  project: string
  active: boolean
  type: ProdType
  duration: number
  createdAt?: CreatedAt
  createdBy?: string
  chefwords: string
  family: string[]
  category: string
  inc_recipes: string[]
  total: number
  nutritional: Nutritional
  recipes_extra: Recipe[]
  recipes_uniques: Recipe[]
  recipes_principal: Recipe[]
  recipes_accompaniment: Recipe[]
  name: string
  owner?: string
  rating?: Rating
  imageList: ImageList[]
}

export interface CreatedAt {
  _seconds: number
  _nanoseconds: number
}

export interface ImageList {
  size: number
  name: string
  downloadURL: string
  type: ImageListType
}

export enum ImageListType {
  ImageJPEG = 'image/jpeg',
  ImagePNG = 'image/png',
}

export interface Nutritional {
  Kcal: number
  Cho: number
  Sodio: number
  Lip: number
  Pro: number
}

export enum Package {
  Ca1000 = 'CA1000',
  Ca1300 = 'CA1300',
  Eh = 'EH',
  Empty = '',
}

export interface Rating {
  size: number | null | string
  numQualify: number
  tasty: number | null | string
}

export interface Recipe {
  id: string
  code: string
  portion: number | null
  active: boolean
  type: RecipesType
  steps: RecipesStep[]
  duration: number | string
  difficulty: number
  name: string
  owner?: string
  nutritional: Nutritional
  cost: number
  ingredients: Ingredient[]
  totals: Totals
  inc_ingredients: string[]
  dyn: boolean | null
}

export interface Ingredient {
  id: string
  unitWeight: UnitWeightEnum | number
  code: string
  active: boolean
  Cho: number | null
  Sodio: number
  Pro: number | null
  Lip: number | null
  measure: Measure | null
  lost: number | null
  name: string
  brand: Brand | null
  inc_recipe?: any[]
  owner?: string
  cost: number
  Kcal: number
  cooked_net: number
  gross: string
  performance: number
  raw_net: number
  costReduced?: number
  unitReduced?: boolean
  boughtWeight?: number
}

export enum Brand {
  BrandGenerico = 'generico',
  BrandNo = 'no',
  Colun = 'Colun',
  Empty = '',
  FrutosTayen = 'Frutos Tayen',
  Generica = 'generica',
  Generico = 'Generico',
  Genérica = 'Genérica',
  Genérico = 'genérico',
  Gourmet = 'GOURMET',
  No = 'NO',
  NotMayo = 'NOT MAYO',
  Surlat = 'surlat',
  Usda = '(USDA)',
  Wasil = 'WASIL',
}

export enum Measure {
  Kg = 'kg',
  Lt = 'lt',
  Un = 'un',
}

export enum UnitWeightEnum {
  The100 = ' 100',
  The170 = ' 170',
  The200 = ' 200',
  The205 = ' 205',
  The250 = ' 250',
  The30 = ' 30',
  The400 = ' 400',
  The45 = ' 45',
  The500 = ' 500',
  The60 = ' 60',
}

export interface RecipesStep {
  equipment: Equipment
  temperature: number | string
  time: number | null
  detail: string
}

export enum Equipment {
  An = 'AN',
  Ho = 'HO',
  Na = 'NA',
  Pl = 'PL',
}

export interface Totals {
  t_raw_net: number
  t_cooked_net: number
  t_gross: number
}

export enum RecipesType {
  AC = 'AC',
  Ad = 'AD',
  PR = 'PR',
  Un = 'UN',
}

export enum ProdType {
  Co = 'CO',
  Unf = 'UNF',
  Unv = 'UNV',
}
