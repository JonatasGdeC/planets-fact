import { createGlobalStyle } from 'styled-components'
import backgroundStart from './assets/background-stars.svg'

export const colors = {
  white: '#fff',
  darkBlue: '#070724',
  darkGray: '#38384f',
  lightGray: '#838391',
  emerald: '#419ebb',
  yellow: '#eda249',
  purple: '#6f2ed6',
  darkRed: '#d14c32',
  red: '#d83a34',
  orange: '#cd5120',
  greenWater: '#1ec2a4',
  blue: '#2d68f0'
}

export const breakpoints = {
  desktop: '1110px',
  tablet: '768px'
}

export const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: "League Spartan", sans-serif;
  }

  .container {
    max-width: 1110px;
    width: 100%;
    margin: 0 auto;

    @media(max-width: ${breakpoints.desktop}){
      padding: 0 40px;
    }

    @media(max-width: ${breakpoints.tablet}){
      padding: 0 24px;
    }
  }

  body{
    background-color: ${colors.darkBlue};
    background-size: cover;
    width: 100%;
    height: 100%;
    position: relative;
    overflow-x: hidden;
  }

  .background-start{
    width: 100%;
    height: 100%;
    background-image: url(${backgroundStart});
    background-size: cover;
    object-fit: cover;
    position:absolute;
    z-index: -1;
    inset:0;
    animation:spacefloating 9s linear infinite;

    &::after{
      width: 100%;
      content: "";
      inset:0;
      z-index: -1;
      position:absolute;
      transform:translateX(100%);
      background-image: url(${backgroundStart});

      @media(max-width: ${breakpoints.desktop}){
        transform:translateX(10%);
      }
    }

    @keyframes spacefloating{
      100%{
        transform:translateX(-90%);
      }
    }
  }
`
