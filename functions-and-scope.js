// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

function countCumLaudeA(lowerLimit=8){
    let counter=0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= lowerLimit){
            counter++;
        }
    }
    return counter;
}

console.log("Er zijn " + countCumLaudeA() + " cum laude studenten");


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

function countCumLaudeB(gradeList, lowerLimit=8){
    let counter=0;
    for (let i = 0; i < gradeList.length; i++) {
        if (gradeList[i] >= lowerLimit){
            counter++;
        }
    }
    return counter;
}

console.log("Er zijn " + countCumLaudeB(grades) + " cum laude studenten");
console.log("Er zijn " + countCumLaudeB([6,4,5]) + " cum laude studenten");
console.log("Er zijn " + countCumLaudeB([8,9,4,6,10]) + " cum laude studenten");

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

// steps:
// - declare function
// - input grades array as parameter
// - add all grades from array with a for loop
// - average  = total sum divided by number of grades
// - return average
// - console.log call function with grades array as argument

function averageGradeA(gradeList){
    let totalSum= 0;
    for (let i = 0; i < gradeList.length; i++) {
        totalSum += gradeList[i];
    }
    return totalSum/gradeList.length;
}

console.log("Het gemiddelde is: " + averageGradeA(grades));

/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft 5
// averageGrade([8, 9, 4, 6, 10]) geeft 7.4

// already done at opdracht 2a

console.log("Het gemiddelde is: " + averageGradeA([6, 4, 5]));
console.log("Het gemiddelde is: " + averageGradeA([8, 9, 5.333, 6, 10])); //changed the 3rd grade to get an average with more decimals


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

function averageGradeC(gradeList){
    let totalSum= 0;
    for (let i = 0; i < gradeList.length; i++) {
        totalSum += gradeList[i];
    }
    const average = totalSum/gradeList.length;
    return Math.round(average * 100) / 100; //move comma 2 places to the right, round to 0 decimals, move comma back 2 places to the left
}

console.log("Het gemiddelde is met 2 decimalen is: " + averageGradeC(grades));
console.log("Het gemiddelde is met 2 decimalen is: " + averageGradeC([6, 4, 5]));
console.log("Het gemiddelde is met 2 decimalen is: " + averageGradeC([8, 9, 5.333, 6, 10])); //changed the 3rd grade to get an average with more decimals

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9

// steps:
// - declare function with grades array as parameter
// - loop through grades array
// - initial maximum grade = 0
// - if a grade is higher than the actual maximum grade then this grade is the new maximum grade
// - return final maximum grade
// - console.log with function call with grades array as argument

function maxGrade(gradeList){
    let max = 0;
    for (let i = 0; i < gradeList.length; i++) {
        if (gradeList[i] > max) max = gradeList[i];
    }
    return max;
}
console.log("Het maximum is: " + maxGrade(grades));

/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

// already done at opdracht 3a

console.log("Het maximum is: " + maxGrade([6, 4, 5]));
console.log("Het maximum is: " + maxGrade([8, 9, 4, 6, 10]));
