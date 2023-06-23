const table = document.getElementById("table");
const turnMessage = document.getElementById("turn-message")

const GameBoard = (() => {
    let turn = "X";

    const board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    const getBoard = () => board;
    const getTurn = () => turn;
    const setSign = (place) => {
        if (board[place] === "X" || board[place] === "O") {
            return;
        }
        if (place in board) {
            board[place] = turn;
            turn = turn === "X" ? "O" : "X";
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
    turnMessage.innerHTML = `<h2>Next turn: ${GameBoard.getTurn()} </h2>`
}

table.addEventListener("click", (e) => {
    console.log(e.target.id);
    GameBoard.setSign(e.target.id);
    printTable();
    printTurn()
});
