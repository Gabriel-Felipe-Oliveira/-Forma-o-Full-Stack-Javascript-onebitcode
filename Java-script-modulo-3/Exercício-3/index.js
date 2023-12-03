const main = document.querySelector("main")
const root = document.querySelector(":root")


        let currentPlayer;
        let board;
        let gameActive;

        const player1 = document.getElementById('player1');
        const player2 = document.getElementById('player2');
        const currentPlayerDisplay = document.getElementById('currentPlayer');
        const boardElement = document.getElementById('board');
        const resultElement = document.getElementById('result');
        const restartButton = document.getElementById('restart');

        restartButton.addEventListener('click', initializeGame);
        boardElement.addEventListener('click', handleCellClick);

        initializeGame();

        function initializeGame() {
            currentPlayer = player1.value || 'Jogador 1';
            currentPlayerDisplay.textContent = currentPlayer;
            board = ['', '', '', '', '', '', '', '', ''];
            gameActive = true;
            resultElement.textContent = '';
            drawBoard();
        }

        function drawBoard() {
            boardElement.innerHTML = '';
            for (let i = 0; i < board.length; i++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.index = i;
                cell.textContent = board[i];
                boardElement.appendChild(cell);
            }
        }

        function handleCellClick(event) {
            const clickedCell = event.target;
            const index = clickedCell.dataset.index;

            if (board[index] === '' && gameActive) {
                board[index] = currentPlayer === player1.value ? 'X' : 'O';
                drawBoard();
                if (checkWinner()) {
                    resultElement.textContent = `Parabéns, ${currentPlayer}! Você venceu!`;
                    gameActive = false;
                } else if (board.every(cell => cell !== '')) {
                    resultElement.textContent = 'Empate!';
                    gameActive = false;
                } else {
                    currentPlayer = currentPlayer === player1.value ? player2.value || 'Jogador 2' : player1.value || 'Jogador 1';
                    currentPlayerDisplay.textContent = currentPlayer;
                }
            }
        }

        function checkWinner() {
            const winPatterns = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [0, 4, 8], [2, 4, 6]
            ];

            for (const pattern of winPatterns) {
                const [a, b, c] = pattern;
                if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                    highlightWinner(pattern);
                    return true;
                }
            }

            return false;
        }

        function highlightWinner(pattern) {
            for (const index of pattern) {
                boardElement.children[index].style.backgroundColor = '#4caf50';
                boardElement.children[index].style.color = 'white';
            }
        }

        document.getElementById("themeSwitcher").addEventListener("click", function () {
            if (main.dataset.theme === "dark") {
              root.style.setProperty("--bg-color", "#f1f5f9")
              root.style.setProperty("--border-color", "#aaa")
              root.style.setProperty("--font-color", "#212529")
              root.style.setProperty("--primary-color", "#26834a")
              main.dataset.theme = "light"
            } else {
              root.style.setProperty("--bg-color", "#212529")
              root.style.setProperty("--border-color", "#666")
              root.style.setProperty("--font-color", "#f1f5f9")
              root.style.setProperty("--primary-color", "#4dff91")
              main.dataset.theme = "dark"
            }
          })
   