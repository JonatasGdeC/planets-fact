import styled from 'styled-components'
import { colors } from '../../styles'

export const Infos = styled.div`
  display: flex;
  align-items: center;
  padding: 126px 0 86px;
`

export const ImgPlanet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 760px;
  width: 100%;
  position: relative;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    position: relative;

    .planet {
      display: block;
      position: absolute;
      z-index: -1;
    }

    .internal {
      display: block;
      left: 0;
      position: absolute;
      z-index: 1;
    }

    .geology {
      display: block;
      position: absolute;
      top: 70px;
      z-index: 1;
    }

    .is--close {
      display: none;
    }
  }
`

export const InfosPlanet = styled.div`
  width: 350px;
  color: ${colors.white};

  h2 {
    margin-bottom: 24px;
    font-family: 'Antonio', sans-serif;
    font-size: 80px;
    font-weight: 500;
    text-transform: uppercase;
  }

  .description {
    margin-bottom: 24px;
    font-size: 14px;
    font-weight: 400;
    line-height: 25px;
  }

  .source {
    margin-bottom: 40px;
    font-size: 14px;
    font-weight: 100;

    a {
      font-weight: bold;
      text-decoration: underline;
      color: ${colors.white};
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;

  button {
    display: flex;
    align-items: center;
    gap: 28px;
    width: 100%;
    padding: 12px 28px;
    background-color: transparent;
    border: 1px solid ${colors.lightGray};
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: all ease 0.3s;

    span {
      color: ${colors.darkGray};
    }

    p {
      color: ${colors.white};
    }

    &:hover {
      background-color: ${colors.lightGray};
    }

    &.is--active {
      background-color: ${colors.emerald};
      border-color: transparent;
    }
  }
`

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 56px;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 255px;
  padding: 20px 24px;
  border: 1px solid ${colors.lightGray};
  text-transform: uppercase;

  h3 {
    font-size: 11px;
    font-weight: bold;
    line-height: 25px;
    margin-bottom: 4px;
    color: ${colors.darkGray};
  }

  p {
    font-family: 'Antonio', sans-serif;
    font-size: 40px;
    font-weight: bold;
    color: ${colors.white};
  }
`
