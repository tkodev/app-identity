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
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    button: {
      fontSize: 10,
      letterSpacing: 2.5
    }
  }
})

export { theme, createEmotionCache, createEmotionTags }
