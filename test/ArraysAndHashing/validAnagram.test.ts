import { isAnagram } from "../../ArraysAndHashing/validAnagram"

describe('return true when valid', () => {
  test('validAnagram', () => {
    expect(isAnagram('anagram', 'nagaram')).toEqual(true)
  })
})
