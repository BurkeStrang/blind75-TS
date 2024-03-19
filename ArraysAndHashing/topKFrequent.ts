function topKFrequent(nums: number[], k: number): number[] | undefined {
  const hash: { [key: number]: number } = {};

  const freq: number[][] = Array.apply(null, Array(nums.length + 1)).map(() => []);

  nums.forEach((item: number) => {
    if (hash[item]) {
      hash[item]++;
    } else {
      hash[item] = 1;
    }
  });

  Object.keys(hash).forEach((item: string) => {
    const key: number = Number(item);
    const value: number = hash[key];
    freq[value].push(key);
  });

  const res: number[] = [];

  for (let i: number = freq.length - 1; i >= 0; i--) {
    const element: number[] = freq[i];
    for (let j: number = 0; j < element.length; j++) {
      const second: number = element[j];
      res.push(second);
      if (res.length === k) {
        return res;
      }
    }
  }
  return undefined; // Return undefined in case k is greater than the number of unique elements
}

export { topKFrequent }
