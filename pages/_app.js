import '../styles/globals.css'
import Layout from "../components/layout";
import { Playfair_Display } from '@next/font/google'

const playfair = Playfair_Display({
    subsets: ['latin']
})

function MyApp({ Component, pageProps }) {
    return (
        <Layout className={playfair.className}>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
