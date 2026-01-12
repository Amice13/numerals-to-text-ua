import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { extractNumbers, parseNumber } from '../src/index.ts'

describe('parseNumber()', () => {
  it('parses simple numbers', () => {
    assert.equal(parseNumber('один'), 1)
    assert.equal(parseNumber('два'), 2)
    assert.equal(parseNumber('три'), 3)
    assert.equal(parseNumber('десять'), 10)
    assert.equal(parseNumber('двадцять'), 20)
  })

  it('parses compound numbers', () => {
    assert.equal(parseNumber('двадцять три'), 23)
    assert.equal(parseNumber('сто двадцять п\'ять'), 125)
    assert.equal(parseNumber('три сотні'), 300)
  })

  it('parses hundreds with declensions', () => {
    assert.equal(parseNumber('двохсот'), 200)
    assert.equal(parseNumber('трьохсот'), 300)
    assert.equal(parseNumber('чотирьохсот'), 400)
    assert.equal(parseNumber('чотирмастами'), 400)
  })

  it('parses thousands and larger numbers', () => {
    assert.equal(parseNumber('тисяч'), 1000)
    assert.equal(parseNumber('дві тисячі'), 2000)
    assert.equal(parseNumber('три тисячі п\'ятсот'), 3500)
    assert.equal(parseNumber('мільйон'), 1_000_000)
  })

  it('ignores unknown words', () => {
    assert.equal(parseNumber('бла бла п\'ять бла'), 5)
    assert.equal(parseNumber('сто щось двадцять'), 120)
  })
})

describe('extractNumbers()', () => {
  it('extracts a single number with correct span', () => {
    const text = 'У мене є двадцять три яблука.'
    const [m] = extractNumbers(text)
    assert.equal(m.word, 'двадцять три')
    assert.equal(text.slice(m.start, m.end), 'двадцять три')
  })

  it('extracts multiple numbers from text', () => {
    const text = 'Було п\'ять машин і сорок два велосипеди'
    const matches = extractNumbers(text)

    assert.equal(matches.length, 2)
    assert.equal(matches[0].word, "п'ять")
    assert.equal(matches[1].word, 'сорок два')
  })

  it('handles inflected forms', () => {
    const text = 'Зі чотирьохсот людей залишилось сто'
    const matches = extractNumbers(text)

    assert.equal(matches.length, 2)
    assert.equal(matches[0].word, 'чотирьохсот')
    assert.equal(matches[1].word, 'сто')
  })

  it('accepts soft-sign mistypes', () => {
    const text = 'Ми володіємо чотирмастами акціями'
    const [m] = extractNumbers(text)

    assert.equal(m.word, 'чотирмастами')
    assert.equal(parseNumber(m.word), 400)
  })

  it('does not join numbers across punctuation', () => {
    const text = 'Було сто, двадцять і три'
    const matches = extractNumbers(text)

    assert.deepEqual(
      matches.map(m => m.word),
      ['сто', 'двадцять', 'три']
    )
  })

  it('handles mixed apostrophes', () => {
    const text = 'Було п’ять і ще п`ять'
    const matches = extractNumbers(text)

    assert.equal(matches.length, 2)
    assert.equal(matches[0].word, "п'ять")
    assert.equal(matches[1].word, "п'ять")
  })
})
