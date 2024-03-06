import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import InfoPlanet from './components/InfoPlanet'
import { colors } from './styles'

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

const Rotas = () => (
  <Routes>
    <Route
      path="/mercury"
      element={
        <>
          <Header colorPlanet={colors.emerald} />
          <InfoPlanet planet={Mecury} colorPlanet={colors.emerald} />
        </>
      }
    />
    <Route
      path="/venus"
      element={
        <>
          <Header colorPlanet={colors.yellow} />
          <InfoPlanet planet={Venus} colorPlanet={colors.yellow} />
        </>
      }
    />
    <Route
      path="/"
      element={
        <>
          <Header colorPlanet={colors.purple} />
          <InfoPlanet planet={Earth} colorPlanet={colors.purple} />
        </>
      }
    />
    <Route
      path="mars"
      element={
        <>
          <Header colorPlanet={colors.darkRed} />
          <InfoPlanet planet={Mars} colorPlanet={colors.darkRed} />
        </>
      }
    />
    <Route
      path="jupiter"
      element={
        <>
          <Header colorPlanet={colors.red} />
          <InfoPlanet planet={Jupiter} colorPlanet={colors.red} />
        </>
      }
    />
    <Route
      path="saturn"
      element={
        <>
          <Header colorPlanet={colors.orange} />
          <InfoPlanet planet={Saturn} colorPlanet={colors.orange} />
        </>
      }
    />
    <Route
      path="uranus"
      element={
        <>
          <Header colorPlanet={colors.greenWater} />
          <InfoPlanet planet={Uranus} colorPlanet={colors.greenWater} />
        </>
      }
    />
    <Route
      path="neptune"
      element={
        <>
          <Header colorPlanet={colors.blue} />
          <InfoPlanet planet={Neptune} colorPlanet={colors.blue} />
        </>
      }
    />
  </Routes>
)

export default Rotas
