// script.js

function initPage() {
  const pages = ['page1', 'page2', 'page3', 'page4', 'page5'];
  const bgMusic = document.getElementById('bg-music');

  // 🎵 Play Musik
  window.playMusic = function () {
    bgMusic.play().catch(() => console.log("Autoplay blocked"));
    document.getElementById("music-btn").style.display = "none";
  }

  // 📄 Pindah Halaman
  window.goToPage = function (num) {
    pages.forEach(id => document.getElementById(id).classList.remove('active'));
    document.getElementById('page' + num).classList.add('active');
    if (num >= 2) {
      bgMusic.play().catch(() => {});
      document.getElementById("music-btn").style.display = "none";
    }
  };

  // 🕒 Countdown
  let countdownNum = 3;
  const countdownEl = document.getElementById('countdown');
  const countdownInterval = setInterval(() => {
    countdownNum--;
    if (countdownNum > 0) {
      countdownEl.innerText = countdownNum;
    } else {
      clearInterval(countdownInterval);
      countdownEl.innerText = "Happy Birthday!";

      // 🎉 Confetti
      confetti({
        particleCount: 150,
        spread: 120,
        origin: { y: 0.6 }
      });

      // ➡️ Lanjut halaman 2
      setTimeout(() => goToPage(2), 2000);
    }
  }, 1000);

  // 🖼️ Slideshow
  const photos = [
    "img/IMG-20250719-WA0003.jpg", "img/IMG-20250719-WA0004.jpg",
    "img/IMG-20250719-WA0005.jpg", "img/IMG-20250719-WA0006.jpg",
    "img/IMG-20250719-WA0007.jpg", "img/IMG-20250719-WA0008.jpg",
    "img/IMG-20250719-WA0009.jpg", "img/IMG-20250719-WA0010.jpg"
  ];
  const slideshow = document.getElementById("slideshow");
  let photoIndex = 0;

  setInterval(() => {
    if (document.getElementById("page3").classList.contains("active")) {
      photoIndex = (photoIndex + 1) % photos.length;
      slideshow.style.opacity = 0;
      setTimeout(() => {
        slideshow.src = photos[photoIndex];
        slideshow.style.opacity = 1;
      }, 300);
    }
  }, 2500);

  // 💬 Pesan Ulang Tahun
  const messages = [
    "Selamat ulang tahun sayangku ❤️",
    "Hari ini kamu 18 tahun. Dewasa sudah 😘",
    "Aku harap kamu selalu bahagia...",
    "Selalu sehat, selalu senyum, dan selalu semangat.",
    "Makasih karena telah jadi cahaya dalam hidupku.",
    "Aku cinta kamu, Nova. Lebih dari kata bisa ungkapkan ❤️"
  ];
  let msgIndex = 0;
  const msgEl = document.getElementById("message");
  msgEl.innerText = messages[0];

  window.nextMessage = function () {
    msgIndex++;
    if (msgIndex >= messages.length) {
      goToPage(4);
    } else {
      msgEl.innerText = messages[msgIndex];
    }
  };

  // 🖼️ Galeri (scroll horizontal)
  const gallery = document.getElementById("gallery");
  photos.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    gallery.appendChild(img);
  });

  // ❤️ Efek Hati Jatuh
  const heartContainer = document.getElementById("hearts-container");
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration = (3 + Math.random() * 2) + "s";
    heartContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 300);
}

// ⏳ PRELOADER Start
window.addEventListener('DOMContentLoaded', function () {
  const bar = document.getElementById('bar');
  let load = 0;
  const preloadInterval = setInterval(() => {
    load += 1;
    bar.style.width = load + '%';
    if (load >= 100) {
      clearInterval(preloadInterval);
      document.getElementById('preloader').style.display = 'none';
      initPage();
    }
  }, 20);
});
