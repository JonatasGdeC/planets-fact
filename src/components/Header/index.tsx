import { useState } from 'react'
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
          <a onClick={() => setMenuOpen(false)} href="/mercury">
            Mercury
          </a>
        </li>
        <li>
          <div style={{ backgroundColor: `${colors.yellow}` }}></div>
          <a onClick={() => setMenuOpen(false)} href="/venus">
            Venus
          </a>
        </li>
        <li>
          <div style={{ backgroundColor: `${colors.purple}` }}></div>
          <a onClick={() => setMenuOpen(false)} href="/">
            Earth
          </a>
        </li>
        <li>
          <div style={{ backgroundColor: `${colors.darkRed}` }}></div>
          <a onClick={() => setMenuOpen(false)} href="/mars">
            Mars
          </a>
        </li>
        <li>
          <div style={{ backgroundColor: `${colors.red}` }}></div>
          <a onClick={() => setMenuOpen(false)} href="/jupiter">
            Jupiter
          </a>
        </li>
        <li>
          <div style={{ backgroundColor: `${colors.orange}` }}></div>
          <a onClick={() => setMenuOpen(false)} href="/saturn">
            Saturn
          </a>
        </li>
        <li>
          <div style={{ backgroundColor: `${colors.greenWater}` }}></div>
          <a onClick={() => setMenuOpen(false)} href="/uranus">
            Uranus
          </a>
        </li>
        <li>
          <div style={{ backgroundColor: `${colors.blue}` }}></div>
          <a onClick={() => setMenuOpen(false)} href="/neptune">
            Neptune
          </a>
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
