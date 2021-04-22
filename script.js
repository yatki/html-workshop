const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const dateText = document.querySelector("#today");

const getDateTime = function () {
  const date = new Date();

  // Getting day
  const dayOfMonth = date.getDate();

  // Getting month name
  const month = date.getMonth();
  const monthNameShort = months[month];

  // Getting year
  const year = date.getFullYear();

  // Getting Hour & minutes
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  dateText.innerHTML = `${dayOfMonth} ${monthNameShort} ${year} ${hour}:${minutes}:${seconds}`;
};

getDateTime();

setInterval(getDateTime, 1000);
