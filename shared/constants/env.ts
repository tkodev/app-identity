const CONTENTFUL_HOST = String(process.env.CONTENTFUL_HOST ?? '') || 'cdn.contentful.com'
const CONTENTFUL_SPACE = String(process.env.CONTENTFUL_SPACE ?? '') || ''
const CONTENTFUL_ENV = String(process.env.CONTENTFUL_ENV ?? '') || 'main'
const CONTENTFUL_TOKEN = String(process.env.CONTENTFUL_TOKEN ?? '') || ''
const CONTENTFUL_ENTRIES_LIMIT = Number(process.env.CONTENTFUL_ENTRIES_LIMIT) || 10
const CONTENTFUL_MAX_DEPTH = Number(process.env.CONTENTFUL_MAX_DEPTH) || 1000

export {
  CONTENTFUL_HOST,
  CONTENTFUL_SPACE,
  CONTENTFUL_ENV,
  CONTENTFUL_TOKEN,
  CONTENTFUL_ENTRIES_LIMIT,
  CONTENTFUL_MAX_DEPTH
}
