const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const dayName = document.getElementById("dayName");
const monthName = document.getElementById("monthName");

setInterval(() => {
  const currentTime = new Date();

  hours.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  minutes.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  seconds.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);

const currentDate = new Date();

day.innerHTML = (currentDate.getDay() < 10 ? "0" : "") + currentDate.getDay();
month.innerHTML =
  (currentDate.getMonth() < 10 ? "0" : "") + currentDate.getMonth();
year.innerHTML = currentDate.getFullYear();


const today = new Date();

dayName.innerHTML = today.toLocaleString("default", { weekday: "long" });
// monthName.innerHTML = today.toLocaleString("default",{month: "long"})
