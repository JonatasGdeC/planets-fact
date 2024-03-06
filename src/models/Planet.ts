class Planet {
  id: number
  name: string
  description: string
  link: string
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
    description: string,
    link: string,
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
    this.description = description
    this.link = link
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
