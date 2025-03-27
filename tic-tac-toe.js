function GameBoard() {
    const board = []
    const getBoard = () => board;

    return { getBoard }
}

function Player(name, mark) {
    const getName = () => name;
    const getMark = () => mark;

    return { getName, getMark }
}

function GameController() {
    
}