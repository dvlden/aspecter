import type { Aspect } from './types'

// https://stackoverflow.com/a/1186465/1293740
export const gcd = (a: number, b: number): number => (
  b ? gcd(b, a % b) : a
)

export const getDecimalFractions = (number: number, fractions: number): number => (
  Math.floor(number * Math.pow(10, fractions)) / Math.pow(10, fractions)
)

export const getNormalizedAspect = (decimal: number, aspects: Aspect[]): Aspect => (
  aspects.filter(aspect => {
    return getDecimalFractions(decimal, 2) !== getDecimalFractions(aspect.decimal, 2)
      && getDecimalFractions(decimal, 1) === getDecimalFractions(aspect.decimal, 1)
  })[0]
)
