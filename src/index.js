const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
  '**********': ' ', // added manually or via .replace(/\*{10}/

};

function decode(expr) {
  let arr = [];
  let arrLength = expr.length; // due to +10 as step
  for (let i = 0; i < arrLength;) {
    arr.push(expr.slice(i, i + 10));
    i += 10;
  }
  arr = arr.map(item => { // !
    item = item.replace(/^0+/, '')
    .replace(/10/g, '.')
    .replace(/11/g, '-');
    return MORSE_TABLE[item];
  })
  return arr.join('');
}

module.exports = {
  decode
}
