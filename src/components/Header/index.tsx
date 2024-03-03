import * as S from './styles'

const Header = () => {
  return (
    <S.Header>
      <S.Title>The Planets</S.Title>
      <S.List>
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
      </S.List>
    </S.Header>
  )
}

export default Header
