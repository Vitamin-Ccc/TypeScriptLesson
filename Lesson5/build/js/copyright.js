"use strict";
// Original JS code
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// // We want to assign this date time parameter and put the year in and we can't do that because it's the wrong type
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear
// 1st variation:
// let year: HTMLElement | null 
// year = document.getElementById("year")
// let thisYear: string
// thisYear = new Date().getFullYear().toString()
// if (year) {
//   year.setAttribute("datetime", thisYear)
//   year.textContent = thisYear
// }
// 2nd variation:
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
