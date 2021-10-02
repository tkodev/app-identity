// app vars
const MODE = String(process.env.NODE_ENV) || 'development'

// contentful vars
const CONTENTFUL_TOKEN = String(process.env.CONTENTFUL_TOKEN) || ''
const CONTENTFUL_SPACE = String(process.env.CONTENTFUL_SPACE) || ''
const CONTENTFUL_ENV = String(process.env.CONTENTFUL_ENV) || 'main'
const CONTENTFUL_SOURCE = String(process.env.CONTENTFUL_SOURCE) || 'cdn.contentful.com'

// export
export {
  MODE,
  CONTENTFUL_TOKEN,
  CONTENTFUL_SPACE,
  CONTENTFUL_ENV,
  CONTENTFUL_SOURCE
}
