function checkCashRegister(price, cash, cid) {
  
    let nominals = {'ONE HUNDRED': 100,
                    'TWENTY': 20,
                    'TEN': 10,
                    'FIVE': 5,
                    'ONE': 1,
                    'QUARTER': 0.25,
                    'DIME': 0.1,
                    'NICKEL': 0.05,
                    'PENNY': 0.01};
  
    // Calculating amount of change that must be returned
    let changeSum = cash - price ;
    let changeSumCheck = changeSum;
  
    // Preparing variables to return from a function
    let change = [];
    let status = '';
  
    // Sum of money in cash-in-drawer
    let cidSum = 0;
  
    // Reverse order of nominals form the input 'cid' array
    let reversedCid = cid.filter(elem => elem[1] !== 0).reverse();
  
    // Looping through the 'reversedCid' list
    for (let i in reversedCid) {
      // Getting name of the current (starting from the greatest value) nominal name form the list
      let curr = reversedCid[i][0];
      // Getting the total value of the current nominal form the list
      let currSum = reversedCid[i][1];
  
      // Summing all money there is in the drawer
      cidSum += currSum;
  
      // Preparing variable to calulate how much money must be returned in the nominal
      let amount = 0;
  
      // Until the value of money to return is greater or equal then a nominal 
      // and the nominal exist in cash-in-drawer
      while (changeSum >= nominals[curr] && currSum > 0) {
  
        amount += nominals[curr];
        changeSum -= nominals[curr];
        currSum -= nominals[curr];
        
        changeSum = Math.round(changeSum*100)/100;
  
  
      }
  
      // If there is a nominal in drawer to pay out
      if (amount !== 0) {
        // The information about nominal and value is pushed to the array called 'change'
        change.push([curr, amount]);
      }
    }
  
      // If there is no enough money in the drawer to pay out change
      if (changeSum > 0) {
        status = 'INSUFFICIENT_FUNDS';
        change = [];
  
        // If there is enough money to pay back the change, 
        // but then the drawer will be left with no additional change
      } else if (changeSum == 0 && changeSumCheck == cidSum) {
        status = 'CLOSED';
        change = cid;
        // If there is change and after getting it out from the drawer
        // there will be some moeny left
      } else {
        status = 'OPEN';
      }
  
    console.log({ 'status': status, 'change': change })
    return { 'status': status, 'change': change };
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) //should return an object.
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) //should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "INSUFFICIENT_FUNDS", change: []}.
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "INSUFFICIENT_FUNDS", change: []}.
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.