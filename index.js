// expecting time to be a string in the format like '8:15' or '12:30'


const numberMap = {
  0: "o'clock",
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'quarter',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  21: 'twenty one',
  22: 'twenty two',
  23: 'twenty three',
  24: 'twenty four',
  25: 'twenty five',
  26: 'twenty six',
  27: 'twenty seven',
  28: 'twenty eight',
  29: 'twenty nine',
  30: 'half',
}



// '12:30'

function convertTimeToWords(time) {

  let [hrs, mins] = time.split(":")

  hrs = parseInt(hrs);
  mins = parseInt(mins);

  if (hrs === 0 && mins ===0) {
    return 'midnight';
  }

  if (hrs === 12 && mins ===0) {
    return 'midday';
  }




  let hrsToTextNumber = (mins > 30) ?  hrs +1 : hrs;

  let minsToTextNumber = (mins > 30 ) ? (60 -mins) : mins;


  const hrsWord = numberMap[hrsToTextNumber];
  const minsWord =  numberMap[minsToTextNumber];


  console.log(`=================hrs ${hrsWord} mins is ${minsWord}`)


  if (mins ===0) {
    return `${hrsWord} ${minsWord}`
  }


  const middleWord =  mins <= 30 ? 'past' : 'to';

  const finalWord =  `${minsWord} ${middleWord} ${hrsWord}`

  // TODO: real code goes here!


  return finalWord;
  // return 'half past eight';
}

module.exports = { convertTimeToWords };