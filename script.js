document.getElementById('kliknij').addEventListener('click', () => {
  alert('Działa! 🎉');
  createFirework();
});

const canvas = document.getElementById('fajerwerki');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function createFirework() {
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height/2;
  let particles = [];
  for (let i=0; i<30; i++) {
    particles.push({
      x: x,
      y: y,
      dx: (Math.random()-0.5)*6,
      dy: (Math.random()-0.5)*6,
      color: `hsl(${Math.random()*360}, 100%, 50%)`,
      life: 50
    });
  }

  let interval = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3, 0, Math.PI*2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      p.life--;
    });
    particles = particles.filter(p => p.life > 0);
    if (particles.length === 0) clearInterval(interval);
  }, 30);
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});