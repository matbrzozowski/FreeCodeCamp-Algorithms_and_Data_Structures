function telephoneCheck(str) {

    var cleanPhoneNumber = str.replace(/\D/g, '');
 
    if (cleanPhoneNumber.length == 10) {
      if (str[3] == "-" & str[7] == "-") {return true}
      else if (str[0] =="(" & str[4] == ")" & str[8] == "-") {return true}
      else if (str[0] =="(" & str[4] == ")" & str[5] == " "& str[9] == "-") {return true}
      else if (str[3] == " " & str[7] == " ") {return true} 
      else if (str.length == 10) {return true}
      else {return false }
 
    } else if (cleanPhoneNumber.length == 11) {
      if (str[0] == 1) {
 
        if (str[5] == "-" & str[9] == "-") {return true}
         else if (str[1] =="(" & str[5] == ")" & str[9] == "-") {return true}
         else if (str[2] =="(" & str[6] == ")" & str[7] == " "& str[11] == "-") {return true}
         else if (str[5] == " " & str[9] == " ") {return true} 
         else if (str.length == 10) {return true}
         else {return false }
 
      } else {return false }
 
 
    } else {
      return false
    }
 }
     
   
 
 telephoneCheck("555-555-5555") //should return a boolean.
 telephoneCheck("1 555-555-5555") //should return true.
 telephoneCheck("1 (555) 555-5555") //should return true.
 telephoneCheck("5555555555") //should return true.
 telephoneCheck("555-555-5555") //should return true.
 telephoneCheck("(555)555-5555") //should return true.
 telephoneCheck("1(555)555-5555") //should return true.
 telephoneCheck("555-5555") //should return false.
 telephoneCheck("5555555") //should return false.
 telephoneCheck("1 555)555-5555") //should return false.
 telephoneCheck("1 555 555 5555") //should return true.
 telephoneCheck("1 456 789 4444") //should return true.
 telephoneCheck("123**&!!asdf#") //should return false.
 telephoneCheck("55555555") //should return false.
 telephoneCheck("(6054756961)") //should return false.
 telephoneCheck("2 (757) 622-7382") //should return false.
 telephoneCheck("0 (757) 622-7382") //should return false.
 telephoneCheck("-1 (757) 622-7382") //should return false.
 telephoneCheck("2 757 622-7382") //should return false.
 telephoneCheck("10 (757) 622-7382") //should return false.
 telephoneCheck("27576227382") //should return false.
 telephoneCheck("(275)76227382") //should return false.
 telephoneCheck("2(757)6227382") //should return false.
 telephoneCheck("2(757)622-7382") //should return false.
 telephoneCheck("555)-555-5555") //should return false.
 telephoneCheck("(555-555-5555") //should return false.
 telephoneCheck("(555)5(55?)-5555") //should return false.
 telephoneCheck("55 55-55-555-5") //should return false.
 telephoneCheck("11 555-555-5555") //should return false.