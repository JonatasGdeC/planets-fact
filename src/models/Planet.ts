class Planet {
  id: number
  name: string
  planet: {
    text: string
    link: string
  }
  internal: {
    text: string
    link: string
  }
  geology: {
    text: string
    link: string
  }
  imagePlanet: string
  imagePlanet2?: string
  imagePlanet3?: string
  imageInternal: string
  imageGeology: string
  rotation: string
  revolution: string
  radius: number
  temperature: number

  constructor(
    id: number,
    name: string,
    planet: {
      text: string
      link: string
    },
    internal: {
      text: string
      link: string
    },
    geology: {
      text: string
      link: string
    },
    imagePlanet: string,
    imagePlanet2: string,
    imagePlanet3: string,
    imageInternal: string,
    imageGeology: string,
    rotation: string,
    revolution: string,
    radius: number,
    temperature: number
  ) {
    this.id = id
    this.name = name
    this.planet = planet
    this.planet.text = planet.text
    this.planet.link = planet.link
    this.internal = internal
    this.internal.text = internal.text
    this.internal.link = internal.link
    this.geology = geology
    this.geology.text = geology.text
    this.geology.link = geology.link
    this.imagePlanet = imagePlanet
    this.imagePlanet2 = imagePlanet2
    this.imagePlanet3 = imagePlanet3
    this.imageInternal = imageInternal
    this.imageGeology = imageGeology
    this.rotation = rotation
    this.revolution = revolution
    this.radius = radius
    this.temperature = temperature
  }
}

export default Planet
