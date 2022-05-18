const NODE_ENV = String(process.env.NODE_ENV || 'development')
const API_HOST = String(process.env.NEXT_PUBLIC_API_HOST || 'http://localhost:3000/api')

const CONTENTFUL_HOST = String(process.env.CONTENTFUL_HOST || 'https://cdn.contentful.com')
const CONTENTFUL_SPACE = String(process.env.CONTENTFUL_SPACE || '1234567890')
const CONTENTFUL_ENV = String(process.env.CONTENTFUL_ENV || 'main')
const CONTENTFUL_TOKEN = String(process.env.CONTENTFUL_TOKEN || '1234567890')
const CONTENTFUL_ENTRIES_LIMIT = Number(process.env.CONTENTFUL_ENTRIES_LIMIT || 1000)
const CONTENTFUL_MAX_DEPTH = Number(process.env.CONTENTFUL_MAX_DEPTH || 10)
const CONTENTFUL_LOCALE = String(process.env.CONTENTFUL_LOCALE || 'en-ca')

export {
  NODE_ENV,
  API_HOST,
  CONTENTFUL_HOST,
  CONTENTFUL_SPACE,
  CONTENTFUL_ENV,
  CONTENTFUL_TOKEN,
  CONTENTFUL_ENTRIES_LIMIT,
  CONTENTFUL_MAX_DEPTH,
  CONTENTFUL_LOCALE
}
