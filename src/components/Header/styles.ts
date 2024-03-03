import styled from 'styled-components'
import { colors } from '../../styles'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 32px;
  background-color: ${colors.darkBlue};
  border-bottom: 1px solid ${colors.lightGray};
`
export const Title = styled.h1`
  color: ${colors.white};
  font-family: 'Antonio', sans-serif;
  font-size: 28px;
  font-weight: 500;
  text-transform: uppercase;
`
export const List = styled.ul`
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
        border-color: ${colors.greenWater};
      }
    }
  }
`
