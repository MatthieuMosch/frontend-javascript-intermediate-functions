// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain(emailAdres){
    const posAt = emailAdres.indexOf('@');
    //default output (error value)
    let returnString = "No @ in input. Domain cannot be found."; //error message in english
    if (posAt != -1) {
        // @ found, take part after @ as domain
        returnString =  emailAdres.substring(posAt+1);
    }
    return returnString;
}

console.log(getEmailDomain("n.eeken@novi-education.nl"));
console.log(getEmailDomain("t.mellink@novi.nl"));
console.log(getEmailDomain("a.wiersma@outlook.com"));
//console.log(getEmailDomain("n.eeken_at_novi-education.nl")); //checking error


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail(emailAdres){
    const startDomain = emailAdres.indexOf('@') + 1;
    const endDomain = emailAdres.lastIndexOf('.');
    //default output (error value)
    let returnString = "Incorrect adres. Geen domein gevonden."; //message in dutch as the other return values are in dutch as well
    //updating output in case of correct input
    if ((startDomain != 0) && (endDomain != -1) && (endDomain > startDomain)) {
        const domain =  emailAdres.substring(startDomain,endDomain);
        switch (domain.toLowerCase()) {
            case "novi":
                returnString =  "Medewerker";
                break;
            case "novi-education":
                returnString =  "Student";
                break;
            case "outlook": //the outlook domain is also extern like the default domain, so falling through to default here
                // returnString =  "Outlook";
                // break;
            case "gmail": //the gmail domain is also extern like the default domain, so falling through to default here
                // returnString =  "Gmail";
                // break;
            default:
                returnString =  "Extern"; //all other addresses are extern (including gmail.com and outlook.com
                break;
        }
    }
    return returnString;
}

console.log(typeOfEmail("n.eeken@novi-education.nl"));
console.log(typeOfEmail("t.mellink@novi.nl"));
console.log(typeOfEmail("novi.nlaapjesk@outlook.com"));
console.log(typeOfEmail("a.wiersma@outlook.com"));
// console.log(typeOfEmail("a.wiersma@outlookcom")); //checking error
// console.log(typeOfEmail("a.wiersmaoutlook.com")); //checking error
// console.log(typeOfEmail("a.wiersmaoutlookcom")); //checking error

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity(emailAdres){
    if (emailAdres.indexOf('@') == -1) return false; //email address should contain an @
    //email address should not contain more than 1 @
    if emailAdres.indexOf(',') != -1) return false; //email  address should not contain an ,
    if (emailAdres.indexOf('.') == -1) return false; //
    //email address should contain a . after @
    //email address should not have a . s last character
    return true; //otherwise the email address is balid
}

