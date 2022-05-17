import { createElement } from 'react'
import createCache from '@emotion/cache'
import { EmotionCache } from '@emotion/react'
import createEmotionServer from '@emotion/server/create-instance'

const createEmotionCache = () => {
  const emotionCache = createCache({ key: 'css', prepend: true })
  return emotionCache
}

const createEmotionTags = (emotionCache: EmotionCache, html: string) => {
  const { extractCriticalToChunks } = createEmotionServer(emotionCache)
  const emotionStyles = extractCriticalToChunks(html)
  const emotionTags = emotionStyles.styles.map(({ key, ids, css }) =>
    createElement('style', {
      'data-emotion': `${key} ${ids.join(' ')}`,
      key: key,
      dangerouslySetInnerHTML: { __html: css }
    })
  )
  return emotionTags
}

export { createEmotionCache, createEmotionTags }
