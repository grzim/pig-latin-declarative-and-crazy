export const not = f => x => !f(x);
export const when = predicate => f => x => predicate(x) ? f(x) : false;
export const pipe = (...args) => x => args.reduce((acc, f) => f(acc), x);
export const process = (...funs) => x => funs.find(f => f(x))(x);

export const vowels = 'aeiouy';
export const isVowel = letter => vowels.includes(letter.toLowerCase());
export const startFromUpper = word => word[0].toUpperCase() + word.slice(1).toLowerCase();
export const moveLettersToEnd = (word, i) => word.slice(i) + word.slice(0, i);
export const transformWord = word => startFromUpper(moveLettersToEnd(word, findHowManyLettersToMove(word)));
export const startsWithVowel = word => isVowel(word[0]);
export const addEnding = ending => word => word + ending;
export const findHowManyLettersToMove = word => isVowel(word[1]) ? 1 : 2;
