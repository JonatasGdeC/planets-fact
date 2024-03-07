import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import { EstiloGlobal } from './styles'

export type Planet = {
  id: number
  name: string
  planet: {
    text: string
    link: string
  }
  internal: {
    text: string
    link: string
  }
  geology: {
    text: string
    link: string
  }
  imagePlanet: string
  imagePlanet2?: string
  imagePlanet3?: string
  imageInternal: string
  imageGeology: string
  rotation: string
  revolution: string
  radius: number
  temperature: number
}

function App() {
  return (
    <>
      <EstiloGlobal />
      <div className="background-start"></div>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </>
  )
}

export default App
