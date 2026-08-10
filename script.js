/* =========================
   TYPING MESSAGE EFFECT
========================= */

const text = `Dear Love,

Every moment with you feels like a dream,
Your smile is my favorite thing in this world

You inspire me to be better, love deaper,and 
belive in magic.

You are my forever,
my reason to smile

Forever yours ❤️`;

let i = 0;

function typeWriter() {
  const el = document.getElementById("typing-text");
  if (!el) return;

  if (i === 0) el.innerHTML = "";

  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 28);
  }
}

/* =========================
   MOVE NO BUTTON 😈
========================= */

function moveNo() {
  const btn = document.getElementById("noBtn");
  if (!btn) return;

  const maxX = window.innerWidth - btn.offsetWidth - 20;
  const maxY = window.innerHeight - btn.offsetHeight - 20;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  btn.style.position = "absolute";
  btn.style.left = randomX + "px";
  btn.style.top = randomY + "px";
}

/* =========================
   LOAD EFFECTS
========================= */

window.onload = () => {
  typeWriter();   // runs on page2
};
