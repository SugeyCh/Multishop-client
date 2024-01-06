import '@s/_index.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '@r/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
