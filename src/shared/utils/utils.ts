
type Money = (value: number) => string

export const moneyCLP: Money = (value: number) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  }).format(value)
}
