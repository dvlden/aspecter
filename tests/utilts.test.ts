import {
  gcd,
  getDecimalFractions,
  getNormalizedAspect,
} from '../src/utils'
import { commonAspects } from '../src/static'

describe('utils.ts', () => {
  it('returns the greatest common divisor', () => {
    const divisor = gcd(1920, 1080)
    expect(divisor).toBe(120)
  })

  it('returns a float with one decimal fraction', () => {
    const float = getDecimalFractions((21 / 9), 1)
    expect(float).toBe(2.3)
  })

  it('returns a float with two decimal fractions', () => {
    const float = getDecimalFractions((1920 / 1080), 2)
    expect(float).toBe(1.77)
  })

  it('returns normalized aspect from common aspects', () => {
    const aspect = getNormalizedAspect(1.7894721387, commonAspects)

    expect(aspect).toEqual({
      ratio: [16, 9],
      decimal: 1.77
    })
  })
})
