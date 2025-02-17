import React from 'react'
import InvoicePage from './components/InvoicePage'
import { Invoice } from './data/types'

function App() {
  const savedInvoice = window.localStorage.getItem('invoiceData')
  let data = null

  try {
    if (savedInvoice) {
      data = JSON.parse(savedInvoice)
    }
  } catch (_e) { }

  const onInvoiceUpdated = (invoice: Invoice) => {
    window.localStorage.setItem('invoiceData', JSON.stringify(invoice))
  }

  return (
    <div className="app">
      <div className="appname">
      <img src="logo192.png" alt="logo"/>
      <h1 className="fs-30 persian-indigo">ബില്ലടിയന്ത്രം</h1>
      </div>
      <InvoicePage data={data} onChange={onInvoiceUpdated} />
    </div>
  )
}

export default App
