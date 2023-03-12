import { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'
import '~/styles/global.css'

const font = Montserrat({
  subsets: ['latin']
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={font.className}>
      <Component {...pageProps} />
    </div>
  )
}

export default App
