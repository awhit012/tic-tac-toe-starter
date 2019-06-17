// check for win
// after each turn, check if there are three xs or three os in a column, row, or diagonal

// when a new letter is added
//    check if each row is all one letter
// 	  check if each column is all one letter
//    check if each diagonal is all one letter
//    if any of above is true, whichever player uses that letter is the winer

let turn = "X"

const table = document.querySelector("table")
const playerTurnIndicator = document.querySelector(".playerTurn")
const clearBoardButton = document.querySelector("#reset")
const tds = document.querySelectorAll("td")

const clearBoard = () => {
	tds.forEach( (td) => {
		td.innerHTML = ""
	})
}

const toggleTurn = () => {
	if (turn === "X") {
		turn = "O"
	} else {
		turn = "X"
	}
}

const updateTurnIndicator = () => {
	playerTurnIndicator.innerHTML = `It's ${turn}'s turn`
}

const checkForWin = () => {
	console.log(tds[0].innerHTML, tds[1].innerHTML, tds[2].innerHTML)
	if(tds[0].innerHTML === tds[1].innerHTML &&  tds[1].innerHTML === tds[2].innerHTML) {
		console.log(`winner is ${tds[0].innerHTML}`)
	}
}

const addLetter = (event) => {
	if(event.target.innerHTML === "") {
		event.target.innerHTML = turn
		checkForWin()
		toggleTurn()
		updateTurnIndicator()
	}
}

table.addEventListener("click", addLetter)
clearBoardButton.addEventListener("click", clearBoard)
