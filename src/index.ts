// Utils
const apostrophes = [
  '’',
  '‘',
  '′',
  'ʼ',
  '`',
  '´'
]

const apostrophesPattern = new RegExp(`(?:[${apostrophes.join('')}])`, 'g')

const unifyApostrophes = (s: string, replacement = '\''): string => {
  return s.replace(apostrophesPattern, replacement)
}

// Quantative numerals
const nullEndings = ['ем', 'ів', 'ям', 'ях', 'ь', 'я', 'ю', 'і']

// 1st type of conjugation for quantative numerals
const firstEndings = ['ого', 'ієї', 'ією', 'ої', 'ому', 'ими', 'ою', 'ій', 'их', 'им', 'у', 'о', 'а', 'е', 'і']

// 2nd type of conjugation for quantative numerals
const secondEndings2 = ['ома', 'ох', 'ом', 'оє', 'а', 'і']
const secondEndings3 = ['ьома', 'ьох', 'ьом', 'и']
const secondEndings4 = ['ма', 'ьох', 'ьом', 'и']

const compositeEndings = ['еро', 'ьома', 'ьох', 'ьом', 'ьма']

// 3rd type of conjugation for quantative n numerals
const thirdEndings1 = ['', 'ьома', 'ьма', 'ьох', 'ьом', 'и', 'ь']
const thirdEndings2 = ['и']
const thirdEndings3 = ['ома', 'ох', 'ом', 'а']

// 4th type of conjugation for quantative n numerals
const fourthEndings = ['а']

// 5th type of conjugation for quantative n numerals
const fifthEndings1 = ['стах', 'сот']
const fifthEndings2 = ['астами', 'стам']

// 6th type of conjugation for quantative n numerals
const sixthEndingsF = ['ами', 'ею', 'ах', 'ам', 'а', 'у', 'і']
const sixthEndingsM = ['ами', 'ом', 'ах', 'ам', 'ів', 'и', 'а', 'у', 'і']

// Ordinal numerals

const ordinalEndings = ['ого', 'ому', 'ими', 'ий', 'ої', 'ій', 'их', 'им', 'ім', 'і', 'у', 'а', 'е']
const ordinalEndingsSoft = ['ього', 'ьому', 'ьїми', 'іми', 'ьої', 'ій', 'іх', 'ім', 'і', 'ю', 'я', 'є']
const ordinalEndings100 = ['ями', 'ях', 'ею', 'і', 'я']

// Additional numbers
const bigNumbers = [
  'мільйон',
  'мільярд',
  'трильйон',
  'трильярд',
  'квадрильйон',
  'квадрильярд',
  'квінтильйон',
  'квінтильярд',
  'секстильйон',
  'секстильярд',
  'септильйон',
  'септильярд',
  'октильйон',
  'октильярд',
  'нонільйон',
  'нонільярд',
  'децильйон',
  'децильярд'
]

