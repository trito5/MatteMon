level = 1;
xList = [];
yList = [];
operatorList = [];
correctAnswerList = [];
userAnswerList = [];
correctCounter = 0;
counter = 0;

var levelList = [];

levelList.push({
    level: 1,
    pokemon: "Bulbasaur",
    startValue: 0,
    stopValue: 4,
    operators: 1
});

 levelList.push({
    level: 2,
    pokemon: "Jigglypuff",
    startValue: 0,
    stopValue: 6,
    operators: 1
});

 levelList.push({
    level: 3,
    pokemon: "Pikachu",
    startValue: 0,
    stopValue: 8,
    operators: 1
});

 levelList.push({
    level: 4,
    pokemon: "Squirtle",
    startValue: 0,
    stopValue: 4,
    operators: 2
});

 levelList.push({
    level: 5,
    pokemon: "Charmander",
    startValue: 0,
    stopValue: 8,
    operators: 2
});

 levelList.push({
    level: 6,
    pokemon: "Eevee",
    startValue: 0,
    stopValue: 13,
    operators: 2
});

 levelList.push({
    level: 7,
    pokemon: "Horsea",
    startValue: 0,
    stopValue: 3,
    operators: 3
});

 levelList.push({
    level: 8,
    pokemon: "Hitmontop",
    startValue: 0,
    stopValue: 4,
    operators: 3
});

 levelList.push({
    level: 9,
    pokemon: "Mewtwo",
    startValue: 0,
    stopValue: 6,
    operators: 3
});

 levelList.push({
    level: 11,
    pokemon: "Raichu",
    startValue: 0,
    stopValue: 8,
    operators: 3
});

  levelList.push({
    level: 12,
    pokemon: "Shadow Lugia",
    startValue: 1,
    stopValue: 4,
    operators: 4
});
levelList.push({
    level: 13,
    pokemon: "Tyrunt",
    startValue: 1,
    stopValue: 6,
    operators: 4
});
levelList.push({
    level: 14,
    pokemon: "Volcarona",
    startValue: 0,
    stopValue: 50,
    operators: 2
});
levelList.push({
    level: 15,
    pokemon: "Zodiac",
    startValue: 0,
    stopValue: 80,
    operators: 2
});
levelList.push({
    level: 16,
    pokemon: "Golem",
    startValue: 0,
    stopValue: 120,
    operators: 2
});
levelList.push({
    level: 17,
    pokemon: "Rayquaza",
    startValue: 0,
    stopValue: 150,
    operators: 2
});


document.getElementById("nextLevel").style.visibility = "hidden";
document.getElementById("svara").style.visibility = "visible";
document.getElementById("level").innerHTML = "Level " + levelList[counter].level;
fillArrays();

function fillArrays() {
    for (i = 0; i < 10; i++) {
        xList.push(Math.floor((Math.random() * levelList[counter].stopValue) + levelList[counter].startValue));
        yList.push(Math.floor((Math.random() * levelList[counter].stopValue) + levelList[counter].startValue));
        operatorList.push(getOperator());
        let answer;
        if (operatorList[i] == "+") {
            correctAnswerList.push(xList[i] + yList[i]);
        } else if (operatorList[i] == "-") {
            correctAnswerList.push(xList[i] - yList[i]);
        } else if (operatorList[i] == "*"){
            correctAnswerList.push(xList[i] * yList[i]);
        } else {
            if (xList[i] < yList[i]) {
                let temp = xList[i];
                xList[i] = yList[i];
                yList[i] = temp;
                if (xList[i] % yList[i] == 0){
                    //nice
                } else {
                   xList[i] = 6;
                   yList[i] = 2;
                }
            }
            correctAnswerList.push(xList[i] / yList[i]);
        }

    }
}


function getOperator() {

    let operatorRandom = Math.floor((Math.random() * levelList[counter].operators + 1));

    if (operatorRandom == 1) {
        return "+";
    } else if (operatorRandom == 2) {
        return "-";
    } else if (operatorRandom == 3) {
        return "*";
    }
    else {
        return "/";
    }

}


function setQuestions(id, listPos) {
    document.getElementById(id).innerHTML = xList[listPos] + " " + operatorList[listPos] + " " + yList[listPos] + " =";

}


setQuestions("one", 0);
setQuestions("two", 1);
setQuestions("three", 2);
setQuestions("four", 3);
setQuestions("five", 4);
setQuestions("six", 5);
setQuestions("seven", 6);
setQuestions("eigth", 7);
setQuestions("nine", 8);
setQuestions("ten", 9);

function checkAnswers() {
    let answerList = document.getElementsByClassName('form-control');
    for (let i = 0; i < 10; i++) {
        userAnswerList.push(answerList[i].value);
        let resultTd = document.getElementsByClassName('result');

        if (userAnswerList[i] == correctAnswerList[i]) {
            resultTd[i].innerHTML = '\uD83D\uDE03';
            resultTd[i].style = "background-color: lightgreen";
            correctCounter++;
        } else {
            resultTd[i].innerHTML = '\u2639' + " S    = " + correctAnswerList[i];
            resultTd[i].style = "background-color: red; color: white";

        }
    }
    if (correctCounter == 10) {
        drawPokemon();
    } else {
        tryAgain();
    }
}

function drawPokemon() {
    document.getElementById("pokemonbild").src = "img/pokemon/" + levelList[counter].pokemon +".gif";
    document.getElementById("pokemontext").innerHTML = "Grattis, du fick alla rätt! Ditt pris är en " + levelList[counter].pokemon +"!";
    document.getElementById("pokemonrubrik").innerHTML = levelList[counter].pokemon;
    document.getElementById("nextLevel").style.visibility = "visible";
    document.getElementById("svara").style.visibility = "hidden";
    counter++;

}

function tryAgain() {
    document.getElementById("pokemonbild").src = "img/pokemon.jpg";
    document.getElementById("pokemontext").innerHTML = "Spela en gång till på denna nivå och försök få alla rätt!";
    document.getElementById("pokemonrubrik").innerHTML = "Ingen Pokemon denna gång.";
    document.getElementById("nextLevel").style.visibility = "visible";
    document.getElementById("svara").style.visibility = "hidden";
}

function clearInputs() {
    let answerList = document.getElementsByClassName('form-control');
    let correctList = document.getElementsByClassName('result');
    for (let i = 0; i < 10; i++) {
        answerList[i].value = " ";
        correctList[i].innerHTML = " ";
        correctList[i].style = "background-color:rgb(228, 237, 253)"; 
    }
}

function restart(value) {

    document.getElementById("nextLevel").style.visibility = "hidden";
    document.getElementById("svara").style.visibility = "visible";
    document.getElementById("level").innerHTML = "Level " + levelList[counter].level;
    xList = [];
    yList = [];
    operatorList = [];
    correctAnswerList = [];
    userAnswerList = [];
    correctCounter = 0;
    fillArrays();
    clearInputs();

    setQuestions("one", 0);
    setQuestions("two", 1);
    setQuestions("three", 2);
    setQuestions("four", 3);
    setQuestions("five", 4);
    setQuestions("six", 5);
    setQuestions("seven", 6);
    setQuestions("eigth", 7);
    setQuestions("nine", 8);
    setQuestions("ten", 9);

}