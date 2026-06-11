let cp = "X";
let gameover = false;
function makemove(cell) {
    if (cell.innerHTML === "" && !gameover) {
        cell.innerHTML = cp;
        if (checkwin()) {
            document.getElementById("status").innerHTML = "WINNER IS:" + cp;
            gameover = true;
        } else if (checkdraw()) {
            document.getElementById("status").innerHTML = "DRAWWW!!";
            gameover = true;
        } else {
            cp = cp === "X" ? "O" : "X";
            document.getElementById("status").innerHTML = "TURN:" + cp;
        }
    }
}

function checkwin() {
    const cells = document.querySelectorAll("td");
    const wincombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return wincombos.some(combo => {
        return combo.every(i => cells[i].innerHTML === cp);
    }
    );

}

function checkdraw() {
    const cells = document.querySelectorAll("td");
    return [...cells].every(cell => cell.innerHTML !== "");
}

function resetgame() {
    const cells = document.querySelectorAll("td");
    cells.forEach(cell => cell.innerHTML = "");
    cp = "X";
    gameover = false;
    document.getElementById("status").innerText = "player X's turn";
}