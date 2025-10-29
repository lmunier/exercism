//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const COMPLEMENT = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
};

export const toRna = (dnaLetters) => dnaLetters.replace(/./g, letter => COMPLEMENT[letter]);
