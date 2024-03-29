import type { Result } from './types'
import { gcd, getNormalizedAspect, getDecimalFractions } from './utils'
import { commonAspects } from './static'

export const aspecter = (w: number, h: number): Result => {
  const divisor = gcd(w, h)
  const decimal = getDecimalFractions(w / h, 2)
  const normalizedAspect = getNormalizedAspect(decimal, commonAspects)

  const result: Result = {
    resolution: [w, h],
    originalAspect: {
      ratio: [w / divisor, h / divisor],
      decimal,
    },
  }

  if (normalizedAspect) {
    return {
      ...result,
      normalizedAspect,
    }
  }

  return result
}
