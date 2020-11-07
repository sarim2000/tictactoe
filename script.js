const gameboard = (() => {
    let boardsquare = document.querySelectorAll('.boardsquare');
    
    let board = ['','','','','','','','',''];

    let winningCombo = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], 
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const displayboard = () => {
    for (let i = 0; i < 9; i++){
        boardsquare[i].innerHTML = '';
        
    }};
    let i = 0;
    const play = () => {
        let turn = "X";
        const squares = Array.from(document.querySelectorAll('.boardsquare'));
        
        document.getElementById('boxes').addEventListener('click',handle);

        function handle(event){
            let idx = squares.findIndex(function(square){
                return square === event.target;
            })

            if (boardsquare[idx].innerHTML === ''){
                boardsquare[idx].innerHTML = turn;
                turn = turn === 'X' ? 'O' : 'X';
            }
            getWinner();
            
        };
        
        function getWinner(){
            winningCombo.forEach(function(combo){
                i++;
                if (i === 208 || i >= 72){
                    i = 0;
                    alert("DRAW");
                    displayboard();
                }
                if ((boardsquare[combo[0]].innerHTML !== '' && boardsquare[combo[1]].innerHTML !== '' && boardsquare[combo[2]].innerHTML !== '') && boardsquare[combo[0]].innerHTML === boardsquare[combo[1]].innerHTML && boardsquare[combo[1]].innerHTML === boardsquare[combo[2]].innerHTML){
                    i = 0;
                    stop(boardsquare[combo[1]].innerHTML);
                }
               
            })
        }
        
        
        

        function stop(y){
            
                alert(y + " is the winner");
                displayboard();
        }
        
        // function draw(){
        //     for (let i = 0; i < 9; i++){
        //         if 
        //     }
        // }
    };
    
    
    displayboard();
    
    return {displayboard,play};
})();


// console.log(playerone);

const players = (() => {
    let boardsquare = document.querySelectorAll('.boardsquare');
    const main = document.getElementById('playercontainer');
    const playerone = document.getElementById('playerOne');
    const playertwo = document.getElementById('playerTwo');
    const playeronename = document.getElementById('playerOnename');
    const playertwoname = document.getElementById('playerTwoname');
    const main1 = document.getElementById('namecontainer');
    

    const pl = () => {
        const btn = document.getElementById('startButton');
        console.log(btn.addEventListener('click',starts));

        function starts(){
            gameboard.play();
            main.style.display = "none";
            playeronename.innerHTML = playerone.value + " is X ";
            playeronename.style.fontSize = "x-large";
            playeronename.style.marginLeft = "100px"
            playertwoname.innerHTML = playertwo.value + " is O";
            playertwoname.style.fontSize = "x-large";
            playertwoname.style.marginLeft = "100px"
            main1.style.display = "flex";
            
        }

        const restart = document.getElementById('restartButton');
        restart.addEventListener('click',neww);

        function neww(){
            location.reload();
        }
    };
    
    pl();
    return {pl};
})();