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

    function checkForWinner() {
        if (board.getBoard()[0] === board.getBoard()[1] && board.getBoard()[1] === board.getBoard()[2]) {
            return true;
        }
        else if (board.getBoard()[3] === board.getBoard()[4] && board.getBoard()[4] === board.getBoard()[5]) {
            return true;
        } 
        else if (board.getBoard()[6] === board.getBoard()[7] && board.getBoard()[7] === board.getBoard()[8]) {
            return true;
        } 
        else if (board.getBoard()[0] === board.getBoard()[4] && board.getBoard()[4] === board.getBoard()[8]) {
            return true;
        }
        else if (board.getBoard()[2] === board.getBoard()[4] && board.getBoard()[4] === board.getBoard()[6]) {
            return true;
        }
        else {
            return false;
        }
    }

    function playRound(option) {
        board.addMark(option, getCurrentPlayer().getMark());
        if (checkForWinner()) {
            console.log(`${getCurrentPlayer().getName()} wins!`);
            return;
        }
        switchCurrentPlayer();
        printNewRound();
    }

    printNewRound();

    return { playRound };

}

const game = GameController();