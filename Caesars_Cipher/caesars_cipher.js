function rot13(str) {
  // Creating a string storing all alphabet in order (UPPERCASE)
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Creating a string storing all alphabet in order (LOWERCASE)
  let alphabet2 = alphabet.toLowerCase();
  // Preparing the variable where the translated result will be stored
  let decodedString = "";

  // Looping through the letters from the input string
  for (let i = 0; i<str.length; i++) {
    // Getting the index of the letters within 'alphabet' string
    let index = alphabet2.indexOf(str[i].toLowerCase());

    // If the letter exists in the 'alphabet' string
    if (index != -1) {
    // Adding decoded letter to the 'decodedString' variable
    decodedString += alphabet[(index + 13) % alphabet2.length];

    // If letter/symbol does not exist in the 'alphabet' variable
    // copy the same symbol to the decoded string
    } else {
      decodedString += str[i];
    }
  }
  return decodedString;
}


rot13("SERR PBQR PNZC") //should decode to the string FREE CODE CAMP
rot13("SERR CVMMN!") //should decode to the string FREE PIZZA!
rot13("SERR YBIR?") //should decode to the string FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") //should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.