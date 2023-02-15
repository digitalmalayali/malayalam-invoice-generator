import { CSSClasses } from '../data/types'

const colorDark = '#222'
const colorDark2 = '#666'
const colorGray = '#e3e3e3'
const colorWhite = '#fff'
const colorPersian = '#371982'
const colorLightGreen = '#97f88a'
const colorBlue = '#6c64e2'

const styles: CSSClasses = {
  dark: {
    color: colorDark,
  },

  white: {
    color: colorWhite,
  },

  'bg-dark': {
    backgroundColor: colorDark2,
  },

  'bg-blue': {
    backgroundColor: colorBlue,
  },

  'bg-gray': {
    backgroundColor: colorGray,
  },

  'bg-persian-indigo': {
    backgroundColor: colorPersian,
  },

  'bg-light-green': {
    backgroundColor: colorLightGreen,
  },

  flex: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },

  'w-auto': {
    flex: 1,
    paddingRight: '8px',
  },

  'ml-30': {
    flex: 1,
  },

  'w-100': {
    width: '100%',
  },

  'w-50': {
    width: '50%',
  },

  'w-55': {
    width: '55%',
  },

  'w-45': {
    width: '45%',
  },

  'w-60': {
    width: '60%',
  },

  'w-40': {
    width: '40%',
  },

  'w-48': {
    width: '48%',
    borderRight: `1px solid ${colorGray}`,
  },

  'w-17': {
    width: '17%',
    borderRight: `1px solid ${colorGray}`,
  },

  'w-18': {
    width: '18%',
    borderRight: `1px solid ${colorGray}`,
  },

  row: {
    borderBottom: `1px solid ${colorGray}`,
    borderLeft: `1px solid ${colorGray}`,
  },

  'mt-40': {
    marginTop: '40px',
  },

  'mt-30': {
    marginTop: '30px',
  },

  'mt-20': {
    marginTop: '20px',
  },

  'mt-10': {
    marginTop: '10px',
  },

  'mb-5': {
    marginBottom: '5px',
  },

  'p-4-8': {
    padding: '4px 8px',
  },

  'p-5': {
    padding: '5px',
  },

  'pb-10': {
    paddingBottom: '10px',
  },

  right: {
    textAlign: 'right',
  },

  bold: {
    fontWeight: 'bold',
  },

  'fs-20': {
    fontSize: '20px',
  },

  'fs-30': {
    fontSize: '30px',
  },

  'fs-45': {
    fontSize: '45px',
  },

  page: {
    fontFamily: 'Anek Malayalam',
    fontSize: '13px',
    color: '#555',
    padding: '40px 35px',
  },

  span: {
    padding: '4px 12px 4px 0',
  },

  logo: {
    display: 'block',
  },
}

export default styles
