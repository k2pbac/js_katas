const talkingCalendar = function(date) {
  let newDate = date.split("/")

  let year = newDate[0];
  let month = newDate[1];
  let day = newDate[2];


  if (day <= 9) { 
    day = day.replaceAll("0","");
  }
  if (month <= 9) {
    month = month.replaceAll("0","");
  }

  if ( day == 1 || day == 21 ) {
    day += "st";
  }
  else if (day == 2 || day == 22) {
    day += "nd";
  }
  else if( day == 3 || day == 23) {
    day += "rd";
  }
  else if(day >= 4 && day <= 20 || day >= 24 && day <= 30) {
    day += "th";
  }

  switch (month) {
    case "1": 
      month = "January";
      break;
    case "2": 
      month = "February";
      break;
    case "3":
      month = "March";
      break;
    case "4":
      month = "April";
      break;
    case "5":
      month = "May";
      break;
    case "6": 
      month = "June";
      break;
    case "7": 
      month = "July";
      break;
    case "8": 
      month = "August";
      break;
    case "9": 
      month = "September";
      break;
    case "10": 
      month = "October";
      break;
    case "11": 
      month = "November";
      break;
    case "12": 
      month = "December";
      break;
  }



  return `${month} ${day}, ${year}`;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));