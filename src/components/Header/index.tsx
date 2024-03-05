import { useState } from 'react'
import * as S from './styles'

const Planets = () => {
  return (
    <>
      <li>
        <a href="#">Mercury</a>
      </li>
      <li>
        <a href="#">Venus</a>
      </li>
      <li>
        <a href="#">Earth</a>
      </li>
      <li>
        <a href="#">Mars</a>
      </li>
      <li>
        <a href="#">Jupiter</a>
      </li>
      <li>
        <a href="#">Saturn</a>
      </li>
      <li>
        <a href="#">Uranus</a>
      </li>
      <li>
        <a href="#">Neptune</a>
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
