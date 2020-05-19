//these global variables are only for checking purposes and will be deleted
let x = ''
let current_player = 1
let board = [{'zero':'X'},{'one':'X'},{'two':'X'},{'three':'X'},{'four':'X'},{'five':'X'},
{'six':'X'},{'seven':'X'},{'eight':'X'}];
//stores the board inside a local function

//manipulates the DOM in order to show the board array
const gameBoardRender = () =>{
    let tic_tac_buttons = document.querySelectorAll('.tic-tac-button');
for (let i=0; i < tic_tac_buttons.length; ++i){
    if (Object.keys(board[i])==tic_tac_buttons[i].id){
    tic_tac_buttons[i].innerText=Object.values(board[i])}};
} ;

//checkWin receives array as plays variable from player, 
const checkWin = (array) =>{
    let winning_conditions = [[1,2,3],[1,5,9],[1,4,7],[2,5,8],
[3,5,7],[3,6,9],[4,5,6],[7,8,9]];
};

const playerGenerator = (name, symbol, wins)=>{
    return { name, symbol, wins };
};

const gameFlow = () => {

let player1_name = document.getElementById('player1_name').value;
let player2_name = document.getElementById('player2_name').value;

const setPlayers= () =>{
let player1 = playerGenerator(player1_name, 'X', 0);
let player2 = playerGenerator(player2_name, 'O', 0);
return { player1, player2 }};

return { setPlayers };
}

document.getElementById('start_game').addEventListener('click', function(){
    if(document.getElementById('player1_name').value== '' && (document.getElementById('player2_name').value== '')){
        console.log('You must pick a name for both players');
        return;
    }
    else{
        x =  gameFlow().setPlayers();
        return x
    };
});

function x_or_round(elmnt) {
let element = elmnt.id;
for (let i=0; i<board.length ; ++i){
    if(Object.keys(board[i])==element){
        Object.values(board)[i][element] = 'O'
    }
}
gameBoardRender()
};
