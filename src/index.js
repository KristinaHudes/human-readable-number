module.exports = function toReadable(number) {
  const units = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  const hundredValue = Math.floor(number / 100);
  const restValue = number % 100;
  const hundredString = `${units[hundredValue]} hundred`;

  const getBelowHundredValue = (value) => {
    if (value < 10) {
      return units[value];
    }

    if (value < 20) {
      return teens[value - 10];
    }

    const tenValue = Math.floor(value / 10);
    const unitValue = value % 10;

    if (unitValue === 0) {
      return tens[tenValue];
    }

    return `${tens[tenValue]} ${units[unitValue]}`;
  };

  if (number < 100) {
    return getBelowHundredValue(number);
  }

  if (restValue === 0) {
    return hundredString;
  }

  return `${hundredString} ${getBelowHundredValue(restValue)}`;
};
