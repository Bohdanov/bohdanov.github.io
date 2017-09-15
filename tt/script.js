"use strict";
var date = new Date();
var day = date.getDay();
var month = date.getMonth();
var nowDay = date.getDate();
var uaDay;
var uaMonth;
var weekNum;
var starth = [8,9,11,13,14,16,17];
var endh = [9,11,12,14,16,17,19];
var startm = [20,50,30,0,40,10,40];
var endm = [40,10,50,20,0,30,0];
var currPair;
var PairTime;
/*Test*/
var h = date.getHours();
var m = date.getMinutes();
var	s = date.getSeconds();
switch (h){
case 8:
	if (startm[0]<=m) {currPair=1;} else {currPair=0;};
	break;
case 9:
	if (endm[0]>=m) {currPair=1;} else {
	if (startm[1]<=m) {currPair=2;} else{currPair=0;}};
	break;
case 10:
	currPair=2;
	break;
case 11:
	if (endm[1]>=m) {currPair=2;} else {
	if (startm[2]<=m) {currPair=3;} else{currPair=0;}};
	break;
case 12:
	if (endm[2]>=m) {currPair=3;} else{currPair=0;};
	break;
case 13:
	currPair=4;
	break;
case 14:
	if (endm[3]>=m) {currPair=4;} else{
	if (startm[4]<=m) {currPair=5;} else{currPair=0;}};
	break;
case 15:
currPair=5;
	break;
case 16:
	if (startm[5]>=m) {currPair=6;} else {currPair=0;};
	break;
case 17:
	if (endm[5]>=m) {currPair=6;} else {
	if (startm[6]<=m) {currPair=7;} else{currPair=0;}};
	break;
case 18:
	currPair=7;
	break;
default:
	currPair=9;
	break;
}
switch (currPair)
{
case 0:
document.getElementById("p1").innerHTML = 'Перерва';
break;
case 1:
PairTime = 80-(((h - starth[0]) * 60)+(m - startm[0]));
document.getElementById("p1").innerHTML = 'Йде перша пара. До кінця - ' + PairTime + ' хвилин';
break;
case 2:
PairTime = 80-(((h - starth[1]) * 60)+(m - startm[1]));
document.getElementById("p1").innerHTML = 'Йде друга пара. До кінця - ' + PairTime + ' хвилин';
break;
case 3:
PairTime = 80-(((h - starth[2]) * 60)+(m - startm[2]));
document.getElementById("p1").innerHTML = 'Йде третя пара. До кінця - ' + PairTime + ' хвилин';
break;
case 4:
PairTime = 80-(((h - starth[3]) * 60)+(m - startm[3]));
document.getElementById("p1").innerHTML = 'Йде четверта пара. До кінця - ' + PairTime + ' хвилин';
break;
case 5:
PairTime = 80-(((h - starth[4]) * 60)+(m - startm[4]));
document.getElementById("p1").innerHTML = "Йде п'ята пара. До кінця - " + PairTime + ' хвилин';
break;
case 6:
PairTime = 80-(((h - starth[5]) * 60)+(m - startm[5]));
document.getElementById("p1").innerHTML = 'Йде шоста пара. До кінця - ' + PairTime + ' хвилин';
break;
case 7:
PairTime = 80-(((h - starth[6]) * 60)+(m - startm[6]));
document.getElementById("p1").innerHTML = 'Йде сьома пара. До кінця - ' + PairTime + ' хвилин';
break;
case 9:
document.getElementById("p1").innerHTML = 'Пари ще не розпочались';
break;}
/*Test*/
setInterval(function () {
var h = date.getHours();
var m = date.getMinutes();
var	s = date.getSeconds();
switch (h){
case 8:
	if (startm[0]<=m) {currPair=1;} else {currPair=0;};
	break;
case 9:
	if (endm[0]>=m) {currPair=1;} else {
	if (startm[1]<=m) {currPair=2;} else{currPair=0;}};
	break;
case 10:
	currPair=2;
	break;
case 11:
	if (endm[1]>=m) {currPair=2;} else {
	if (startm[2]<=m) {currPair=3;} else{currPair=0;}};
	break;
case 12:
	if (endm[2]>=m) {currPair=3;} else{currPair=0;};
	break;
case 13:
	currPair=4;
	break;
case 14:
	if (endm[3]>=m) {currPair=4;} else{
	if (startm[4]<=m) {currPair=5;} else{currPair=0;}};
	break;
case 15:
currPair=5;
	break;
case 16:
	if (startm[5]>=m) {currPair=6;} else {currPair=0;};
	break;
case 17:
	if (endm[5]>=m) {currPair=6;} else {
	if (startm[6]<=m) {currPair=7;} else{currPair=0;}};
	break;
case 18:
	currPair=7;
	break;
default:
	currPair=9;
	break;
}
switch (currPair)
{
case 0:
document.getElementById("p1").innerHTML = 'Перерва';
break;
case 1:
PairTime = 80-(((h - starth[0]) * 60)+(m - startm[0]));
document.getElementById("p1").innerHTML = 'Йде перша пара. До кінця - ' + PairTime + ' хвилин';
break;
case 2:
PairTime = 80-(((h - starth[1]) * 60)+(m - startm[1]));
document.getElementById("p1").innerHTML = 'Йде друга пара. До кінця - ' + PairTime + ' хвилин';
break;
case 3:
PairTime = 80-(((h - starth[2]) * 60)+(m - startm[2]));
document.getElementById("p1").innerHTML = 'Йде третя пара. До кінця - ' + PairTime + ' хвилин';
break;
case 4:
PairTime = 80-(((h - starth[3]) * 60)+(m - startm[3]));
document.getElementById("p1").innerHTML = 'Йде четверта пара. До кінця - ' + PairTime + ' хвилин';
break;
case 5:
PairTime = 80-(((h - starth[4]) * 60)+(m - startm[4]));
document.getElementById("p1").innerHTML = "Йде п'ята пара. До кінця - " + PairTime + ' хвилин';
break;
case 6:
PairTime = 80-(((h - starth[5]) * 60)+(m - startm[5]));
document.getElementById("p1").innerHTML = 'Йде шоста пара. До кінця - ' + PairTime + ' хвилин';
break;
case 7:
PairTime = 80-(((h - starth[6]) * 60)+(m - startm[6]));
document.getElementById("p1").innerHTML = 'Йде сьома пара. До кінця - ' + PairTime + ' хвилин';
break;
case 9:
document.getElementById("p1").innerHTML = 'Пари ще не розпочались';
break;}
}, 10000);
function f(){
var e = document.getElementById('tt1').style.display;
if( e == 'none' ){
document.getElementById('tt1').style.display = 'block';
}
else document.getElementById('tt1').style.display = 'none';
}
switch(month){
case 8:
if ((nowDay >= 11 && nowDay <= 17)||(nowDay >= 25 && nowDay <= 30))
{weekNum = 1;} else weekNum = 2;
uaMonth = 'вересня';
break;
case 9:
if ((nowDay == 1)||(nowDay >= 9 && nowDay <= 15)||(nowDay >= 23 && nowDay <= 29))
{weekNum = 1;} else weekNum = 2;
uaMonth = 'жовтня';
break;
case 10:
if ((nowDay >= 6 && nowDay <= 12)||(nowDay >= 20 && nowDay <= 26))
{weekNum = 1;} else weekNum = 2;
uaMonth = 'листопада';
break;
case 11:
if ((nowDay >= 4 && nowDay <= 10)||(nowDay >= 18 && nowDay <= 24))
{weekNum = 1;} else weekNum = 2;
uaMonth = 'грудня';
break;
}
switch(day)
{
case 1:
uaDay = 'понеділок';
if (weekNum == 1) {
document.getElementById("pr6").innerHTML = 'СПЗ-Linux(лаби)';
document.getElementById("at6").innerHTML = '312';
document.getElementById("le6").innerHTML = 'Яковлєва І.Д.';
} else
{
document.getElementById("pr6").innerHTML = 'VHDL(лаби)';
document.getElementById("at6").innerHTML = '312';
document.getElementById("le6").innerHTML = 'Яковлєва І.Д.';
};
document.getElementById("pr7").innerHTML = 'VHDL';
document.getElementById("at7").innerHTML = '221';
document.getElementById("le7").innerHTML = 'Яковлєва І.Д.';
break;
case 2:
uaDay = 'вівторок';
if (weekNum == 2) {
document.getElementById("pr2").innerHTML = 'Криптографія(лаби)';
document.getElementById("at2").innerHTML = '312';
document.getElementById("le2").innerHTML = 'Вацек Д.О.';
document.getElementById("pr3").innerHTML = 'Криптографія(практика)';
document.getElementById("at3").innerHTML = '317';
document.getElementById("le3").innerHTML = 'Іванущак Н.М.';
};
document.getElementById("pr4").innerHTML = 'Криптографія';
document.getElementById("at4").innerHTML = '224';
document.getElementById("le4").innerHTML = 'Іванущак Н.М.';
document.getElementById("pr5").innerHTML = 'English';
document.getElementById("at5").innerHTML = '211';
document.getElementById("le5").innerHTML = 'Козубська С.В.';
break;
case 3:
uaDay = 'середа';
if (weekNum == 1) {
document.getElementById("pr3").innerHTML = 'Пар. і розп. обч.';
document.getElementById("at3").innerHTML = '106';
document.getElementById("le3").innerHTML = 'Лісовенко І.Д.';
document.getElementById("pr5").innerHTML = 'СПЗ-Linux';
document.getElementById("at5").innerHTML = '106';
document.getElementById("le5").innerHTML = 'Яковлєва І.Д.';
} else
{
document.getElementById("pr3").innerHTML = 'Бухоблік';
document.getElementById("at3").innerHTML = '106';
document.getElementById("le3").innerHTML = 'Лісовенко І.Д.';
};
document.getElementById("pr2").innerHTML = 'Комп. мережі';
document.getElementById("at2").innerHTML = '311';
document.getElementById("le2").innerHTML = 'Рощупкіна Н.В.';
document.getElementById("pr4").innerHTML = 'Java(лаби)';
document.getElementById("at4").innerHTML = '311';
document.getElementById("le4").innerHTML = 'Макарчук Р.І.';
break;
case 4:
uaDay = 'четвер';
if (weekNum == 1) {
document.getElementById("pr2").innerHTML = 'Пар. і розп. обч.(лаби)';
document.getElementById("at2").innerHTML = '313';
document.getElementById("le2").innerHTML = 'Лісовенко І.Д.';
document.getElementById("pr3").innerHTML = 'Автоматиз. т.пр.(лаби)';
document.getElementById("at3").innerHTML = '302';
document.getElementById("le3").innerHTML = 'Герман І.І.';
};
document.getElementById("pr4").innerHTML = 'Автоматиз. т. пр.';
document.getElementById("at4").innerHTML = '106';
document.getElementById("le4").innerHTML = 'Воробець О.І.';
document.getElementById("pr5").innerHTML = 'Java';
document.getElementById("at5").innerHTML = '224';
document.getElementById("le5").innerHTML = 'Макарчук Р.І.';
break;
case 5:
uaDay = "п'ятниця";
document.getElementById("pr4").innerHTML = 'Комп. мережі';
document.getElementById("at4").innerHTML = '221';
document.getElementById("le4").innerHTML = 'Олар О.Я.';
document.getElementById("pr5").innerHTML = 'Бухоблік(лаби)';
document.getElementById("at5").innerHTML = '307';
document.getElementById("le5").innerHTML = 'Гордіца В.М.';
break;
case 6:
uaDay = "субота";
break;
case 0:
uaDay = "неділя";
break;
}
document.getElementById("a1").innerHTML = 'Сьогодні ' + nowDay + ' ' + uaMonth + ', ' + uaDay + '. Вчимось за ' + weekNum + ' тижнем.';
h = (h < 10) ? '0' + h : h;
m = (m < 10) ? '0' + m : m;
s = (s < 10) ? '0' + s : s;
document.getElementById('time').innerHTML = h + ':' + m + ':' + s;
	setInterval(function () {
	date = new Date();
	h = date.getHours();
	m = date.getMinutes();
	s = date.getSeconds();
	h = (h < 10) ? '0' + h : h;
	m = (m < 10) ? '0' + m : m;
	s = (s < 10) ? '0' + s : s;
	document.getElementById('time').innerHTML = h + ':' + m + ':' + s;
	}, 1000);
