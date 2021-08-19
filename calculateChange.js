const calculateChange = function(total, cash) {
    let twenty = 0;
    let ten = 0;
    let five =0;
    let two = 0;
    let one = 0;
    let quarter = 0;
    let dime = 0;
    let nickel = 0;
    let penny = 0;

    let change = cash - total;

    while ( change > 0) {
       if ( change - 2000 >= 0 ) {
         twenty++;
         change -= 2000;
       }
       else if ( change - 1000 >= 0 ) {
         ten++;
         change -= 1000;
       }
       else if ( change - 500 >= 0) {
          five++;
          change -= 500;
       }
       else if ( change - 200 >= 0 ) {
         two++;
         change -= 200;
       }
       else if ( change - 100 >= 0 ) {
         one++;
         change -= 100;
       } 
       else if ( change - 25 >= 0 ) {
         quarter++;
         change -= 25;
       }
       else if ( change - 10 >= 0 ) {
         dime++;
         change -= 10;
       }
       else if ( change - 5 >= 0) {
         nickel++;
         change -= 5;
       }
       else {
         penny++;
         change -= 1;
       }
    }
    return getChangeObject(twenty,ten,five,two,one,quarter,dime,nickel,penny);
};

const getChangeObject = function (twenty, ten, five, two, one, quarter, dime, nickel, penny) {
    Object.keys(arguments).forEach(key => {
      if(arguments[key] == 0) delete arguments[key];
    });
    let change = {};

    for (let i =0; i < arguments.length; i++) {
      if( typeof arguments[i] !== "undefined") {
        switch (i) {
          case 0:
            change.twentyDollar = arguments[i];
            break;
          case 1: 
            change.tenDollar = arguments[i];
            break;
          case 2: 
            change.fiveDollar = arguments[i];
            break;
          case 3:
            change.twoDollar = arguments[i];
            break;
          case 4: 
            change.oneDollar = arguments[i];
            break;
          case 5: 
            change.quarter = arguments[i];
            break;
          case 6:
            change.dime = arguments[i];
            break;
          case 7: 
            change.nickel = arguments[i];
            break;
          case 8: 
            change.penny = arguments[i];
            break;
        }
      }
    }
    return change;
}


console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));