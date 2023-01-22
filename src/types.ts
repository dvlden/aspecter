export interface Aspect {
  ratio: [number, number]
  decimal: number
}

export interface Result {
  resolution: [number, number]
  originalAspect: Aspect
  normalizedAspect?: Aspect
}
