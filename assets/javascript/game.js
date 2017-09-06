$(document).ready(function() {


// Create an object for each character. 
// Each character in the game has 3 attributes: Health Points, Attack Power and Counter Attack Power.

var toad = {
	healthPoints: 120,
	attackPower: 12,
	counterAttackPower: 16
}

var mario = {
	healthPoints: 100,
	attackPower: 10,
	counterAttackPower: 12
}

var luigi = {
	healthPoints: 150,
	attackPower: 8,
	counterAttackPower: 25
}

var bowser = {
	healthPoints: 165,
	attackPower: 6,
	counterAttackPower: 5
}

// Variables for selected character values.
var selectedHealthPoints;
var selectedAttackPower;
var selectedCounterPower;

// Variables for selected enemy values.
var selectedEnemyHealthPoints;
var selectedEnemyAttackPower;
var selectedEnemyCounterPower;


// Append each characters health to the appropriate character on the screen. 
	$("#toad-health").html(toad.healthPoints + " HP");
	$("#mario-health").html(mario.healthPoints + " HP");
	$("#luigi-health").html(luigi.healthPoints + " HP");
	$("#bowser-health").html(bowser.healthPoints + " HP");




// Click on any character to get started. 
// Move the characters not clicked to the enemies section.
	$("body").on("click", ".character", function() { 
		$("#attack").prop("disabled", true);
		console.log('selected character')
			$(this).addClass("selected-character").removeClass("character");
			$(".your-character").append($(".selected-character"));
			$(".enemies").append($(".character"));
			$(".character").addClass("enemy").removeClass("character");
			$(".characters").addClass("display-none");

	// Check the values of the selected character.

			if ($("#toad").hasClass("selected-character")) {
				selectedHealthPoints = toad.healthPoints;
				selectedAttackPower = toad.attackPower;
				selectedCounterPower = toad.counterAttackPower;
				console.log("selected character attack power: ", selectedAttackPower);
				console.log("selected character health power: ", selectedHealthPoints);
			} 

			else if ($("#mario").hasClass("selected-character")) {
				selectedHealthPoints = mario.healthPoints; 
				selectedAttackPower = mario.attackPower;
				selectedCounterPower = mario.counterAttackPower;
					console.log("selected character attack power: ", selectedAttackPower);

			}

			else if ($("#luigi").hasClass("selected-character")) {
				selectedHealthPoints = luigi.healthPoints;
				selectedAttackPower = luigi.attackPower;
				selectedCounterPower = luigi.counterAttackPower;
					console.log("selected character attack power: ", selectedAttackPower);

			}

			else if ($("#bowser").hasClass("selected-character")) {
				selectedHealthPoints = bowser.healthPoints;
				selectedAttackPower = bowser.attackPower;
				selectedCounterPower = bowser.counterAttackPower;
					console.log("selected character attack power: ", selectedAttackPower);

			}

	});

	// Click on a character in the enemy section to attack. 
	// Clicked character moves to fight section. 
	$("body").on("click", ".enemy", function() {
		$("#attack").prop("disabled", false);
		$("#game-over").empty();
		$("#attack-results-1").empty();
		$("#attack-results-2").empty();

		console.log('enemy')
			$(this).addClass("selected-enemy");
			$(".defender").append($(".selected-enemy"));

		// Check selected enemy values.

			if ($("#toad").hasClass("selected-enemy")) {
				selectedEnemyHealthPoints = toad.healthPoints;
				selectedEnemyAttackPower = toad.attackPower;
				selectedEnemyCounterPower = toad.counterAttackPower;
				console.log("enemy attack power: ", selectedEnemyAttackPower);
				console.log("enemy HP: ", selectedEnemyHealthPoints);

			} 

			else if ($("#mario").hasClass("selected-enemy")) {
				selectedEnemyHealthPoints = mario.healthPoints; 
				selectedEnemyAttackPower = mario.attackPower;
				selectedEnemyCounterPower = mario.counterAttackPower;
					console.log("enemy attack power: ", selectedEnemyAttackPower);
					console.log("enemy HP: ", selectedEnemyHealthPoints);

			}

			else if ($("#luigi").hasClass("selected-enemy")) {
				selectedEnemyHealthPoints = luigi.healthPoints;
				selectedEnemyAttackPower = luigi.attackPower;
				selectedEnemyCounterPower = luigi.counterAttackPower;
					console.log("enemy attack power: ", selectedEnemyAttackPower);
					console.log("enemy HP: ", selectedEnemyHealthPoints);

			}

			else if ($("#bowser").hasClass("selected-enemy")) {
				selectedEnemyHealthPoints = bowser.healthPoints;
				selectedEnemyAttackPower = bowser.attackPower;
				selectedEnemyCounterPower = bowser.counterAttackPower;
					console.log("enemy attack power: ", selectedEnemyAttackPower);
					console.log("enemy HP: ", selectedEnemyHealthPoints);

			}

	});

// Each time the user clicks "attack", the selected character's attack power increases by its own attack power. 
// For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).
// Also, the enemy's health points decreases by the selected character's attack power.
// The enemy's counter attack power remains constant with each attack. 
// The selected character's health points decrease by the enemy's counter attack power on each click. 

	$("#attack").on("click", function () { 

		if ($("#toad").hasClass("selected-enemy")) {
			selectedEnemyHealthPoints = selectedEnemyHealthPoints - selectedAttackPower;
			$("#toad-health").html(selectedEnemyHealthPoints);
			$("#attack-results-2").html("Toad attacked you back for " + toad.counterAttackPower + " damage");
		}

		else if ($("#mario").hasClass("selected-enemy")) {
			selectedEnemyHealthPoints = selectedEnemyHealthPoints - selectedAttackPower;
			$("#mario-health").html(selectedEnemyHealthPoints);
			$("#attack-results-2").html("Mario attacked you back for " + mario.counterAttackPower + " damage");
		}

		else if ($("#luigi").hasClass("selected-enemy")) {
			selectedEnemyHealthPoints = selectedEnemyHealthPoints - selectedAttackPower;
			$("#luigi-health").html(selectedEnemyHealthPoints);
			$("#attack-results-2").html("Luigi attacked you back for " + luigi.counterAttackPower + " damage");
		}

		else if ($("#bowser").hasClass("selected-enemy")) {
			selectedEnemyHealthPoints = selectedEnemyHealthPoints - selectedAttackPower;
			$("#bowser-health").html(selectedEnemyHealthPoints);
			$("#attack-results-2").html("Bowser attacked you back for " + bowser.counterAttackPower + " damage");
		}

		console.log("after attack: selected enemy HP: ", selectedEnemyHealthPoints);
		console.log("after attack: selected character counter power remains constant: ", selectedEnemyCounterPower);


		if ($("#toad").hasClass("selected-character")) {
			$("#attack-results-1").html("Toad attacked for " + selectedAttackPower + " damage");
			selectedAttackPower += 12;
			selectedHealthPoints = selectedHealthPoints - selectedEnemyCounterPower;	
			$("#toad-health").html(selectedHealthPoints);
		}

		else if ($("#mario").hasClass("selected-character")) {
			$("#attack-results-1").html("Mario attacked for " + selectedAttackPower + " damage");
			selectedAttackPower += 10;
			selectedHealthPoints = selectedHealthPoints - selectedEnemyCounterPower;		
			$("#mario-health").html(selectedHealthPoints);
		}

		else if ($("#luigi").hasClass("selected-character")) {
			$("#attack-results-1").html("Luigi attacked for " + selectedAttackPower + " damage");
			selectedAttackPower += 8;
			selectedHealthPoints = selectedHealthPoints - selectedEnemyCounterPower;		
			$("#luigi-health").html(selectedHealthPoints);
		}

		else if ($("#bowser").hasClass("selected-character")) {
			$("#attack-results-1").html("Bowser attacked for " + selectedAttackPower + " damage");
			selectedAttackPower += 6;
			selectedHealthPoints = selectedHealthPoints - selectedEnemyCounterPower;		
			$("#bowser-health").html(selectedHealthPoints);
		}

		console.log("after attack: selected character attack power: ", selectedAttackPower);
		console.log("after attack: selected character's HP: ", selectedHealthPoints);


	// If the selected character's health points get to 0 or below, the enemy wins and the game is over.
	// If the enemy's health points get to 0 or below, the selected character wins and can continue fighting other enemies. 
	 if (selectedHealthPoints <= 0) {
	 	$("#game-over").html("You have been defeated! Press restart to play again.");
	 	$("#attack").prop("disabled", true);
	 }

	 	else if (selectedEnemyHealthPoints <= 0) {
	 	$("#game-over").html("You have defeated the enemy! Select another enemy to fight.");
	 	$(".selected-enemy").empty();
	 	$(".defender").empty();
	 	$("#attack").prop("disabled", true);

	 	// If there aren't any more enemies with the class of "enemy", the user has defeated all enemies and has won!
	 		if($(".enemy").length === 0) {
	 			$("#game-over").html("You won! Press restart to play again.");
	 			$("#attack").prop("disabled", true);
	 		}
	 }

	}); // end on click "attack" function.

	$("#restart").on("click", function() { 
		location.reload();
		$("#attack").prop("disabled", true);
	})

}); // end document ready function.


// Trick to win the game: Player must pick their characters wisely by first fighting an enemy with low Counter Attack Power. 
	// This will allow them to grind Attack Power and to take on enemies before they lose all of their Health Points. 
	// There are no healing optons in this game. 
	// Your players should be able to win and lose the game no matter what character they choose. 
	// The challenge should come from picking the right enemies, not choosing the strongest player.




