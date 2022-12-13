//de fem variablene under, brukes til å bestemme om du vil kaste en terning eller beholde den
var terning1av = false;
var terning2av = false;
var terning3av = false;
var terning4av = false;
var terning5av = false;
let farge = document.getElementsByClassName("tatt"); //skulle bli brukt til å endre farge på noen ting, men den funker ikke
runde = 0; //bestemmer hvem sin runde det er, blir brukt i en funksjon som reseter den
var terningside1 = 0;
var terningside2 = 0;
var terningside3 = 0;
var terningside4 = 0;
var terningside5 = 0;
let verdi1 = Number(0)
let verdi2 = Number(0)
let verdi3 = Number(0)
let verdi4 = Number(0)
let verdi5 = Number(0)
var kast = 3 // bestemmer hvor mange kast du har, det er en kode som resetter den
var sumEnere = 0; //Brukes for å samle summen til alle enere toere treere ect.
var SumAlle
sum = 0;

//Skulle få endre stylen til hver spiller, for å vise hvem som spiller, men det har ikke funket så langt
var p1 = document.getElementsByClassName("p1");
var p2 = document.getElementsByClassName("p2");
var p3 = document.getElementsByClassName("p3");
var p4 = document.getElementsByClassName("p4");
var p5 = document.getElementsByClassName("p5");

var person = [p1, p2, p3 , p4 , p5]

// bestemmer hvilken kolonne som spilles på 
var aktuelTag1 = document.getElementsByClassName("1")
var aktuelTag2 = document.getElementsByClassName("2")
var aktuelTag3 = document.getElementsByClassName("3")
var aktuelTag4 = document.getElementsByClassName("4")
var aktuelTag5 = document.getElementsByClassName("5")
var aktuelTag6 = document.getElementsByClassName("6")
var aktuelTag7 = document.getElementsByClassName("7")
var aktuelTag8 = document.getElementsByClassName("8")
var aktuelTag9 = document.getElementsByClassName("9")
var aktuelTag10 = document.getElementsByClassName("10")
var aktuelTag11 = document.getElementsByClassName("11")
var aktuelTag12 = document.getElementsByClassName("12")
var aktuelTag13 = document.getElementsByClassName("13")
var aktuelTag14 = document.getElementsByClassName("14")
var aktuelTag15 = document.getElementsByClassName("15")
var aktuelTag16 = document.getElementsByClassName("16")
var aktuelTag17 = document.getElementsByClassName("17")
var aktuelTag18 = document.getElementsByClassName("18")
var aktuelTag = [aktuelTag1, aktuelTag2, aktuelTag3, aktuelTag4, aktuelTag5, aktuelTag6, aktuelTag7, aktuelTag8, aktuelTag9, aktuelTag10, aktuelTag11, aktuelTag12, aktuelTag13, aktuelTag14, aktuelTag15, aktuelTag16, aktuelTag17, aktuelTag18]


let terning = [1, 2, 3, 4, 5, 6]; //Brukes til å få et tilfeldig nummer av terningene

var antallSpillere = 0;
//funktionen startSpill, bestemmer hvor mange spillere som spiller, og hvil spørre etter navn
function startSpill() {
    antallSpillere = Number(prompt("antall spillere maks(5)"))

    if (antallSpillere == 1) {
        let navn1 = prompt("Navnet til spiller 1");
        person1.innerHTML = navn1;
        person[0].style.backgroundcolor = "blue";
    }

    if (antallSpillere == 2) {
        navn1 = prompt("Navnet til spiller 1");
        person1.innerHTML = navn1;
        let navn2 = prompt("Navnet til spiller 2");
        person2.innerHTML = navn2;
    }

    if (antallSpillere == 3) {
        navn1 = prompt("Navnet til spiller 1");
        person1.innerHTML = navn1;
        navn2 = prompt("Navnet til spiller 2");
        person2.innerHTML = navn2;
        let navn3 = prompt("Navnet til spille 3");
        person3.innerHTML = navn3;
    }

    if (antallSpillere == 4) {
        navn1 = prompt("Navnet til spiller 1");
        person1.innerHTML = navn1;
        navn2 = prompt("Navnet til spiller 2");
        person2.innerHTML = navn2;
        navn3 = prompt("Navnet til spiller 3");
        person3.innerHTML = navn3;
        let navn4 = prompt("Navnet til spiller 4");
        person4.innerHTML = navn4;
    }

    if (antallSpillere == 5) {
        navn1 = prompt("Navnet til spiller 1");
        person1.innerHTML = navn1;
        navn2 = prompt("Navnet til spiller 2");
        person2.innerHTML = navn2;
        navn3 = prompt("Navnet til spiller 3");
        person3.innerHTML = navn3;
        navn4 = prompt("Navnet til spiller 4");
        person4.innerHTML = navn4;
        let navn5 = prompt("Navnet til spiller 5");
        person5.innerHTML = navn5;
    }
}
//Tillater spillere å bestemme om de vil beholde en terning eller ikke.
function behold1() {
    terning1av = true;
    
}

function behold2() {
    terning2av = true;
    
}

function behold3() {
    terning3av = true;
    
}

function behold4() {
    terning4av = true;
    
}

function behold5() {
    terning5av = true;
   
}

function ikkeBehold1() {
    terning1av = false;
}

function ikkeBehold2() {
    terning2av = false;
}

function ikkeBehold3() {
    terning3av = false;
}

function ikkeBehold4() {
    terning4av = false;
}

