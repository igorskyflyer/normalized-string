import { describe, test, assert } from 'vitest'
import { NormalizedString } from '../src/index.mjs'
import { LineEnding } from '../src/LineEndings.mjs'

describe('🧪 normalized-string tests 🧪', () => {
  test('#1 should return ""', () => {
    // @ts-expect-error
    assert.equal(new NormalizedString().value, '')
  }) // #1

  test('#2 should return LFs', () => {
    const loremIpsum =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\nDuis in nulla ut leo lobortis venenatis.'

    assert.equal(
      new NormalizedString(loremIpsum).value,
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\nDuis in nulla ut leo lobortis venenatis.'
    )
  }) // #2

  test('#3 should return CRLFs', () => {
    const loremIpsum =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\nDuis in nulla ut leo lobortis venenatis.'

    assert.equal(
      new NormalizedString(loremIpsum, LineEnding.crlf).value,
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\r\n\r\nDuis in nulla ut leo lobortis venenatis.'
    )
  }) // #3

  test('#4 should return LFs', () => {
    const loremIpsum =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\r\n\r\nDuis in nulla ut leo lobortis venenatis.'

    assert.equal(
      new NormalizedString(loremIpsum).value,
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\nDuis in nulla ut leo lobortis venenatis.'
    )
  }) // #4

  test('#5 should return CRLFs', () => {
    const loremIpsum =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\nDuis in nulla ut leo lobortis venenatis.'

    assert.equal(
      new NormalizedString(loremIpsum, LineEnding.crlf).value,
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\r\n\r\nDuis in nulla ut leo lobortis venenatis.'
    )
  }) // #5
})
