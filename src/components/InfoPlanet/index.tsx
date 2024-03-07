import { useState } from 'react'
import { Planet } from '../../App'
import iconLink from '../../assets/icon-link.png'
import * as S from './styles'

export type PropsPlanet = {
  planet: Planet
  colorPlanet: string
}

const InfoPlanet = ({ planet, colorPlanet }: PropsPlanet) => {
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
          <p className="title-desktop">Internal Structure</p>
          <p className="title-mobile">Structure</p>
        </button>
        <button
          className={geology ? 'is--active' : ''}
          onClick={() => {
            setOverview(false), setInternal(false), setGeology(true)
          }}
        >
          <span>03</span>
          <p className="title-desktop">Surface Geology</p>
          <p className="title-mobile">Surface</p>
        </button>
      </>
    )
  }

  return (
    <>
      <S.ButtonsHeader colorPlanet={colorPlanet}>
        <Buttons />
      </S.ButtonsHeader>
      <div className="container">
        <S.Infos>
          <S.ImgPlanet>
            <div>
              <img className="anel1" src={planet.imagePlanet2} />
              <img
                className="planet"
                src={planet.imagePlanet}
                alt={planet.name}
              />
              <img className="anel2" src={planet.imagePlanet3} />
              <img
                className={internal ? 'internal' : 'is--close'}
                src={planet.imageInternal}
                alt={planet.name}
              />
              <img
                className={geology ? 'geology' : 'is--close'}
                src={planet.imageGeology}
                alt={planet.name}
              />
            </div>
          </S.ImgPlanet>
          <S.InfosPlanet>
            <div>
              <h2>{planet.name}</h2>
              <p className={overview ? 'description' : 'invisible'}>
                {planet.description}
              </p>
              <p className={internal ? 'description' : 'invisible'}>
                {planet.descriptionInternal}
              </p>
              <p className={geology ? 'description' : 'invisible'}>
                {planet.descriptionGeology}
              </p>
              <p className="source">
                Source :
                <a href={planet.link} target="_blank" rel="noreferrer">
                  Wikipedia
                  <img src={iconLink} alt="" />
                </a>
              </p>
            </div>
            <S.Buttons colorPlanet={colorPlanet}>
              <Buttons />
            </S.Buttons>
          </S.InfosPlanet>
        </S.Infos>
        <S.Description>
          <S.Card>
            <h3>Rotation Time</h3>
            <p>{planet.rotation}</p>
          </S.Card>
          <S.Card>
            <h3>Revolution Time</h3>
            <p>{planet.revolution}</p>
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
      </div>
    </>
  )
}

export default InfoPlanet
