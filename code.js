const GameBoard = (() => {
    const board = [" ", " ", " "," ", " ", " "," ", " ", " "]
    const getBoard = () => board;
    let turn ="X"
    const setSign = (place) => {
        if (board[place] === "X" || board.place === "O") {
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

