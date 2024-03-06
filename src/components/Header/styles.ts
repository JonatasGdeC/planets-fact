import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { PropsPlanet } from '../InfoPlanet'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 32px;
  background-color: ${colors.darkBlue};
  border-bottom: 1px solid ${colors.lightGray};

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    justify-content: center;
    gap: 40px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;

    ul {
      display: none;
    }
  }
`
export const Title = styled.h1`
  color: ${colors.white};
  font-family: 'Antonio', sans-serif;
  font-size: 28px;
  font-weight: 500;
  text-transform: uppercase;
`
export const List = styled.ul<Omit<PropsPlanet, 'planet'>>`
  display: flex;
  align-items: center;
  gap: 32px;

  li {
    a {
      padding: 28px 0;
      font-size: 11px;
      font-weight: bold;
      color: ${colors.white};
      text-transform: uppercase;
      opacity: 0.8;
      transition: all ease 0.3s;
      border-top: 4px solid transparent;

      &:hover {
        opacity: 1;
        border-color: ${(props) => props.colorPlanet};
      }
    }
  }
`

export const Hamburguer = styled.div`
  width: 24px;

  span {
    height: 3px;
    display: block;
    width: 100%;
    background-color: ${colors.white};
    margin-bottom: 4px;
  }

  &.is--active {
    opacity: 0.6;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const MenuHamburguer = styled.div`
  display: none;
  flex-direction: column;
  padding: 44px 24px;
  background-color: ${colors.darkBlue};

  li {
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${colors.lightGray};

    div {
      width: 20px;
      height: 20px;
      border-radius: 100%;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 28px 0;
      padding-left: 25px;
      color: ${colors.white};
      font-size: 15px;
      font-weight: bold;
      text-transform: uppercase;
    }

    a::after {
      content: '>';
      color: ${colors.lightGray};
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    &.is--open {
      display: flex;
    }
  }
`
