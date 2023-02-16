import { CSSProperties } from 'react'

export interface ProductLine {
  description: string
  quantity: string
  rate: string
  gst: string
}

export interface Invoice {
  logo: string
  logoWidth: number
  // upi: string
  // upiWidth: number
  title: string
  companyName: string
  name: string
  phone: string
  mail: string
  companyAddress: string
  companyAddress2: string
  companyCountry: string

  billTo: string
  clientName: string
  clientPhone: string
  clientMail: string
  clientAddress: string
  clientAddress2: string
  clientCountry: string

  invoiceTitleLabel: string
  invoiceGSTINLabel: string
  invoiceTitle: string
  invoiceGSTIN: string
  invoiceDateLabel: string
  invoiceDate: string
  invoiceDueDateLabel: string
  invoiceDueDate: string

  productLineDescription: string
  productLineQuantity: string
  productLineQuantityRate: string
  productLineQuantityAmount: string
  productLineGST: string

  productLines: ProductLine[]

  subTotalLabel: string
  sgstLabel: string
  cgstLabel: string
  roundLabel: string

  totalLabel: string
  currency: string

  notesLabel: string
  notes: string
  termLabel: string
  term: string
  payLabel: string
  pay: string
}

export interface CSSClasses {
  [key: string]: CSSProperties
}
