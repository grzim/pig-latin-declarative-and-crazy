import {addEnding, not, pipe, process, startsWithVowel, transformWord, when} from "./functions";

const pigLatin = process(
    when(startsWithVowel)(addEnding('way')),
    when(not(startsWithVowel))(pipe(transformWord, addEnding('ay')))
);

/*
  console.log(pigLatin("Child") === 'Ildchay');
  console.log(pigLatin("Happy") === 'Appyhay');
  console.log(pigLatin("Awesome") === "Awesomeway");
*/
