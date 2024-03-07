import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { PropsPlanet } from '.'

export const Infos = styled.div`
  display: flex;
  align-items: center;
  margin: 126px 0 86px;

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    margin: 0;
  }
`

export const ImgPlanet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 760px;
  width: 100%;

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

    .anel1 {
      position: absolute;
      z-index: -1;
    }

    .anel2 {
      position: absolute;
      z-index: 1;
    }

    .internal {
      display: block;
      left: 0;
      position: absolute;
      z-index: -1;
    }

    .geology {
      display: block;
      position: absolute;
      top: 70px;
      z-index: 1;
      transition: all ease 0.4s;

      &:hover {
        scale: 1.5;
      }
    }

    .is--close {
      display: none;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
    height: 460px;

    div {
      scale: 0.6;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 304px;

    div {
      scale: 0.4;
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

  .invisible {
    display: none;
  }

  .description {
    margin-bottom: 24px;
    font-size: 14px;
    font-weight: 400;
    line-height: 25px;
  }

  .source {
    display: flex;
    gap: 8px;
    margin-bottom: 40px;
    font-size: 14px;
    font-weight: 100;

    a {
      display: flex;
      gap: 8px;
      align-items: bottom;
      font-weight: bold;
      text-decoration: underline;
      color: ${colors.white};
      opacity: 0.7;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 70px;

    .h2 {
      font-size: 48px;
    }

    .description {
      margin-bottom: 32px;
      font-size: 11px;
    }

    .source {
      font-size: 12px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    text-align: center;
  }
`

export const Buttons = styled.div<Omit<PropsPlanet, 'planet'>>`
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

      &.title-mobile {
        display: none;
      }
    }

    &:hover {
      background-color: ${colors.lightGray};
    }

    &.is--active {
      background-color: ${(props) => props.colorPlanet};
      border-color: transparent;
    }

    @media (max-width: ${breakpoints.desktop}) {
      padding: 8px 20px;
      font-size: 8px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 56px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 8px;
  }
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

  @media (max-width: ${breakpoints.desktop}) {
    width: 164px;
    padding: 16px;

    h3 {
      font-size: 8px;
    }

    p {
      font-size: 24px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px 24px;

    p {
      font-size: 20px;
    }
  }
`

export const ButtonsHeader = styled.div<Omit<PropsPlanet, 'planet'>>`
  display: none;
  justify-content: center;
  gap: 45px;
  padding: 0 24px;
  border-bottom: 1px solid ${colors.lightGray};

  button {
    font-family: 'Spartan', sans-serif;
    text-transform: uppercase;
    color: ${colors.white};
    opacity: 0.5;
    background-color: transparent;
    padding: 20px 0 16px;
    font-size: 9px;
    border: none;
    border-bottom: 4px solid transparent;

    span {
      display: none;
    }

    .title-desktop {
      display: none;
    }

    .title-mobile {
      display: block;
    }

    &.is--active {
      opacity: 1;
      border-color: ${(props) => props.colorPlanet};
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
  }
`
