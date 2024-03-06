import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import InfoPlanet from './components/InfoPlanet'
import {
  Mecury,
  Venus,
  Earth,
  Mars,
  Jupiter,
  Saturn,
  Uranus,
  Neptune
} from './mocks/Planets'
import { EstiloGlobal } from './styles'

export type Planet = {
  id: number
  name: string
  description: string
  link: string
  imagePlanet: string
  imageInternal: string
  imageGeology: string
  rotation: number
  revolution: number
  radius: number
  temperature: number
}

function App() {
  const rotas = createBrowserRouter([
    {
      path: '/',
      element: <InfoPlanet planet={Mecury} />
    },
    {
      path: '/venus',
      element: <InfoPlanet planet={Venus} />
    },
    {
      path: '/earth',
      element: <InfoPlanet planet={Earth} />
    },
    {
      path: '/mars',
      element: <InfoPlanet planet={Mars} />
    },
    {
      path: '/jupiter',
      element: <InfoPlanet planet={Jupiter} />
    },
    {
      path: '/saturn',
      element: <InfoPlanet planet={Saturn} />
    },
    {
      path: '/uranus',
      element: <InfoPlanet planet={Uranus} />
    },
    {
      path: '/neptune',
      element: <InfoPlanet planet={Neptune} />
    }
  ])

  return (
    <>
      <EstiloGlobal />
      <Header />
      <div className="container">
        <RouterProvider router={rotas} />
      </div>
    </>
  )
}

export default App
