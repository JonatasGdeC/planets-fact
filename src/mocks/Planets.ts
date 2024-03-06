import Planet from '../models/Planet'

import mercury from '../assets/planets/mercury/mercury.png'
import mercuryInternal from '../assets/planets/mercury/mercury-internal.png'
import mercuryGeology from '../assets/planets/mercury/mercury-geology.png'

import venus from '../assets/planets/venus/venus.png'
import venusInternal from '../assets/planets/venus/venus-internal.png'
import venusGeology from '../assets/planets/venus/venus-geology.png'

import earth from '../assets/planets/earth/earth.png'
import earthInternal from '../assets/planets/earth/earth-internal.png'
import earthGeology from '../assets/planets/earth/earth-geology.png'

import mars from '../assets/planets/mars/mars.png'
import marsInternal from '../assets/planets/mars/mars-internal.png'
import marsGeology from '../assets/planets/mars/mars-geology.png'

import jupiter from '../assets/planets/jupiter/jupiter.png'
import jupiterInternal from '../assets/planets/jupiter/jupiter-internal.png'
import jupiterGeology from '../assets/planets/jupiter/jupiter-geology.png'

import saturn from '../assets/planets/saturn/bola.png'
import saturn2 from '../assets/planets/saturn/anel1.png'
import saturn3 from '../assets/planets/saturn/anel2.png'
import saturnInternal from '../assets/planets/saturn/saturn-internal.png'
import saturnGeology from '../assets/planets/saturn/saturn-geology.png'

import uranus from '../assets/planets/uranus/uranus.png'
import uranusInternal from '../assets/planets/uranus/uranus-internal.png'
import uranusGeology from '../assets/planets/uranus/uranus-geology.png'

import neptune from '../assets/planets/neptune/neptune.png'
import neptuneInternal from '../assets/planets/neptune/neptune-internal.png'
import neptuneGeology from '../assets/planets/neptune/neptune-geology.png'

export const Mecury: Planet = {
  id: 1,
  name: 'Mercury',
  description:
    'Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 mars days, the shortest of all the Suns planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.',
  link: 'https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)',
  imagePlanet: mercury,
  imageInternal: mercuryInternal,
  imageGeology: mercuryGeology,
  rotation: '58.8 days',
  revolution: '87.97 days',
  radius: 2439.7,
  temperature: 430
}

export const Venus: Planet = {
  id: 2,
  name: 'Venus',
  description:
    'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earths night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.',
  link: 'https://pt.wikipedia.org/wiki/V%C3%A9nus_(planeta)',
  imagePlanet: venus,
  imageInternal: venusInternal,
  imageGeology: venusGeology,
  rotation: '243 days',
  revolution: '224.7 days',
  radius: 6051.8,
  temperature: 471
}

export const Earth: Planet = {
  id: 3,
  name: 'Earth',
  description:
    'Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earths surface is land with remaining 70.8% is covered with water. Earths distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.',
  link: 'https://pt.wikipedia.org/wiki/Terra',
  imagePlanet: earth,
  imageInternal: earthInternal,
  imageGeology: earthGeology,
  rotation: '0.99 days',
  revolution: '365.26 days',
  radius: 6371,
  temperature: 16
}

export const Mars: Planet = {
  id: 4,
  name: 'Mars',
  description:
    'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
  link: 'https://pt.wikipedia.org/wiki/Marte_(planeta)',
  imagePlanet: mars,
  imageInternal: marsInternal,
  imageGeology: marsGeology,
  rotation: '1.03 days',
  revolution: '1.88 years',
  radius: 3389.5,
  temperature: -28
}

export const Jupiter: Planet = {
  id: 5,
  name: 'Jupiter',
  description:
    'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.',
  link: 'https://pt.wikipedia.org/wiki/J%C3%BApiter_(planeta)',
  imagePlanet: jupiter,
  imageInternal: jupiterInternal,
  imageGeology: jupiterGeology,
  rotation: '9.93 hours',
  revolution: '11.86 years',
  radius: 69911,
  temperature: -108
}

export const Saturn: Planet = {
  id: 6,
  name: 'Saturn',
  description:
    'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.',
  link: 'https://pt.wikipedia.org/wiki/Saturno_(planeta)',
  imagePlanet: saturn,
  imagePlanet2: saturn2,
  imagePlanet3: saturn3,
  imageInternal: saturnInternal,
  imageGeology: saturnGeology,
  rotation: '10.8 hours',
  revolution: '29.46 years',
  radius: 58232,
  temperature: -138
}

export const Uranus: Planet = {
  id: 7,
  name: 'Uranus',
  description:
    'Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.',
  link: 'https://pt.wikipedia.org/wiki/Urano_(planeta)',
  imagePlanet: uranus,
  imageInternal: uranusInternal,
  imageGeology: uranusGeology,
  rotation: '17.2 hours',
  revolution: '84 years',
  radius: 25362,
  temperature: -195
}

export const Neptune: Planet = {
  id: 8,
  name: 'Neptune',
  description:
    'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.',
  link: 'https://pt.wikipedia.org/wiki/Netuno_(planeta)',
  imagePlanet: neptune,
  imageInternal: neptuneInternal,
  imageGeology: neptuneGeology,
  rotation: '16.08 hours',
  revolution: '164.49 years',
  radius: 25362,
  temperature: -195
}
