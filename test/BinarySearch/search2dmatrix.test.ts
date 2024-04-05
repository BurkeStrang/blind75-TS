import { searchMatrix } from "../../BinarySearch/search2dmatrix";

describe("Search a 2D Matrix", () => {
  test("Example 1", () => {
    expect(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3)).toBe(true)
  })
});
