import React from "react";
import Game1Product from "./Game1Product";
function Products() {
  let prouctsList = [
    {
      qno: "1. ",
      q:
        "One day Kerry celebrated her birthday. Two days later her older twin brother, Terry, celebrated his birthday. How could this be?",
      ans:
        "At the time she went into labor, the mother of the twins was travelling by boat. The older twin, Terry, was born first, early on March 1st. The boat then crossed the International Date line and Kerry, the younger twin, was born on February the 28th. In a leap year the younger twin celebrates her birthday two days before her older brother. Another option suggested by one of our visitors is that although he was her  twin brother, he could have been the twin of another sibling."
    },
    {
      qno: "2. ",
      q:
        "Manhole Covers: Why is it better to have round manhole covers than square ones?",
      ans:
        "A square manhole cover can be turned and dropped down the diagonal of the manhole. A round manhole cannot be dropped down the manhole. >So for safety and practicality, all manhole covers should be round."
    },
    {
      qno: "3. ",
      q:
        "The Deadly Party: A man went to a party and drank some of the punch. He then left early. Everyone else at the party who drank the same punch were poisoned and became very sick. Why did the man not get sick?",
      ans:
        "The poison in the punch came from the ice cubes. When the man drank the punch the ice was fully frozen. Gradually it melted, poisoning the punch. Alternative solution: He could have poisoned the punch after drinking some of it."
    },
    {
      qno: "4. ",
      q:
        "Trouble with Sons: A woman had two sons who were born on the same hour of the same day of the same year. But they were not twins. How could this be so?",
      ans:
        "They were two of a set of triplets (or quadruplets etc.) Note: Another visitor added that one son could be adopted."
    },
    {
      qno: "5. ",
      q: "Do they have a 4th of July in England?",
      ans: "Yes, they have a 4th of July, but they don't celebrate that day!"
    },
    {
      qno: "6. ",
      q: "How many birthdays does the average man have?",
      ans: "One birthday -- the day he was born; but he celebrates it yearly."
    },
    {
      qno: "7. ",
      q: "Some months have 31 days; how many have 28?",
      ans: "All of them (12) have AT LEAST 28 days."
    },
    {
      qno: "8. ",
      q: "Why can't a man living in the USA be buried in Canada?",
      ans: "Because he isn't dead if he's LIVING in the U.S."
    },
    {
      qno: "9. ",
      q:
        "There's one sport in which neither the spectators nor the participants know the score or the leader until the contest ends. What is it?",
      ans: "Boxing.."
    },
    {
      qno: "10. ",
      q: "What famous North American landmark is constantly moving backward?",
      ans: "What famous North American landmark is constantly moving backward?"
    },
    {
      qno: "11. ",
      q: "What famous North American landmark is constantly moving backward?",
      ans: "Strawberry"
    },
    {
      qno: "12. ",
      q:
        "In many liquor stores, you can buy pear brandy, with a real pear inside the bottle. The pear is whole and ripe, and the bottle is genuine; it hasn't been cut in any way. How did the pear get inside the bottle?",
      ans:
        "The pear grew inside the bottle. The bottles are placed over pear buds when they are small, and are wired in place on the tree. The bottle is left in place for the whole growing season. When the pears are ripe, they are snipped off at the stems."
    },
    {
      qno: "13. ",
      q:
        "Only four words in Standard English begin with the letters dw. They are all common. Name two of them.",
      ans: "Dwarf, dwell, dwindle, and dweeb"
    },
    {
      qno: "14. ",
      q:
        "There are fourteen punctuation marks in English grammar. Can you name half of them?",
      ans:
        "Period, comma, colon, semicolon, dash, hyphen, apostrophe, question mark, exclamation point, quotation marks, brackets parenthesis, braces, and ellipses."
    },
    {
      qno: "15. ",
      q:
        "It's the only vegetable or fruit that is never sold frozen, canned, processed, cooked, or in any other form but fresh. What is it?",
      ans: "Lettuce."
    }
  ];
  return (
    <div className="text-center">
      <p className="display-4 text-info">Brainteaser Quiz</p>
      <div className="d-flex flex-column">
        {prouctsList.map((productObj) => (
          <Game1Product productObj={productObj} />
        ))}
      </div>
    </div>
  );
}

export default Products;
