import { createTheme } from '@mui/material/styles'
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
  const emotionTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))
  return emotionTags
}

const theme = createTheme({
  palette: {
    mode: 'dark'
  },
  typography: {
    fontSize: 12,
    fontFamily: '"Roboto Mono", monospace',
    fontWeightLight: 300, // Design Guide Typography 'Light'
    fontWeightRegular: 400, // Design Guide Typography 'Regular'
    fontWeightMedium: 500, // Design Guide Typography 'Semibold'
    fontWeightBold: 600 // Design Guide Typography 'Semibold' - applies to <strong> and <b> tags
  }
})

export { theme, createEmotionCache, createEmotionTags }
