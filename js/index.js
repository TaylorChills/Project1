
window.onload = () => {
    document.getElementById('go-button').onclick = () => {
      startGame()
    };  
    
    function startGame() {
      const game = new Game();
      game.validate()
    }
}

