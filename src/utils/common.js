const getRandomBooleanValue = () => Math.random() > 0.5;

const getRandomIntegerNumber = (min, max) => min + Math.floor(Math.random() * (max - min));

const getRandomItem = (items) => {
  const randomIndex = getRandomIntegerNumber(0, items.length);

  return items[randomIndex];
};

const reshuffle = (data, maxNumber) => {
  const shuffle = data.slice().sort(() => Math.random() - 0.5);
  shuffle.length = getRandomIntegerNumber(1, maxNumber);
  return shuffle;
};

export {
  getRandomBooleanValue,
  getRandomIntegerNumber,
  getRandomItem,
  reshuffle,
};
