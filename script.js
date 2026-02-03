 const targetDate = new Date("March 5, 2027 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

const topBlur = document.querySelector(".top-blur");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    topBlur.style.opacity = "1";
  } else {
    topBlur.style.opacity = "0";
  }
});

const scrollSpirit = document.querySelector(".scroll-spirit");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    scrollSpirit.style.opacity = "1";
    scrollSpirit.style.top = `${40 + window.scrollY * 0.15}px`;
  } else {
    scrollSpirit.style.opacity = "0";
  }
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 120;

  reveals.forEach((reveal) => {
    const revealTop = reveal.getBoundingClientRect().top;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);