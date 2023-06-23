const table = document.getElementById("table");
const message = document.getElementById("message");

const restartButton = document.getElementById("restart-button");

const X = "X"
const O = "O"

const GameBoard = (() => {
    let turn = X;

    const board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    const getBoard = () => board;
    const getTurn = () => turn;
    const setSign = (place) => {
        if (board[place] === X || board[place] === O) {
            return;
        }
        if (place in board) {
            board[place] = turn;
            turn = turn === X ? O : X;
        }
    };
    return {
        getBoard,
        setSign,
        getTurn,
    };
})();

function printTable() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).innerHTML = GameBoard.getBoard()[i];
    }
}

function printTurn() {
    message.innerHTML = `<h2>Next turn: ${GameBoard.getTurn()} </h2>`;
}

function printWinner(winner) {
    message.innerHTML = `<h2>${winner} winner</h2>`
}

function checkWinner(player) {
    let board = GameBoard.getBoard()
    if (
        (board[0] === player && board[1] === player && board[2] === player) ||
        (board[3] === player && board[4] === player && board[5] === player) ||
        (board[6] === player && board[7] === player && board[8] === player) ||
        (board[0] === player && board[3] === player && board[6] === player) ||
        (board[1] === player && board[4] === player && board[7] === player) ||
        (board[2] === player && board[5] === player && board[8] === player) ||
        (board[0] === player && board[4] === player && board[8] === player) ||
        (board[2] === player && board[4] === player && board[6] === player) 
    ) {
        printWinner(player)
        return true
    }
}

function checkTie() {
    let count = 0
    for (let i = 0; i < 9; i++) {
        if (GameBoard.getBoard()[i] !== " ") {
            count++
        }
    }
    if (count === 9) {
        message.innerHTML = "<h2> It's a tie </h2>"
    }
}

function restart() {
    for (let i = 0; i < 9; i++) {
        GameBoard.getBoard()[i] = " ";
    }
    printTable();
    printTurn()
}

table.addEventListener("click", (e) => {
    if (checkWinner(X) || checkWinner(O) ){
        return
    }
    GameBoard.setSign(e.target.id);
    printTable();
    printTurn();
    checkWinner(X);
    checkWinner(O);
    checkTie()
});



restartButton.addEventListener("click", restart)