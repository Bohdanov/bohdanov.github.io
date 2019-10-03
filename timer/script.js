var endDate = new Date(2021, 0, 18, 8, 0);
var startDate = new Date(2018, 9, 18, 8, 0);
var totalMiliseconds = (endDate-startDate);
var tim1 = document.getElementById('t1');
var tim2 = document.getElementById('t2');
function  altTimer(){
  var myDate = new Date();
  var differenceInTime = (totalMiliseconds-(endDate-myDate));
  var percentageAlt = (100*differenceInTime)/totalMiliseconds;
  tim1.innerHTML = "Alternative progress: " + percentageAlt.toPrecision(9);
  var weeksToFin = ((totalMiliseconds - differenceInTime) / (1000 * 60 * 60 * 24 * 7));
  var daysToFin = ((totalMiliseconds - differenceInTime) / (1000 * 60 * 60 * 24));
  var hoursToFin = ((totalMiliseconds - differenceInTime) / (1000 * 60 * 60));
  var minutesToFin = ((totalMiliseconds - differenceInTime) / (1000 * 60));
  var secondsToFin = ((totalMiliseconds - differenceInTime) / (1000));
  tim2.innerHTML = "Time: " + Math.floor(weeksToFin) + " weeks, " + Math.floor(daysToFin) + " days, " + Math.floor(hoursToFin) + " hours, " + Math.floor(minutesToFin) + " minutes, " + Math.floor(secondsToFin) + " seconds";
  }
var diff = setInterval(altTimer, 50);