const base = [
  {
    value: 0,
    options: [
      ...nullEndings.map(ending => `нул${ending}`),
      ...nullEndings.map(ending => `нол${ending}`),
      ...ordinalEndings.map(ending => `нольов${ending}`),
      ...ordinalEndings.map(ending => `нульов${ending}`)
    ]
  },
  {
    value: 1,
    options: [
      ...firstEndings.map(ending => `одн${ending}`),
      ...ordinalEndings.map(ending => `перш${ending}`),
      'один'
    ]
  },
  {
    value: 2,
    options: [
      ...secondEndings2.map(ending => `дв${ending}`),
      ...ordinalEndings.map(ending => `друг${ending}`)
    ]
  },
  {
    value: 3,
    options: [
      ...secondEndings3.map(ending => `тр${ending}`),
      ...ordinalEndingsSoft.map(ending => `трет${ending}`)
    ]
  },
  {
    value: 4,
    options: [
      'четверо',
      ...secondEndings4.map(ending => `чотир${ending}`),
      ...ordinalEndings.map(ending => `четверт${ending}`)
    ]
  },
  {
    value: 5,
    options: [
      'п\'ятеро',
      ...compositeEndings.map(ending => `п'ят${ending}`),
      ...thirdEndings1.slice(1).map(ending => `п'ят${ending}`),
      ...ordinalEndings.map(ending => `п'ят${ending}`)
    ]
  },
  {
    value: 6,
    options: [
      'шестеро',
      ...compositeEndings.map(ending => `шіст${ending}`),
      ...thirdEndings2.map(ending => `шест${ending}`),
      ...ordinalEndings.map(ending => `шост${ending}`)
    ]
  },
  {
    value: 7,
    options: [
      'семеро',
      ...thirdEndings3.map(ending => `сім${ending}`),
      ...thirdEndings2.map(ending => `сем${ending}`),
      ...ordinalEndings.map(ending => `сьом${ending}`),
      'сім'
    ]
  },
  {
    value: 8,
    options: [
      'восьмеро',
      ...thirdEndings3.map(ending => `вісьм${ending}`),
      ...thirdEndings2.map(ending => `восьм${ending}`),
      ...ordinalEndings.map(ending => `восьм${ending}`),
      'вісім'
    ]
  },
  {
    value: 9,
    options: [
      'дев\'ятеро',
      ...thirdEndings1.slice(1).map(ending => `дев'ят${ending}`),
      ...ordinalEndings.map(ending => `дев'ят${ending}`)
    ]
  },
  {
    value: 10,
    options: [
      'десятеро',
      ...thirdEndings1.slice(1).map(ending => `десят${ending}`),
      ...ordinalEndings.map(ending => `десят${ending}`)
    ]
  },
  {
    value: 11,
    options: [
      'одинадцятеро',
      ...thirdEndings1.slice(1).map(ending => `одинадцят${ending}`),
      ...ordinalEndings.map(ending => `одинадцят${ending}`)
    ]
  },
  {
    value: 12,
    options: [
      'дванадцятеро',
      ...thirdEndings1.slice(1).map(ending => `дванадцят${ending}`),
      ...ordinalEndings.map(ending => `дванадцят${ending}`)
    ]
  },
  {
    value: 13,
    options: [
      'тринадцятеро',
      ...thirdEndings1.slice(1).map(ending => `тринадцят${ending}`),
      ...ordinalEndings.map(ending => `тринадцят${ending}`)
    ]
  },
  {
    value: 14,
    options: [
      'чотирнадцятеро',
      ...thirdEndings1.slice(1).map(ending => `чотирнадцят${ending}`),
      ...ordinalEndings.map(ending => `чотирнадцят${ending}`)
    ]
  },
  {
    value: 15,
    options: [
      'п\'ятнадцятеро',
      ...thirdEndings1.slice(1).map(ending => `п'ятнадцят${ending}`),
      ...ordinalEndings.map(ending => `п'ятнадцят${ending}`)
    ]
  },
  {
    value: 16,
    options: [
      'шістнадцятеро',
      ...thirdEndings1.slice(1).map(ending => `шістнадцят${ending}`),
      ...ordinalEndings.map(ending => `шістнадцят${ending}`)
    ]
  },
  {
    value: 17,
    options: [
      'сімнадцятеро',
      ...thirdEndings1.slice(1).map(ending => `сімнадцят${ending}`),
      ...ordinalEndings.map(ending => `сімнадцят${ending}`)
    ]
  },
  {
    value: 18,
    options: [
      'вісімнадцятеро',
      ...thirdEndings1.slice(1).map(ending => `вісімнадцят${ending}`),
      ...ordinalEndings.map(ending => `вісімнадцят${ending}`)
    ]
  },
  {
    value: 19,
    options: [
      'дев\'ятнадцятеро',
      ...thirdEndings1.slice(1).map(ending => `дев'ятнадцят${ending}`),
      ...ordinalEndings.map(ending => `дев'ятнадцят${ending}`)
    ]
  },
  {
    value: 20,
    options: [
      'двадцятеро',
      ...thirdEndings1.slice(1).map(ending => `двадцят${ending}`),
      ...ordinalEndings.map(ending => `двадцят${ending}`)
    ]
  },
  {
    value: 30,
    options: [
      'тридцятеро',
      ...thirdEndings1.slice(1).map(ending => `тридцят${ending}`),
      ...ordinalEndings.map(ending => `тридцят${ending}`)
    ]
  },
  {
    value: 40,
    options: [
      ...fourthEndings.map(ending => `сорок${ending}`),
      ...ordinalEndings.map(ending => `сороков${ending}`),
      'сорок'
    ]
  },
  {
    value: 50,
    options: [
      'п\'ятдесятеро',
      ...thirdEndings1.map(ending => `п'ятдесят${ending}`),
      ...ordinalEndings.map(ending => `п'ятдесят${ending}`)
    ]
  },
  {
    value: 60,
    options: [
      'шістдесятеро',
      ...thirdEndings1.map(ending => `шістдесят${ending}`),
      ...ordinalEndings.map(ending => `шістдесят${ending}`)
    ]
  },
  {
    value: 70,
    options: [
      'сімдесятеро',
      ...thirdEndings1.map(ending => `сімдесят${ending}`),
      ...ordinalEndings.map(ending => `сімдесят${ending}`)
    ]
  },
  {
    value: 80,
    options: [
      'вісімдесятеро',
      ...thirdEndings1.map(ending => `вісімдесят${ending}`),
      ...ordinalEndings.map(ending => `вісімдесят${ending}`)
    ]
  },
  {
    value: 90,
    options: [
      ...fourthEndings.map(ending => `дев'яност${ending}`),
      ...ordinalEndings.map(ending => `дев'яност${ending}`),
      'дев\'яносто'
    ]
  },
  {
    value: 100,
    options: [
      ...fourthEndings.map(ending => `ст${ending}`),
      ...ordinalEndings.map(ending => `сот${ending}`),
      ...ordinalEndings100.map(ending => `сотн${ending}`),
      'сто'
    ]
  },
  {
    value: 200,
    options: [
      ...fifthEndings1.map(ending => `двох${ending}`),
      ...fifthEndings2.map(ending => `двом${ending}`),
      ...ordinalEndings.map(ending => `двохсот${ending}`),
      'двісті'
    ]
  },
  {
    value: 300,
    options: [
      ...fifthEndings1.map(ending => `трьох${ending}`),
      ...fifthEndings2.map(ending => `трьом${ending}`),
      ...ordinalEndings.map(ending => `трьохсот${ending}`),
      'триста'
    ]
  },
  {
    value: 400,
    options: [
      ...fifthEndings1.map(ending => `чотирьох${ending}`),
      ...fifthEndings2.map(ending => `чотирм${ending}`),
      ...ordinalEndings.map(ending => `чотирьохсот${ending}`),
      'чотириста'
    ]
  },
  {
    value: 500,
    options: [
      ...fifthEndings1.map(ending => `п'яти${ending}`),
      ...fifthEndings2.slice(0, 1).map(ending => `п'ятьм${ending}`),
      ...fifthEndings2.slice(0, 1).map(ending => `п'ятьом${ending}`),
      ...ordinalEndings.map(ending => `п'ятсот${ending}`),
      ...ordinalEndings.map(ending => `п'ятисот${ending}`),
      'п\'ятсот'
    ]
  },
  {
    value: 600,
    options: [
      ...fifthEndings1.map(ending => `шести${ending}`),
      ...fifthEndings2.slice(0, 1).map(ending => `шістьм${ending}`),
      ...fifthEndings2.slice(0, 1).map(ending => `шістьом${ending}`),
      ...ordinalEndings.map(ending => `шістсот${ending}`),
      ...ordinalEndings.map(ending => `шестисот${ending}`),
      'шістсот'
    ]
  },
  {
    value: 700,
    options: [
      ...fifthEndings1.map(ending => `семи${ending}`),
      ...fifthEndings2.slice(1).map(ending => `семи${ending}`),
      ...fifthEndings2.map(ending => `сімом${ending}`),
      ...ordinalEndings.map(ending => `семисот${ending}`),
      ...ordinalEndings.map(ending => `сімсот${ending}`),
      'семистами',
      'сімсот'
    ]
  },
  {
    value: 800,
    options: [
      ...fifthEndings1.map(ending => `восьми${ending}`),
      ...fifthEndings2.slice(0, 1).map(ending => `восьм${ending}`),
      ...fifthEndings2.slice(1).map(ending => `восьми${ending}`),
      ...ordinalEndings.map(ending => `вісімсот${ending}`),
      ...ordinalEndings.map(ending => `восьмисот${ending}`),
      'вісімсот'
    ]
  },
  {
    value: 900,
    options: [
      ...fifthEndings1.map(ending => `дев'яти${ending}`),
      ...fifthEndings2.slice(0, 1).map(ending => `дев'ятьм${ending}`),
      ...fifthEndings2.map(ending => `дев'ятьом${ending}`),
      ...fifthEndings2.slice(1).map(ending => `дев'яти${ending}`),
      ...ordinalEndings.map(ending => `дев'ятисот${ending}`),
      ...ordinalEndings.map(ending => `дев'ятсот${ending}`),
      'дев\'ятсот'
    ]
  },
  {
    value: 1000,
    options: [
      ...sixthEndingsF.map(ending => `тисяч${ending}`),
      ...ordinalEndings.map(ending => `тисячн${ending}`),
      'тисяч'
    ]
  },
  ...bigNumbers.map((number, i) => {
    return {
      value: 10 ** (6 + i * 3),
      options: [
        ...sixthEndingsM.map(ending => `${number}${ending}`),
        ...ordinalEndings.map(ending => `${number}н${ending}`),
        number
      ]
    }
  })
]

