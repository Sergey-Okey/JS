const resultElement = document.getElementById('result')
const buttonSum = document.getElementById('summa')
const buttonMinus = document.getElementById('minus')
const number = document.getElementById('number')
const number2 = document.getElementById('number2')


function printResolve(result) {
	if (result > 0) {
		resultElement.style.color = ('green')
	} else {
		resultElement.style.color = ('red')
	}
	resultElement.textContent = result
}

function computAction(numb1, numb2, actionSymbol) {
	const clock1 = Number(numb1.value)
	const clock2 = Number(numb2.value)
	if (actionSymbol == '+') {
		return (
			numb1 + numb2
		)
	}
	if (actionSymbol == '-') {
		return (
			numb1 - numb2
		)

	}

}

buttonSum.onclick = function () {
	const sum = Number(number.value) + Number(number2.value)
	resultElement.textContent = sum

	printResolve(sum)
}
buttonMinus.onclick = function () {
	const sum = Number(number.value) - Number(number2.value)
	resultElement.textContent = sum

	printResolve(sum)
}

