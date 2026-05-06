import '../styles/globals.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

function ScrollReveal() {
  useScrollReveal()
  return null
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <ScrollReveal />
      <Component {...pageProps} />
    </>
  )
}
