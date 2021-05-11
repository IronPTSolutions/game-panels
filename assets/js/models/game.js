class Game {

  constructor(canvasId, onGameOver) {
    this.ctx = document.getElementById(canvasId).getContext('2d');

    this.intervalId = undefined;
    this.onGameOver = onGameOver
    this.score = 0;
  }

  start() {
    if (!this.intervalId) {
      this.intervalId = setTimeout(() => {
        this.gameOver();
      }, 2000)
    }
    
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = undefined;
  }

  gameOver() {
    this.stop();
    this.score = 100;
    this.onGameOver();
  }
}
