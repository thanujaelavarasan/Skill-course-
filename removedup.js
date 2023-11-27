function removeDuplicates(inputString) {
    let uniqueChars = [];
    for (let char of inputString) {
      if (!uniqueChars.includes(char)) {
        uniqueChars.push(char);
      }
    }
    return uniqueChars.join('');
  }
  
  let originalString = "Blockckckuih";
  let uniqueString = removeDuplicates(originalString);
  console.log(uniqueString);
  