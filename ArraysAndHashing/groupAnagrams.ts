import { isAnagram } from './validAnagram';

function groupAnagrams(strs: string[]): string[][] {
  const hash: {
    [key: string]: string[];
  } = {};

  strs.forEach(item => {
    let doesExist = false;
    Object.keys(hash).forEach((key) => {
      if (isAnagram(item, key)) {
        hash[key].push(item);
        doesExist = true;
      }
    });

    if (!doesExist) {
      hash[item] = [item];
    }
  });

  return [...Object.keys(hash).map((k) => hash[k])];
}


export { groupAnagrams };
