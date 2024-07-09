import dom from '../dom.js';
import global from '../global.js';

const resetHandler = () => {
    global.spaces.fill(null);
    dom.boxes.forEach((box) => {
        box.innerText = '';
        box.style.backgroundColor = '';
    });
    document.getElementById('playerText').innerText = 'Tic Tac Toe';
    global.currentPlayer = 'X';
    global.isGameOver = false;
};

export default resetHandler;
