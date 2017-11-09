'use strice'

function modulCalculator() {
	var number1;
	var number2;
	var radioCheked;
	function getInput() {
		 number1 = changeStringToNumber(document.getElementById('1').value);
		 number2 = changeStringToNumber(document.getElementById('2').value);
		 radioCheked = document.querySelector('input[name="op"]:checked');
		//console.log(changeStringToNumber(number1) + changeStringToNumber(number2) + radioCheked);
	}

	function changeStringToNumber(num) {
		return Number.parseInt(num);

	}
	
	function calcolator() {
		console.log(radioCheked);
		if (radioCheked.value == 'add') {
			return number1+number2
			}
		else if (radioCheked.value == 'substsact') {
			return number1-number2;
		}
		else if (radioCheked.value == 'multiple') {
				 return number1*number2;
		}
		else  {
			return number1/number2;
		}
		
	}

	return {
		getInput: getInput,
		calcolator: calcolator
	}

}
var button = document.getElementById("resultBtn");
button.addEventListener("click", function () {
	var t = modulCalculator();
	console.log(t.getInput());
	console.log(t.calcolator());
});

