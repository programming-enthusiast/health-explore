import '../assets/styles/global.css'
import Layout from "../components/Layout"
import NextNprogress from "nextjs-progressbar"
import { SWRConfig } from "swr"
import fetch from "../lib/fetch"
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addLocale(en)

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
        value={{
          fetcher: fetch,
          onError: (err) => {
            console.error(err)
          },
        }}
      >
      <Layout user={pageProps.user}>
        <Component {...pageProps} />
        <NextNprogress color="#1c64f2" options={{ showSpinner: false }} />
      </Layout>
    </SWRConfig>
  )
}

export default MyApp
