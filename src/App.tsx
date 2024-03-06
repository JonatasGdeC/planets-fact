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
import { colors, EstiloGlobal } from './styles'

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
      element: (
        <>
          <Header colorPlanet={colors.emerald} />
          <InfoPlanet planet={Mecury} colorPlanet={colors.emerald} />
        </>
      )
    },
    {
      path: '/venus',
      element: (
        <>
          <Header colorPlanet={colors.yellow} />
          <InfoPlanet planet={Venus} colorPlanet={colors.yellow} />
        </>
      )
    },
    {
      path: '/earth',
      element: (
        <>
          <Header colorPlanet={colors.purple} />
          <InfoPlanet planet={Earth} colorPlanet={colors.purple} />
        </>
      )
    },
    {
      path: '/mars',
      element: (
        <>
          <Header colorPlanet={colors.darkRed} />
          <InfoPlanet planet={Mars} colorPlanet={colors.darkRed} />
        </>
      )
    },
    {
      path: '/jupiter',
      element: (
        <>
          <Header colorPlanet={colors.red} />
          <InfoPlanet planet={Jupiter} colorPlanet={colors.red} />
        </>
      )
    },
    {
      path: '/saturn',
      element: (
        <>
          <Header colorPlanet={colors.orange} />
          <InfoPlanet planet={Saturn} colorPlanet={colors.orange} />
        </>
      )
    },
    {
      path: '/uranus',
      element: (
        <>
          <Header colorPlanet={colors.greenWater} />
          <InfoPlanet planet={Uranus} colorPlanet={colors.greenWater} />
        </>
      )
    },
    {
      path: '/neptune',
      element: (
        <>
          <Header colorPlanet={colors.blue} />
          <InfoPlanet planet={Neptune} colorPlanet={colors.blue} />
        </>
      )
    }
  ])

  return (
    <>
      <EstiloGlobal />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
