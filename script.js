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


const checkWin = () =>{
    if(player == 1){
    if(player1.moves.includes('zero' && 'one' && 'two') || player1.moves.includes('zero' && 'four' && 'eight') || player1.moves.includes('zero' &&'three'&&'six') ||
    player1.moves.includes('one' && 'four' && 'seven') || player1.moves.includes('two'&&'four'&&'six')||player1.moves.includes('two'&&'five'&&'eight')|| player1.moves.includes('three' && 'four' &&'five')||
    player1.moves.includes('six'&&'seven'&&'eight')==true){
        console.log(player1.name + ' wins')
    } 
    }
}; 

const playerGenerator = (name, moves, wins)=>{
    return { name, moves, wins };
};

const gameFlow = () => {
let player1_name = document.getElementById('player1_name').value;
let player2_name = document.getElementById('player2_name').value;

const setPlayers= () =>{
player1 = playerGenerator(player1_name, [], 0);
player2 = playerGenerator(player2_name, [], 0);
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
    let element = elmnt.id;
    if(player==1){
    for (let i=0; i<board.length ; ++i){
        if(Object.keys(board[i])==element){
            if (Object.values(board)[i][element] == '1' || Object.values(board)[i][element] == '2'){return}
            Object.values(board)[i][element] = '1'
            player1.moves.push(element)
        }
    }}
    else if(player==2){
        for (let i=0; i<board.length ; ++i){
            if(Object.keys(board[i])==element){
                if (Object.values(board)[i][element] == '1' || Object.values(board)[i][element] == '2'){return}
                Object.values(board)[i][element] = '2'
                player2.moves.push(element)
            }
        }
    }
    gameBoardRender()
    playerTurnSwitcher()
    };


return { setPlayers, playerTurnSwitcher, x_or_round };

}
//start game creates 2 player objects with the names from the form on the html file 
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

let numeros = [0,1,2,3,4,5,6]
numeros.includes((0 && 1 && 2) || (5 && 8))
