const fortunes = [
  "💸 Invest wisely, not quickly.",
  "💤 Rest is your real wealth.",
  "💌 Someone will surprise you with kindness.",
  "🌊 Ride one big wave instead of chasing ten.",
  "🎁 Give back, it multiplies."
];

function showFortune() {
  const f = fortunes[Math.floor(Math.random() * fortunes.length)];
  document.getElementById("fortune").textContent = f;
}
