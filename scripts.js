function goToMenu() {
  document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
  document.getElementById('menu-screen').classList.add('active');
}

function showSection(id) {
  document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function playMusic() {
  const music = document.getElementById('bg-music');
  music.play();
}

function pauseMusic() {
  const music = document.getElementById('bg-music');
  music.pause();
}
