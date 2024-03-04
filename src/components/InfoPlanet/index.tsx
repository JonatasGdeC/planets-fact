import { useState } from 'react'
import mercury from '../../assets/planets-images/mercury.png'
import mercuryInternal from '../../assets/planets-images/mercury-internal.png'
import mercuryGeology from '../../assets/planets-images/mercury-geology.png'

import * as S from './styles'

const InfoPlanet = () => {
  const [overview, setOverview] = useState(true)
  const [internal, setInternal] = useState(false)
  const [geology, setGeology] = useState(false)

  const Buttons = () => {
    return (
      <>
        <button
          className={overview ? 'is--active' : ''}
          onClick={() => {
            setOverview(true), setInternal(false), setGeology(false)
          }}
        >
          <span>01</span>
          <p>Overview</p>
        </button>
        <button
          className={internal ? 'is--active' : ''}
          onClick={() => {
            setOverview(false), setInternal(true), setGeology(false)
          }}
        >
          <span>02</span>
          <p>Internal Structure</p>
        </button>
        <button
          className={geology ? 'is--active' : ''}
          onClick={() => {
            setOverview(false), setInternal(false), setGeology(true)
          }}
        >
          <span>03</span>
          <p>Surface Geology</p>
        </button>
      </>
    )
  }

  return (
    <>
      <S.ButtonsHeader>
        <Buttons />
      </S.ButtonsHeader>
      <S.Infos>
        <S.ImgPlanet>
          <div>
            <img className="planet" src={mercury} alt="Mercury" />
            <img
              className={internal ? 'internal' : 'is--close'}
              src={mercuryInternal}
              alt=""
            />
            <img
              className={geology ? 'geology' : 'is--close'}
              src={mercuryGeology}
              alt=""
            />
          </div>
        </S.ImgPlanet>
        <S.InfosPlanet>
          <div>
            <h2>Mercury</h2>
            <p className="description">
              Mercury is the smallest planet in the Solar System and the closest
              to the Sun. Its orbit around the Sun takes 87.97 Earth days, the
              shortest of all the Suns planets. Mercury is one of four
              terrestrial planets in the Solar System, and is a rocky body like
              Earth.
            </p>
            <p className="source">
              Source : <a href="#">Wikipedia</a>
            </p>
          </div>
          <S.Buttons>
            <Buttons />
          </S.Buttons>
        </S.InfosPlanet>
      </S.Infos>
      <S.Description>
        <S.Card>
          <h3>Rotation Time</h3>
          <p>58.6 days</p>
        </S.Card>
        <S.Card>
          <h3>Revolution Time</h3>
          <p>87.97 days</p>
        </S.Card>
        <S.Card>
          <h3>Radius</h3>
          <p>2,439.7 km</p>
        </S.Card>
        <S.Card>
          <h3>Average Temp</h3>
          <p>430 °C</p>
        </S.Card>
      </S.Description>
    </>
  )
}

export default InfoPlanet
