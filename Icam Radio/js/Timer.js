let countDownDate = new Date("Jan 14, 2023 7:30:00").getTime();

function updateCountdown() {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "j " + hours + "h "
  + minutes + "m " + seconds + "s ";
}

setInterval(updateCountdown, 1000);
