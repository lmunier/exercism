//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const str = message.trim();
  
  const isQuestionning = str.at(-1) === '?';
  const isSilence = str === '';
  const isYelling = /[A-Z]/.test(str) && !/[a-z]/.test(str);;
  
  if (isQuestionning) {
    return isYelling ? "Calm down, I know what I'm doing!" : "Sure.";
  } else if (isYelling) {
    return "Whoa, chill out!"
  } else if (isSilence) {
    return "Fine. Be that way!";
  }

  return "Whatever.";
};
