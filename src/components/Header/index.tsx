import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'
import { colors } from '../../styles'

type Props = {
  colorPlanet: string
}

const Header = ({ colorPlanet }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const Planets = () => {
    return (
      <>
        <li>
          <div style={{ backgroundColor: `${colors.emerald}` }}></div>
          <Link onClick={() => setMenuOpen(false)} to="/mercury">
            Mercury
          </Link>
        </li>
        <li>
          <div style={{ backgroundColor: `${colors.yellow}` }}></div>
          <Link onClick={() => setMenuOpen(false)} to="/venus">
            Venus
          </Link>
        </li>
        <li>
          <div style={{ backgroundColor: `${colors.purple}` }}></div>
          <Link onClick={() => setMenuOpen(false)} to="/">
            Earth
          </Link>
        </li>
        <li>
          <div style={{ backgroundColor: `${colors.darkRed}` }}></div>
          <Link onClick={() => setMenuOpen(false)} to="/mars">
            Mars
          </Link>
        </li>
        <li>
          <div style={{ backgroundColor: `${colors.red}` }}></div>
          <Link onClick={() => setMenuOpen(false)} to="/jupiter">
            Jupiter
          </Link>
        </li>
        <li>
          <div style={{ backgroundColor: `${colors.orange}` }}></div>
          <Link onClick={() => setMenuOpen(false)} to="/saturn">
            Saturn
          </Link>
        </li>
        <li>
          <div style={{ backgroundColor: `${colors.greenWater}` }}></div>
          <Link onClick={() => setMenuOpen(false)} to="/uranus">
            Uranus
          </Link>
        </li>
        <li>
          <div style={{ backgroundColor: `${colors.blue}` }}></div>
          <Link onClick={() => setMenuOpen(false)} to="/neptune">
            Neptune
          </Link>
        </li>
      </>
    )
  }

  return (
    <>
      <S.Header>
        <S.Title>The Planets</S.Title>
        <S.List colorPlanet={colorPlanet}>
          <Planets />
        </S.List>
        <S.Hamburguer
          className={menuOpen ? 'is--active' : ''}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </S.Hamburguer>
      </S.Header>
      <S.MenuHamburguer className={menuOpen ? 'is--open' : ''}>
        <Planets />
      </S.MenuHamburguer>
    </>
  )
}

export default Header
