import { groupAnagrams } from "../../ArraysAndHashing/groupAnagrams";

describe("returns an array of arrays of anagrams", () => {
    test("groupAnagrams", () => {
        // these can be in any order
        const expected = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];
        expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual(
            expect.arrayContaining(expected)
        );
    });
});
