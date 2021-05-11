document.addEventListener('DOMContentLoaded', () => {

  let game = new Game('canvas-game', onGameOver);

  showPanel('start-panel');
  const startBtn = document.getElementById('start-btn');
  const restartBtn = document.getElementById('restart-btn');

  startBtn.addEventListener('click', startGame);

  restartBtn.addEventListener('click', () => {
    game = new Game('canvas-game', onGameOver);
    startGame();
  })

  function onGameOver() {
    console.log('GameOver!!!!')
    showPanel('game-over-panel');
    document.getElementById('score').textContent = game.score;
  }

  function startGame() {
    showPanel('canvas-panel');
    game.start();
  }

});

function showPanel(panelId) {
  document.querySelectorAll('.panel').forEach(panel => panel.style.display = 'none');
  document.getElementById(panelId).style.display = 'block';
}
