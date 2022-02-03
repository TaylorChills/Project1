


let currentMoney = document.getElementById('funds').innerHTML
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
 /*  const img = new Image();
      img.src = '/Pictures/Road.png';
      img.onload = () => {
        ctx.drawImage(img, 1, 1, 1000, 700);}
        new Pusheen(this, 1, 100, 150, 150, 'Red Scoot') */
  
//runs games
window.onload = () => {

    //console.log(betAmount)
    console.log(currentMoney)

    document.getElementById('go-button').onclick = () => {
      startGame()
   
    };  
     

    function startGame() {
      const game = new Game();
      game.validate()
      //game.bet()
    }
  }

