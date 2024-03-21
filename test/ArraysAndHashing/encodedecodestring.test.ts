import { encodeString, decodeString } from '../../ArraysAndHashing/encodedecodestring';

describe('Encode and Decode String', () => {
  test('Testcase 1', () => {
    expect(decodeString(encodeString('abc'))).toBe('abc')
  })
});
