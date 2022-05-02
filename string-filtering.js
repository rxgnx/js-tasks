const vowels = ["а", "е", "и", "о", "у", "э", "ю", "я"];

const string = "Привет! Как дела?";

const getVowels = (string) => {
  let result = "";
  for (let i = 0; i < string.length; i+=1) {
    if (vowels.includes(string[i])) {
      result = result + string[i];
    }
  }
  return result;
};

console.log(getVowels(string));
