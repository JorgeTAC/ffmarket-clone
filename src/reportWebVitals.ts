import { ReportHandler } from 'web-vitals'

type ReportWebVitals = (onPerfEntry?: ReportHandler) => void
const reportWebVitals: ReportWebVitals = (onPerfEntry?: ReportHandler) => {
  if ((onPerfEntry != null) && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    })
  }
}

export default reportWebVitals
