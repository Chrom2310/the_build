import { GlobalStyle } from './styles/GlobalStyle'

import { Greetings } from './components/Greetings'
import Layout from './components/Layout/Layout'

export function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Greetings /> */}
      <Layout/>
    </>
  )
}