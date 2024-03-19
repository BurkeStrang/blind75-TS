import { groupAnagrams } from "../../ArraysAndHashing/groupAnagrams";

describe('returns an array of arrays of anagrams', () => {
  test('groupAnagrams', () => {
    // these can be in any order
    expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).
      toEqual([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
        || [["bat"], ["tan", "nat"], ["eat", "tea", "ate"]]);
  })
});
