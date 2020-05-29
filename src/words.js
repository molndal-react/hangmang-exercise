const SWEDISH_WORD = [
  "Diagram",
  "Vittnen",
  "Glaciär",
  "Blomvas",
  "Staples",
  "Sist",
  "Inbjudna",
  "Raket",
  "Periskop",
  "Dator",
];

const randomWord = () => {
  return SWEDISH_WORD[Math.floor(Math.random() * SWEDISH_WORD.length)];
};

const randomWord1 = () => {
  return SWEDISH_WORD[Math.floor(Math.random() * SWEDISH_WORD.length)];
};

export { randomWord, randomWord1 };
