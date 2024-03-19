
import { containsDuplicate } from "../../ArraysAndHashing/containsDuplicates"

describe('returns true for when duplicate', () => {
  test('containsDuplicates', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toEqual(true)
  })
})
