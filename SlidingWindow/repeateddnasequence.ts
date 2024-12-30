
/**
 * What it does.
 *
 * @param name - Parameter description.
 * @returns Type and description of the returned object.
 *
 * @example
 * ```
 * Write me later.
 * ```
 */
function findRepeatedSequences(dna: string, k: number): Set<string> {
  const stringLength = dna.length;

  if (stringLength < k) {
    return new Set<string>();
  }

  const mapping = new Map([['A', 1], ['C', 2], ['G', 3], ['T', 4]]);

  const baseValue = 4;

  const numbers = new Array(stringLength);
  for (let i = 0; i < stringLength; i++) {
    numbers[i] = mapping.get(dna[i]);
  }

  let hashValue = 0;

  const hashSet = new Set();
  const output = new Set<string>();

  for (let i = 0; i < stringLength - k + 1; i++) {

    if (i === 0) {
      for (let j = 0; j < k; j++) {
        hashValue += numbers[j] * Math.pow(baseValue, k - j - 1);
      }
    }

    else {
      const previousHashValue = hashValue;
      hashValue = ((previousHashValue - numbers[i - 1] * Math.pow(baseValue, k - 1)) * baseValue) + numbers[i + k - 1];
    }

    if (hashSet.has(hashValue)) {
      output.add(dna.substring(i, i + k));
    }

    hashSet.add(hashValue);
  }
  return output;

}

export { findRepeatedSequences };
