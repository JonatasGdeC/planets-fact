import mercury from '../../assets/planets-images/mercury.png'

import * as S from './styles'

const InfoPlanet = () => {
  return (
    <>
      <S.Infos>
        <S.ImgPlanet>
          <img src={mercury} alt="Mercury" />
        </S.ImgPlanet>
        <S.InfosPlanet>
          <h2>Mercury</h2>
          <p className="description">
            Mercury is the smallest planet in the Solar System and the closest
            to the Sun. Its orbit around the Sun takes 87.97 Earth days, the
            shortest of all the Suns planets. Mercury is one of four terrestrial
            planets in the Solar System, and is a rocky body like Earth.
          </p>
          <p className="source">
            Source : <a href="#">Wikipedia</a>
          </p>
          <S.Buttons>
            <button>
              <span>01</span>
              <p>Overview</p>
            </button>
            <button>
              <span>02</span>
              <p>Internal Structure</p>
            </button>
            <button>
              <span>03</span>
              <p>Surface Geology</p>
            </button>
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
