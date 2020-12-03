import Header from '../components/generic/Header'
import Sidebar from '../components/generic/Sidebar'
import Footer from '../components/generic/Footer'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <div>

      <Header/>

      <section style={{display: 'flex'}}>

        <Sidebar/>

        <article>
          <Component {...pageProps} />
        </article>

      </section>

      <Footer/>

    </div>
  )
}
