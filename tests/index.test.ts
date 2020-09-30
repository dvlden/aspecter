import { aspecter } from '../src/index'

describe('index.ts', () => {
  it('returns `normalizedAspect` as undefined', () => {
    const result = aspecter(1920, 1080)

    expect(result).toEqual({
      resolution: [1920, 1080],
      originalAspect: {
        ratio: [16, 9],
        decimal: 1.77
      },
      normalizedAspect: undefined
    })
  })

  it('returns `normalizedAspect` for weird `originalAspect`', () => {
    const result = aspecter(1280, 536)

    expect(result).toEqual({
      resolution: [1280, 536],
      originalAspect: {
        ratio: [160, 67],
        decimal: 2.38
      },
      normalizedAspect: {
        ratio: [21, 9],
        decimal: 2.33
      }
    })
  })
})
