import type { Result } from './types'
import { gcd, getNormalizedAspect, getDecimalFractions } from './utils'
import { commonAspects } from './static'

export const aspecter = (w: number, h: number): Result => {
  const divisor = gcd(w, h)
  const decimal = getDecimalFractions((w / h), 2)

  return {
    resolution: [w, h],
    originalAspect: {
      ratio: [(w / divisor), (h / divisor)],
      decimal: decimal
    },
    normalizedAspect: getNormalizedAspect(decimal, commonAspects)
  }
}
