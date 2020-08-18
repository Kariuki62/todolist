 module.exports = getDate;
 function getDate() {
   const today = new Date();
   const actualDay = today.toDateString();
   const day = actualDay;
   return day;
}