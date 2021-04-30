// Show Date

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

const getDate = function () {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.getMonth().toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

const updateDateTime = function () {
  const date = new Date();

  // Getting day
  const dayOfMonth = date.getDate().toString().padStart(2, "0");

  // Getting month name
  const month = date.getMonth();
  const monthNameShort = months[month];

  // Getting year
  const year = date.getFullYear();

  // Getting Hour & minutes
  const hour = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  dateText.innerHTML = `${dayOfMonth} ${monthNameShort} ${year} ${hour}:${minutes}:${seconds}`;
};

updateDateTime();
setInterval(updateDateTime, 1000);

// Save Work Hours
const myInput = document.querySelector("#work-hours");
const myButton = document.querySelector("#add-button");
const myLabel = document.querySelector("label[for='work-hours']");

const updateLabel = () => {
  const inputValue = myInput.value;

  const hours = Math.floor(inputValue / 60);
  const minutes = inputValue % 60;
  myLabel.innerHTML = `${inputValue} minutes = ${hours
    .toString()
    .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
};

// Update Label
myInput.oninput = () => {
  updateLabel();
};
updateLabel();

// Save Data
const myData = localStorage.getItem("myData");
const progress = JSON.parse(myData) || [];

// Handle input
myButton.onclick = () => {
  const inputValue = myInput.value;

  progress.push({
    date: getDate(),
    workInMinutes: parseInt(inputValue, 10),
  });

  localStorage.setItem("myData", JSON.stringify(progress));
};
