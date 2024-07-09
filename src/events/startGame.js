import dom from '../dom.js';
import boxClicked from '../handlers/boxClicked.js';

const startGame = () => {
    dom.boxes.forEach((box) => box.addEventListener('click', boxClicked));
};

export default startGame;