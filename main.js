$(document).ready(function () {

	$('#button').on('click', function (e) {
		e.preventDefault();

		var firstInput = parseInt($('#firstInput').val());
		var secondInput = parseInt($('#secondInput').val());

		//saves the value entered in the input boxes

		$('.x').val(firstInput);
		$('.y').val(secondInput);

		//displays the values from the input boxes in the sentences

		var add = (firstInput + secondInput);
		var subtract = (secondInput - firstInput);
		var multiply = (firstInput * secondInput);
		var divide = (firstInput / secondInput);

		//sets variables for the formulas

		$('#add').val(add);
		$('#subtract').val(subtract);
		$('#multiply').val(multiply);
		$('#divide').val(divide);

		//displays the answers to each formula
		//probably not the most DRY way to do this, but it works...

	});

});
