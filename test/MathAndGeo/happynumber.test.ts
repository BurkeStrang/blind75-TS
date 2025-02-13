import { isHappyNumber } from "../../MathAndGeo/happynumber";

describe("isHappyNumber", () => {
    test("Example test case 1", () => {
        expect(isHappyNumber(19)).toBe(true);
        // 1^2 + 9^2 = 1 + 81 = 82
        // 8^2 + 2^2 = 64 + 4 = 68
        // 6^2 + 8^2 = 36 + 64 = 100
        // 1^2 + 0^2 + 0^2 = 1 + 0 + 0 = 1
        // 1 is found so should return true
    });
});

describe("isHappyNumber", () => {
    test("Example test case 2", () => {
        expect(isHappyNumber(2)).toBe(false);
        // 2^2 = 4
        // 4^2 = 16
        // 1^2 + 6^2 = 1 + 36 = 37
        // 3^2 + 7^2 = 9 + 49 = 58
        // 5^2 + 8^2 = 25 + 64 = 89
        // 8^2 + 9^2 = 64 + 81 = 145
        // 1^2 + 4^2 + 5^2 = 1 + 16 + 25 = 42
        // 4^2 + 2^2 = 16 + 4 = 20
        // 2^2 + 0^2 = 4 + 0 = 4
        // cycle repeats so should return false
    });
});
