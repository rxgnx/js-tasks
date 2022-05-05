const vowels = ["а", "А", "е", "Е", "и", "И", "о", "О", "у", "У", "э", "Э", "ю", "Ю", "я", "Я"];

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
