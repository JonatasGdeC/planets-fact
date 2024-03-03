import { createGlobalStyle } from 'styled-components'

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
  }
`
