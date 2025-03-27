function GameBoard() {
    const board = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const getBoard = () => board;

    const printBoard = () => {
        console.log('-------------');
        console.log(`| ${board[0]} | ${board[1]} | ${board[2]} |`);
        console.log(`| ${board[3]} | ${board[4]} | ${board[5]} |`);
        console.log(`| ${board[6]} | ${board[7]} | ${board[8]} |`);
        console.log('-------------');
    }

    const addMark = (option, mark) => {
        board.forEach((cell, index) => {
            if (cell === option) {
                board[index] = mark;
            }
        })
    }

    return { getBoard, printBoard, addMark }
}

function Player(name, mark) {
    const getName = () => name;
    const getMark = () => mark;

    return { getName, getMark }
}

function GameController() {
    const playerOne = Player('Player 1', 'X');
    const playerTwo = Player('Player 2', 'O');
    const board = GameBoard();
    let currentPlayer = playerOne;

    function switchCurrentPlayer() {
        currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
    }
    function getCurrentPlayer() {
        return currentPlayer;
    }

    console.log('Welcome to Tic-Tac-Toe');

    const printNewRound = () => {
        board.printBoard();
        console.log(`${getCurrentPlayer().getName()}'s turn`);
    }

    function playRound(option) {
        board.addMark(option, getCurrentPlayer().getMark());
        // checkForWinner
        switchCurrentPlayer();
        printNewRound();
    }

    return { playRound };

}