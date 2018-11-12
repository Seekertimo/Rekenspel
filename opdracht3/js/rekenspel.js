const som = document.getElementById("som");
const button = document.getElementById("startbutton");
const sum = document.getElementById("sum");
const answer = document.getElementById("answer");
var result = document.getElementById("result");
var score = document.getElementById("score");
var myTable = document.createElement('table');

// Arrays
//var sumarray = [];
var easiersumarray = [];
var answerarray = [];
var resultarray = [];
var correctanswerarray = [];

function startGame()
{
som.style.display = 'block';
button.style.display = 'none';
}

function makeSum() //Maakt de Som
{
    var a = Math.floor(Math.random() * 9 + 1);
    var b = Math.floor(Math.random() * 9 + 1);
    mySum = a + " * " + b;
    easierSum = a + " x " +b;
    //sumarray.push(mySum);
    easiersumarray.push(easierSum);
    sum.innerHTML = a + " x " + b;
}

function keyPressed(evt) //Controleert de som en pushed naar de array
{
    if (evt.keyCode == 13)
    {
        answerarray.push(answer.value);
        correctanswerarray.push(eval(mySum));
        if (eval(mySum) == answer.value)
        {
            // Antwoord goed
            resultarray.push(1);
            arraycheck();
        } else {
            // Antwoord fout
            resultarray.push(0);
            arraycheck();
        }
    }
}

function arraycheck() //Checkt alle arrays
{
        if(answerarray.length >= 10) {
            answer.value = "If nothing happens its broken!";
            answer.disabled = true;
            showscore();
        } else {
            answer.value = "";
            makeSum();
            //window.setTimeout(waiting, 1);
        }
    }

function showscore() //Showt de score op het einde
{
        som.style.display = 'none';
        score.style.display = 'block';
        result.style.display = 'block';
        for (var i = 0; i < resultarray.length; i++)
        {

            var row1 = myTable.insertRow(i);
            var cellSom1 = row1.insertCell();
            var cellJouwAntwoord1 = row1.insertCell();
            var cellCorrectAntwoord1 = row1.insertCell();

            cellSom1.innerHTML = easiersumarray[i];
            cellJouwAntwoord1.innerHTML = answerarray[i];
            cellCorrectAntwoord1.innerHTML = correctanswerarray[i];
        }
    var row = myTable.insertRow(0);
    var cellSom = row.insertCell(0);
    var cellJouwAntwoord = row.insertCell(1);
    var cellCorrectAntwoord = row.insertCell(2);
    cellSom.innerHTML = 'Som';
    cellJouwAntwoord.innerHTML = 'Jouw Antwoord';
    cellCorrectAntwoord.innerHTML = 'Correct antwoord';

    score.appendChild(myTable);
}
function restartGame()
{
//    sumarray = [];
    easiersumarray = [];
    answerarray = [];
    resultarray = [];
    correctanswerarray = [];
    score.style.display = 'none';
    result.style.display = 'none';
    answer.value = "";
    answer.disabled = false;
    myTable.innerHTML = "";
    makeSum();
    startGame();


}
    makeSum();
    answer.addEventListener("keydown", keyPressed, false);
