class Planet {
  id: number
  name: string
  description: string
  link: string
  imagePlanet: string
  imageInternal: string
  imageGeology: string
  rotation: number
  revolution: number
  radius: number
  temperature: number

  constructor(
    id: number,
    name: string,
    description: string,
    link: string,
    imagePlanet: string,
    imageInternal: string,
    imageGeology: string,
    rotation: number,
    revolution: number,
    radius: number,
    temperature: number
  ) {
    this.id = id
    this.name = name
    this.description = description
    this.link = link
    this.imagePlanet = imagePlanet
    this.imageInternal = imageInternal
    this.imageGeology = imageGeology
    this.rotation = rotation
    this.revolution = revolution
    this.radius = radius
    this.temperature = temperature
  }
}

export default Planet
