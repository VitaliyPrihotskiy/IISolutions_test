export interface Planet {
  name: string,
  rotation_period: number,
  orbital_period: number,
  diameter: number,
  climate: string,
  gravity: string,
  terrain: string,
  surface_water: number,
  population: number,
  residents: string[],
  films: string[],
  edited: string,
  url: string
}

export interface Planets {
  count: number,
  next: string | null,
  previous: string | null,
  results: Planet[]
}