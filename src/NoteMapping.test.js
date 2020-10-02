import _ from 'underscore'
import NoteMapping from './NoteMapping'

describe('note mapping', () => {
  test('matches 1A as Ab min', () => {
    expect(NoteMapping.fromCamelotSignature('1A')).toStrictEqual({
      letter: 'A',
      modifier: NoteMapping.FLAT,
      mode: NoteMapping.MIN
    });
  })

  test('matches 1B as B maj', () => {
    expect(NoteMapping.fromCamelotSignature('1B')).toStrictEqual({
      letter: 'B',
      modifier: null,
      mode: NoteMapping.MAJ
    })
  })

  test('matches 2A as Eb min', () => {
    expect(NoteMapping.fromCamelotSignature('2A')).toStrictEqual({
      letter: 'E',
      modifier: NoteMapping.FLAT,
      mode: NoteMapping.MIN
    })
  })

  test('matches 2B as F# maj', () => {
    expect(NoteMapping.fromCamelotSignature('2B')).toStrictEqual({
      letter: 'F',
      modifier: NoteMapping.SHARP,
      mode: NoteMapping.MAJ
    })
  })

  test('matches 3A as Bb min', () => {
    expect(NoteMapping.fromCamelotSignature('3A')).toStrictEqual({
      letter: 'B',
      modifier: NoteMapping.FLAT,
      mode: NoteMapping.MIN
    })
  })

  test('matches 3B as Db maj', () => {
    expect(NoteMapping.fromCamelotSignature('3B')).toStrictEqual({
      letter: 'D',
      modifier: NoteMapping.FLAT,
      mode: NoteMapping.MAJ
    })
  })

  test('matches 4A as F min', () => {
    expect(NoteMapping.fromCamelotSignature('4A')).toStrictEqual({
      letter: 'F',
      modifier: null,
      mode: NoteMapping.MIN
    })
  })

  test('matches 4B as Ab maj', () => {
    expect(NoteMapping.fromCamelotSignature('4B')).toStrictEqual({
      letter: 'A',
      modifier: NoteMapping.FLAT,
      mode: NoteMapping.MAJ
    })
  })

  test('matches 5A as C min', () => {
    expect(NoteMapping.fromCamelotSignature('5A')).toStrictEqual({
      letter: 'C',
      modifier: null,
      mode: NoteMapping.MIN
    })
  })

  test('matches 5B as Eb maj', () => {
    expect(NoteMapping.fromCamelotSignature('5B')).toStrictEqual({
      letter: 'E',
      modifier: NoteMapping.FLAT,
      mode: NoteMapping.MAJ
    })
  })

  test('matches 6A a G min', () => {
    expect(NoteMapping.fromCamelotSignature('6A')).toStrictEqual({
      letter: 'G',
      modifier: null,
      mode: NoteMapping.MIN
    })
  })

  test('matches 6B as Bb maj', () => {
    expect(NoteMapping.fromCamelotSignature('6B')).toStrictEqual({
      letter: 'B',
      modifier: NoteMapping.FLAT,
      mode: NoteMapping.MAJ
    })
  })

  test('matches 7A as D min', () => {
    expect(NoteMapping.fromCamelotSignature('7A')).toStrictEqual({
      letter: 'D',
      modifier: null,
      mode: NoteMapping.MIN
    })
  })

  test('matches 7B as F maj', () => {
    expect(NoteMapping.fromCamelotSignature('7B')).toStrictEqual({
      letter: 'F',
      modifier: null,
      mode: NoteMapping.MAJ
    })
  })

  test('matches 8A as A min', () => {
    expect(NoteMapping.fromCamelotSignature('8A')).toStrictEqual({
      letter: 'A',
      modifier: null,
      mode: NoteMapping.MIN
    })
  })

  test('matches 8B as C maj', () => {
    expect(NoteMapping.fromCamelotSignature('8B')).toStrictEqual({
      letter: 'C',
      modifier: null,
      mode: NoteMapping.MAJ
    })
  })

  test('matches 9A as E min', () => {
    expect(NoteMapping.fromCamelotSignature('9A')).toStrictEqual({
      letter: 'E',
      modifier: null,
      mode: NoteMapping.MIN
    })
  })

  test('matches 9B as G maj', () => {
    expect(NoteMapping.fromCamelotSignature('9B')).toStrictEqual({
      letter: 'G',
      modifier: null,
      mode: NoteMapping.MAJ
    })
  })

  test('matches 10A as B min', () => {
    expect(NoteMapping.fromCamelotSignature('10A')).toStrictEqual({
      letter: 'B',
      modifier: null,
      mode: NoteMapping.MIN
    })
  })

  test('matches 10B as D maj', () => {
    expect(NoteMapping.fromCamelotSignature('10B')).toStrictEqual({
      letter: 'D',
      modifier: null,
      mode: NoteMapping.MAJ
    })
  })

  test('matches 11A as F# min', () => {
    expect(NoteMapping.fromCamelotSignature('11A')).toStrictEqual({
      letter: 'F',
      modifier: NoteMapping.SHARP,
      mode: NoteMapping.MIN
    })
  })

  test('matches 11B as A maj', () => {
    expect(NoteMapping.fromCamelotSignature('11B')).toStrictEqual({
      letter: 'A',
      modifier: null,
      mode: NoteMapping.MAJ
    })
  })

  test('matches 12A as Db min', () => {
    expect(NoteMapping.fromCamelotSignature('12A')).toStrictEqual({
      letter: 'D',
      modifier: NoteMapping.FLAT,
      mode: NoteMapping.MIN
    })
  })

  test('matches 12B as E maj', () => {
    expect(NoteMapping.fromCamelotSignature('12B')).toStrictEqual({
      letter: 'E',
      modifier: null,
      mode: NoteMapping.MAJ
    })
  })
});
