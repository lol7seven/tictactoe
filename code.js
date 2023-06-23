const table = document.getElementById("table")

const GameBoard = (() => {
    const board = [" ", " ", " "," ", " ", " "," ", " ", " "]
    const getBoard = () => board;
    let turn ="X"
    const setSign = (place) => {
        if (board[place] === "X" || board[place]=== "O") {
            return
        }
        board[place] = turn
        turn = (turn === "X") ? "O" : "X"; 
    } 
    return {
        getBoard,
        setSign, 
        board
    }
})();

function printTable() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).innerHTML = GameBoard.board[i] 
    }
}

table.addEventListener("click", (e) => {
    console.log(e.target.id)
    GameBoard.setSign(e.target.id)
    printTable() 
})