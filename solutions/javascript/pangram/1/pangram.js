//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ALPHABET_LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const isPangram = (sentence) => {
  let allAlphabet = ALPHABET_LOWERCASE;

  sentence.toLowerCase().split('').forEach(char => {
    allAlphabet = allAlphabet.filter(item => item !== char);
  });

  return allAlphabet.length === 0;
};
