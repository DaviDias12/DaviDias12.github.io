const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const textStart = document.querySelector('text-start');


const jump = () => {

    document.getElementById("text-start").style.color = "rgb(236, 236, 236)";


    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500); 
}

     const loop = setInterval(() =>{

        console.log('loop')

     const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

     console.log(marioPosition); 

        const pipePosition = pipe.offsetLeft;
         if (pipePosition <=  120 && pipePosition > 0&&marioPosition < 80) {

            

            document.getElementById("text-start").innerHTML="<strong>GAME OVER</strong>";
            document.getElementById("text-start").style.color = "black";

           pipe.style.animation = 'none';
           pipe.style.Left =`${ pipePosition}px`;

           pipe.style.animation = 'none';
           mario.style.bottom =`${ pipePosition}px`;

           mario.src ='Imagens/game-over.png';
           mario.style.width = '75px'
          
           clearInterval(loop);
         } }, 10) ;                          

document.addEventListener('keydown', jump);