const numeralsMap = new Map<string, number>()
for (const { value, options } of base) {
  for (const option of options) {
    numeralsMap.set(option, value)
  }
}

interface Match {
  start: number
  end: number
  word: string
}

const wordRegex = /[а-яєіїґ']+/gi

const tokenize = (text: string): Match[] =>
  [...unifyApostrophes(text).toLowerCase().matchAll(wordRegex)].map(m => {
    const word = m[0]
    return {
      word,
      start: m.index,
      end: m.index + word.length
    }
  })

export const extractNumbers = (text: string): Match[] => {
  const tokens = tokenize(text)
  const result: Match[] = []

  let i = 0
  while (i < tokens.length) {
    let j = i
    let acc = ''

    while (j < tokens.length && numeralsMap.has(tokens[j].word)) {
      acc += (acc !== '' ? ' ' : '') + tokens[j].word
      j++

      const next = tokens[j]
      if (next === undefined) break

      if (tokens[j - 1].end !== tokens[j].start &&
          text.slice(tokens[j - 1].end, tokens[j].start).trim() !== '') {
        break
      }
    }

    if (j > i) {
      const start = tokens[i].start
      const end = tokens[j - 1].end
      result.push({ start, end, word: acc })
      i = j
    } else {
      i++
    }
  }

  return result
}

export const parseNumber = (input: string): number => {
  let result = 0
  let current = 0
  for (const word of input.toLowerCase().split(' ')) {
    const n = numeralsMap.get(unifyApostrophes(word))
    if (n === undefined) throw Error('Not a number')
    if (n >= 1000) {
      current = (current || 1) * n
      result += current
      current = 0
    } else if (n >= 100) {
      current = (current || 1) * n      
    } else {
      current += n
    }
  }
  return result + current
}
