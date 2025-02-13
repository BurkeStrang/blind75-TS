/**
 * Finds all k-length substrings (sequences) in the given DNA string that occur more than once.
 *
 * @param dna - A string representing the DNA sequence, composed of characters 'A', 'C', 'G', and 'T'.
 * @param k - The length of the sequences to search for.
 * @returns A set containing all k-length sequences that appear more than once in the DNA string.
 *
 * @example
 * ```
 * Input: dna = "AAAAACCCCCAAAAACCCCCC", k = 8
 * Output: Set {"AAAAACCC","AAAACCCC","AAACCCCC"}
 * ```
 */
export function findRepeatedSequences(dna: string, k: number): Set<string> {
    const sequenceCount = new Map<string, number>();
    const repeatedSequences = new Set<string>();

    // Early exit if k is larger than the DNA string length
    if (k > dna.length) {
        return repeatedSequences;
    }

    // Iterate through the DNA string to extract all possible k-length substrings
    for (let i = 0; i <= dna.length - k; i++) {
        const substring = dna.substring(i, i + k);

        // Update the count for this substring
        const count = (sequenceCount.get(substring) || 0) + 1;
        sequenceCount.set(substring, count);

        // If the count becomes 2, it's a repeated sequence
        // Doesn't add again if already more than 2
        if (count === 2) {
            repeatedSequences.add(substring);
        }
    }
    return repeatedSequences;
}
