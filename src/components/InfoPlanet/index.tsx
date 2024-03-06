import { useState } from 'react'
import { Planet } from '../../App'
import * as S from './styles'

type Props = {
  planet: Planet
}

const InfoPlanet = ({ planet }: Props) => {
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
            <img
              className="planet"
              src={planet.imagePlanet}
              alt={planet.name}
            />
            <img
              className={internal ? 'internal' : 'is--close'}
              src={planet.imageInternal}
              alt=""
            />
            <img
              className={geology ? 'geology' : 'is--close'}
              src={planet.imageGeology}
              alt=""
            />
          </div>
        </S.ImgPlanet>
        <S.InfosPlanet>
          <div>
            <h2>{planet.name}</h2>
            <p className="description">{planet.description}</p>
            <p className="source">
              Source : <a href={planet.link}>Wikipedia</a>
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
          <p>{planet.rotation} days</p>
        </S.Card>
        <S.Card>
          <h3>Revolution Time</h3>
          <p>{planet.revolution} days</p>
        </S.Card>
        <S.Card>
          <h3>Radius</h3>
          <p>{planet.radius} km</p>
        </S.Card>
        <S.Card>
          <h3>Average Temp</h3>
          <p>{planet.temperature} °C</p>
        </S.Card>
      </S.Description>
    </>
  )
}

export default InfoPlanet
