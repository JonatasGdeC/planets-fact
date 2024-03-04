import Header from './components/Header'
import InfoPlanet from './components/InfoPlanet'
import { EstiloGlobal } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <div className="container">
        <InfoPlanet />
      </div>
    </>
  )
}

export default App
