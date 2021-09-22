'use strict'
let date = new Date()
let weekDayNunber= date.getDay()
let nameOfDay;
let quote;

switch(weekDayNunber){
    case 0:
        nameOfDay = 'Sunday'
        quote = 'Lets go to church'
        break;
    case 1:
        nameOfDay = 'Monday'
        quote = 'Time for office'
        break;
    case 2:
        nameOfDay = 'Tusday'
        quote = 'Meeting day'
        break;
    case 3:
        nameOfDay = 'Wednesday'
        quote = 'Time for workshop'
        break;
    case 4:
        nameOfDay = 'Thursday'
        quote = 'One day to weekend'
        break;
    case 5:
        nameOfDay = 'Friday'
        quote = 'Weekend Mood'
        break;
    case 6:
        nameOfDay = 'Saturday'
        quote = 'Party time'
        break;
        
}

let weekdayDiv = document.getElementById('weekday');
weekdayDiv.innerHTML = `${nameOfDay}`;

//Display quote
let quoteElement = document.getElementById('phrase');
quoteElement.innerHTML = `${quote}`