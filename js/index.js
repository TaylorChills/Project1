


let currentMoney = document.getElementById('funds').innerHTML

window.onload = () => {
  
}


window.onload = () => {

    //console.log(betAmount)
    console.log(currentMoney)

    document.getElementById('go-button').onclick = () => {
      startGame()
   
    };  
     

    function startGame() {
      const game = new Game();
      game.start();
      //game.bet()
    }
  };

