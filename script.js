// Countdown Timer
// Set target date: Sunday, March 1st, 2026, 3:00 PM EST (UTC-5)
const targetDate = new Date('2026-03-01T20:00:00Z'); // 3PM EST = 8PM UTC

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('mins').textContent = '00';
    document.getElementById('secs').textContent = '00';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('mins').textContent = String(mins).padStart(2, '0');
  document.getElementById('secs').textContent = String(secs).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);
