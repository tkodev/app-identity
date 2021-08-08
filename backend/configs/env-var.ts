// app vars
const MODE = process.env.NODE_ENV || 'development'

// contentful vars
const CONTENTFUL_TOKEN = process.env.CONTENTFUL_TOKEN || ''
const CONTENTFUL_SPACE = process.env.CONTENTFUL_SPACE || ''
const CONTENTFUL_ENV = process.env.CONTENTFUL_ENV || 'main'
const CONTENTFUL_SOURCE = process.env.CONTENTFUL_SOURCE || 'cdn.contentful.com'

// export
export {
  MODE,
  CONTENTFUL_TOKEN,
  CONTENTFUL_SPACE,
  CONTENTFUL_ENV,
  CONTENTFUL_SOURCE
}
