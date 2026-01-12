# numerals-to-text-ua

A zero-dependency TypeScript library for extracting and parsing Ukrainian number words from natural language text.

It understands:

- grammatical cases
- ordinal and cardinal forms
- big numbers above billions
- apostrophe variants

Designed for NLP, document parsing, legal texts, financial reports, and OCR pipelines.

---

## Features

- Extracts number expressions directly from text
- Converts Ukrainian number words to integers
- Supports:
  - declensions (чотирьохсот, тисячами)
  - composite numbers (сто двадцять три)
  - large numbers (мільйон, мільярд)
  - apostrophe variants (п’ять, п'ять, п\`ять)
- No runtime dependencies
- Deterministic and fast

---

## API

### extractNumbers(text: string): Match[]

Finds all number expressions inside a text.

Returns:

- start — start index
- end — end index
- word — matched numeral

Example:

```
const text = 'У мене є двадцять три яблука і чотириста груш.'
extractNumbers(text)

// [{ start: 9, end: 21, word: 'двадцять три' }, { start: 34, end: 43, word: 'чотириста' }]
```

---

### parseNumber(input: string): number

Converts numbers to integers

```
parseNumber('двадцять три') // 23
parseNumber('сто двадцять пʼять') // 125
parseNumber('чотирьмастами') // 400
parseNumber('два мільйони') // 2000000
```

---

MIT License