function ikkeBehold5() {
    terning5av = false;
}

//Denne funktionen resetter terningene, etter hver runde.
function resetTerning() {
    kast = 3;
    document.getElementById("spin").disabled = false;
    runde++;
    ikkeBehold1();
    ikkeBehold2();
    ikkeBehold3();
    ikkeBehold4();
    ikkeBehold5();
    terning1.innerHTML = '';
    terning2.innerHTML = '';
    terning3.innerHTML = '';
    terning4.innerHTML = '';
    terning5.innerHTML = '';
    
}

//Bestemmer antall runder, basert på hvor mange spillere det er
function resetRunde(){
    if(runde >= antallSpillere ){
        runde = 0;
    }
}

//Funktionen under, løser alle rader 1 til 6 i yatzy tabelle. Den får parameteret fra html
function rundPer1(tall) {
    resetTerning();

    sumEnere = 0;
    if (terningside1 == tall) {
        sumEnere = sumEnere + terningside1;
    }
    if (terningside2 == tall) {
        sumEnere = sumEnere + terningside2;
    }
    if (terningside3 == tall) {
        sumEnere = sumEnere + terningside3;
    }
    if (terningside4 == tall) {
        sumEnere = sumEnere + terningside4;
    }
    if (terningside5 == tall) {
        sumEnere = sumEnere + terningside5;
    }
    aktuelTag[tall - 1][runde - 1].innerHTML = sumEnere

    aktuelTag[6][runde - 1].innerHTML = Number(sumHalv(verdier))
} 

var verdier = 0;
var verdier1 = 0;
var verdier2 = 0;
var verdeir3 = 0;
var verdier4 = 0;
var verdier5 = 0;

//denne opdaterer summen halveis inn i spillet, etter hver poengsum, og legger til bonus, når du får det
function sumHalv(){
     if(runde == 1) {
         verdier1 += sumEnere;
         verdier = verdier1;
         if(verdier >= 63){
            aktuelTag[7][runde - 1].innerHTML = 50
         }
         return verdier;
         
     }

     if(runde == 2) {
        verdier2 += sumEnere;
        verdier = verdier2;
        if(verdier >= 63){
            aktuelTag[7][runde - 1].innerHTML = 50
         }
        return verdier;
    }

    if(runde == 3) {
        verdier3 += sumEnere;
        verdier = verdier3;
        if(verdier >= 63){
            aktuelTag[7][runde - 1].innerHTML = 50
         }
        return verdier;
    }

    if(runde == 4) {
        verdier4 += sumEnere;
        verdier = verdier4;
        if(verdier >= 63){
            aktuelTag[7][runde - 1].innerHTML = 50
         }
        return verdier;
    }

    if(runde == 5) {
        verdier5 += sumEnere;
        verdier = verdier5;
        if(verdier >= 63){
            aktuelTag[7][runde - 1].innerHTML = 50
         }
        return verdier;
    }
}

//Funktionene under får et par, til å kjøre når du trykker på et par
var parAntall = 0;
function par1(){
    resetTerning()
    parAntall = 0;
    if(terningside1 == terningside2 || terningside1 == terningside3 || terningside1 == terningside4 || terningside1 == terningside5){
        parAntall = terningside1 * 2;
    }
    if(terningside2 ==terningside3 || terningside2 == terningside4 || terningside2 == terningside5){
        parAntall = terningside2 * 2;
    }
    if(terningside3 == terningside4 || terningside3 == terningside5){
        parAntall = terningside3 * 2;
    }
    if(terningside4 == terningside5){
        parAntall = terningside4 * 2;
    }
    aktuelTag[8][runde-1].innerHTML = parAntall;
    
}
//Denne fungerer ikke
function par2(){
    resetTerning()
    parAntall = 0;
    
}

//Alle funktionene under, får terningene til å spinne, i tillegg til å låse terningene etter tre kast.
function spinTerning() {
    kastAlle()
}

function kastAlle() {
    kastTerning1();
    kastTerning2();
    kastTerning3();
    kastTerning4();
    kastTerning5();
    kast--;
    if (kast == 0) {
        document.getElementById("spin").disabled = true;
    }
}

function kastTerning1() {
    if (terning1av == false) {
        let terning1Tilfeldig = terning[Math.floor(Math.random() * terning.length)];
        terning1.innerHTML = terning1Tilfeldig;
        terningside1 = terning1Tilfeldig;
    }
}

function kastTerning2() {
    if (terning2av == false) {
        let terning2Tilfeldig = terning[Math.floor(Math.random() * terning.length)];
        terning2.innerHTML = terning2Tilfeldig;
        terningside2 = terning2Tilfeldig;
    }
}

function kastTerning3() {
    if (terning3av == false) {
        let terning3Tilfeldig = terning[Math.floor(Math.random() * terning.length)]
        terning3.innerHTML = terning3Tilfeldig;
        terningside3 = terning3Tilfeldig;
    }
}

function kastTerning4() {
    if (terning4av == false) {
        let terning4Tilfeldig = terning[Math.floor(Math.random() * terning.length)]
        terning4.innerHTML = terning4Tilfeldig;
        terningside4 = terning4Tilfeldig;
    }
}

function kastTerning5() {
    if (terning5av == false) {
        let terning5Tilfeldig = terning[Math.floor(Math.random() * terning.length)]
        terning5.innerHTML = terning5Tilfeldig;
        terningside5 = terning5Tilfeldig;
    }
}

