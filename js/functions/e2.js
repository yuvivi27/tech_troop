
function countWords(sentence){
  
  const wordCounts = {};

  function addToCounter(word){
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  }

  const cleanArray = cleanText(sentence);
  for(const word of cleanArray){
    addToCounter(word);
  }
  return wordCounts;
}

function cleanText(sentence){
  const specialChars = [",", ".", "'", '"', "?", "!", ";"];
  sentence = sentence.toLowerCase();
  for (const char of specialChars){
    sentence = sentence.split(char).join(" ")
  }
  return sentence.split(" "); 
}

const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."

console.log(countWords(story));