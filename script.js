let player = 1;
let board = [{'zero':''},{'one':''},{'two':''},{'three':''},{'four':''},{'five':''},
{'six':''},{'seven':''},{'eight':''}];


//manipulates the DOM in order to show the board array
const gameBoardRender = () =>{
    let tic_tac_buttons = document.querySelectorAll('.tic-tac-button');
for (let i=0; i < tic_tac_buttons.length; ++i){
    if (Object.keys(board[i])==tic_tac_buttons[i].id){
    tic_tac_buttons[i].innerText=Object.values(board[i])}};
} ;

//makes an array using the board that returns true for every X ou O depending on the player
//then compares the array to the possible winning combinations
const checkWin = () =>{
        array = []
        for (let i = 0; i<board.length ; ++i){
            if(player==1){
                if(Object.values(board[i])=='X'){
                    array.push(true)}
                else{array.push(false)}}
            else{
                if(Object.values(board[i])=='O'){
                    array.push(true)}
                else{array.push(false)}
                }}
            if((array[0] && array[1] && array[2])||(array[0] && array[4] && array[8])||
            (array[0] && array[3] && array[6]) || (array[1] && array[4] && array[7])||
            (array[2] && array[4] & array[6])||(array[2] && array[5] && array[8])||
            (array[3] && array[4] && array[5])|| (array[6] && array[7] && array[8])==true){
                if(player==1){console.log(player1.name + ' wins'); player1.wins += 1; player1.winner='win'; gameFlow().restart()}
                else{console.log(player2.name + ' wins'); player2.wins += 1;player2.winner='win'; gameFlow().restart()}};
            ;
} 

const playerGenerator = (name, moves,winner, wins)=>{
    return { name, moves, winner, wins };
};

const gameFlow = () => {
let player1_name = document.getElementById('player1_name').value;
let player2_name = document.getElementById('player2_name').value;

const setPlayers= () =>{
player1 = playerGenerator(player1_name, [], '', 0);
player2 = playerGenerator(player2_name, [],'', 0);
return { player1, player2 }};

const playerTurnSwitcher = () =>{
    if (player == '1'){
        player = '2'
        return player
    }
    else if(player == '2'){
        player = '1'
        return player
    }
    
}
//marks x ou o on the board, pushes spot number to player.moves and calls playerTurnSwitcher
const x_or_round=(elmnt)=> {
    if(start_switch.on_off=='off'){return}
    let element = elmnt.id;
    if(player==1){
    for (let i=0; i<board.length ; ++i){
        if(Object.keys(board[i])==element){
            if (Object.values(board)[i][element] == 'X' || Object.values(board)[i][element] == 'O'){return}
            Object.values(board)[i][element] = 'X'
            player1.moves.push(element)
        }
    }}
    else if(player==2){
        for (let i=0; i<board.length ; ++i){
            if(Object.keys(board[i])==element){
                if (Object.values(board)[i][element] == 'X' || Object.values(board)[i][element] == 'O'){return}
                Object.values(board)[i][element] = 'O'
                player2.moves.push(element)
            }
        }
    }
    gameBoardRender()
    checkWin()
    /*if(player1.winner == 'win' || player2.winner == 'win'){
        winnerDisplay();
    }
    else{*/
    playerTurnSwitcher()
    turnDisplay()
    scoreDisplay()}
    

const restart = () =>{
    start_switch.on_off='on';
    board = [{'zero':''},{'one':''},{'two':''},{'three':''},{'four':''},{'five':''},
    {'six':''},{'seven':''},{'eight':''}];
    player1.moves = []; 
    player2.moves = [];
    gameBoardRender()}

const turnDisplay= () =>{
    if(player==1){
    document.getElementById('turn').innerText=`it is ${player1.name}'s turn`}
    else {document.getElementById('turn').innerText=`it is ${player2.name}'s turn`}
}

const scoreDisplay=()=>{
    document.getElementById('score').innerText=`${player1.name}: ${player1.wins} | ${player2.name}: ${player2.wins}`
}
/*const winnerDisplay=()=>{
    if(player1.winner=='win'){
        document.getElementById('turn').innerText=`${player1.name} wins! Press restart match to begin a new match.`;
        player1.winner ==''
    }
    else if(player2.winner=='win'){
        document.getElementById('turn').innerText=`${player2.name} wins! Press restart match to begin a new match.`;
        player2.winner==''
    }
}*/
return { setPlayers, playerTurnSwitcher, x_or_round, restart, turnDisplay};

}

//this functions created a switch object which will then be altered by other functions
//enabling or disabling certain functionalities based on its status
const startSwitch=(on_off)=>{
    return { on_off }
}
//start game creates 2 player objects with the names from the form on the html file 
document.getElementById('start_game').addEventListener('click', function(){
    if(start_switch.on_off=='on'){return};
    start_switch.on_off='on';
    if(document.getElementById('player1_name').value== '' && (document.getElementById('player2_name').value== '')){
        console.log('You must pick a name for both players');
        return;
    }
    else{
        gameFlow().setPlayers();
        gameFlow().turnDisplay();
        document.getElementById('score').innerText=`${player1.name}: ${player1.wins} | ${player2.name}: ${player2.wins}`
    };
    
});

let start_switch = startSwitch('off');