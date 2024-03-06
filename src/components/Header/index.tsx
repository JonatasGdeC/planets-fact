import { useState } from 'react'
import * as S from './styles'

const Planets = () => {
  return (
    <>
      <li>
        <a href="/">Mercury</a>
      </li>
      <li>
        <a href="/venus">Venus</a>
      </li>
      <li>
        <a href="/earth">Earth</a>
      </li>
      <li>
        <a href="/mars">Mars</a>
      </li>
      <li>
        <a href="/jupiter">Jupiter</a>
      </li>
      <li>
        <a href="/saturn">Saturn</a>
      </li>
      <li>
        <a href="/uranus">Uranus</a>
      </li>
      <li>
        <a href="/neptune">Neptune</a>
      </li>
    </>
  )
}

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <S.Header>
        <S.Title>The Planets</S.Title>
        <S.List>
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
