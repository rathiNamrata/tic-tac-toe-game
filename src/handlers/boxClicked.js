import global from '../global.js';
import dom from '../dom.js';

// Get the style value for highlighting the winning blocks
let winnerIndicator = getComputedStyle(document.body).getPropertyValue(
    '--winning-blocks',
);
const O_TEXT = 'O';
const X_TEXT = 'X';

// Define all possible winning combinations
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function boxClicked(e) {
    if (global.isGameOver) {
        return;
    }
    const id = e.target.id;

    // Check if the box is already clicked
    if (!global.spaces[id]) {
        global.spaces[id] = global.currentPlayer;
        e.target.innerText = global.currentPlayer;

        if (playerHasWon() !== false) {
            let playerText = `${global.currentPlayer} has won!`;
            document.getElementById('playerText').innerText = playerText;
            let winning_blocks = playerHasWon();
            winning_blocks.map(
                (box) =>
                    (dom.boxes[box].style.backgroundColor = winnerIndicator),
            );
            global.isGameOver = true;
        } else if (isDraw()) {
            // If the game is a draw, announce it
            let playerText = "It's a draw!";
            document.getElementById('playerText').innerText = playerText;
            global.isGameOver = true;
        } else {
            // Switch the current player if no win and no draw
            global.currentPlayer =
                global.currentPlayer == X_TEXT ? O_TEXT : X_TEXT;
        }
    }

    function playerHasWon() {
        for (const winningCombination of winningCombinations) {
            let [a, b, c] = winningCombination;

            if (
                global.spaces[a] &&
                global.spaces[a] == global.spaces[b] &&
                global.spaces[a] == global.spaces[c]
            ) {
                return [a, b, c];
            }
        }

        // Return false if no winning combination is found

        return false;
    }

    function isDraw() {
        // Check if all boxes are filled
        return dom.boxes.every((box) => box.innerText !== '');
    }
}

export default boxClicked;