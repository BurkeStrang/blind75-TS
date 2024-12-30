import { characterReplacement } from "../../SlidingWindow/longestrepeatingcharacterreplacement";

describe('Longest Repeating Character Replacement', () => {
  test('Example 1', () => {
    expect(characterReplacement("ABAB", 2)).toStrictEqual(4)
  })
  test('Example 2', () => {
    expect(characterReplacement("AABABBA", 1)).toStrictEqual(4)
  })
});

