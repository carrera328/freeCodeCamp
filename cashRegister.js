function checkCashRegister(price, cash, cid) {
  let change = {
    status: "",
    change: []
  };
  
  let master = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  }; 

  let monies = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  } 


  let obj = {
    "PENNY": 0.0,
    "NICKEL": 0.0,
    "DIME": 0.0,
    "QUARTER": 0.0,
    "ONE": 0,
    "FIVE": 0,
    "TEN": 0,
    "TWENTY": 0,
    "ONE HUNDRED": 0    
  }

  cid = cid.reverse();
  
  for (let i = 0; i < cid.length; i++) {
    monies[cid[i][0]] = cid[i][1];
  }

  let changeOwed = (cash - price).toFixed(2);
  changeOwed = +(changeOwed);
  
  let totalInDrawer = 0;

  for (let i = 0; i < cid.length; i++) {
    totalInDrawer += cid[i][1];
  }

  console.log(totalInDrawer);

  if (totalInDrawer < changeOwed) {
    return {
            status: "INSUFFICIENT_FUNDS", 
            change: []
            }; 
  }

  //if (totalInDrawer === changeOwed) return {}
  console.log(`CHANGED OWED: ${changeOwed}`);


  if (totalInDrawer - changeOwed === 0) {
    console.log
    return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]};
  }
  // TESTING

  //console.log(changeOwed /  8); // greater than means it fits
  
  // checks whether or not change remaining fits in a denomination

  // if (changeOwed / master.DIME >= 1) {
  //   console.log('changedOwed is divisible by the following denomination: ' + changeOwed / master.DIME)
  // } else {
  //   console.log('change owed does not fit: ' + changeOwed / master.DIME);
  // }

  // end check denomination

  // check change owed and then assigng a denomination based on largest available denom that fits

  // assign the 
  //console.log(monies);
  
  let currentDenomination = '';
  let denomValue = 0;
  let multiplyer = 0;

  for (let i = 0; i < cid.length; i++) {
    multiplyer = Math.floor(changeOwed / master[cid[i][0]]);
    currentDenomination = cid[i][0];
    denomValue = master[cid[i][0]];
    if ((changeOwed / denomValue ) >= 1) {
      if (denomValue * multiplyer > monies[currentDenomination]) {
        console.log(monies[currentDenomination]);
        changeOwed = changeOwed - (monies[currentDenomination]);
        console.log('#### ' + changeOwed);
        change.change.push([currentDenomination, (monies[currentDenomination])]);
      } else {
        if (changeOwed == totalInDrawer) {
          change.status = "CLOSED";
        } else {
          change.status = "OPEN";
        }
        
        //console.log('COIN/BILL VALUE: ' + denomValue);
        console.log('OLD CHANGE OWED: ' + changeOwed);
        changeOwed = (changeOwed - (denomValue * multiplyer)).toFixed(3);
        changeOwed = +(changeOwed);
        console.log('NEW CHANGE OWED: ' + changeOwed);
        change.change.push([currentDenomination, (denomValue * multiplyer)]);
      }
    } 
    //console.log('$ ' + currentDenomination);
    
  }

  console.log('$' + changeOwed);
  if (changeOwed > 0) {
    return {
      status: "INSUFFICIENT_FUNDS", change: []
    }
  }
  console.log(change);
  return change;
}

// checkCashRegister(19.17, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

//  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])