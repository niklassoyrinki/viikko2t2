function tarkastaEtumerkki() {
  luku1 = parseInt(document.getElementById('aluku').value);
  if (luku1 >= 0) {
    console.log("luku on positiivinen");
  } else {
    console.log("luku on negatiivinen");
  }





}

function viikonpaiva() {
  luku1 = parseInt(document.getElementById('vluku').value);
  if (luku1 == 1) {
    console.log("Maanantai");

  } else if (luku1 == 2) {
    console.log("Tiistai");

  } else if (luku1 == 3) {
    console.log("Keskiviikko");

  } else if (luku1 == 4) {
    console.log("Torstai");

  } else if (luku1 == 5) {
    console.log("Perjantai");

  } else if (luku1 == 6) {
    console.log("Lauantai");

  } else
    console.log("Sunnuntai");




}


function onkoKarkaus() {
  luku1 = parseInt(document.getElementById('kluku').value);
  var jaollinenneljalla = luku1 % 4 == 0;
  var eijaollinensadalla = luku1 % 100 != 0;
  if (jaollinenneljalla && eijaollinensadalla)
    console.log("Vuosi on karkausvuosi")
  else if (luku1 % 400 == 0) {
    console.log("Vuosi on karkausvuosi")
  } else console.log("Vuosi ei ole karkausvuosi")

}

function summaKeskiarvo() {
  luku01 = parseInt(document.getElementById('luku01').value);
  luku02 = parseInt(document.getElementById('luku02').value);
  luku03 = parseInt(document.getElementById('luku03').value);
  luku04 = parseInt(document.getElementById('luku04').value);
  luku05 = parseInt(document.getElementById('luku05').value);
  var summa = luku01 + luku02 + luku03 + luku04 + luku05;
  var keskiarvo = summa / 5;
  console.log("lukujen summa on " + summa + " ja keskiarvo on " + keskiarvo);

}

function teeKertotaulu() {
  luku1 = parseInt(document.getElementById('kerrottava').value);
  var vastaus = "";
  vastaus += luku1 + "x 1 = " + luku1 * 1 + "\n";
  vastaus += luku1 + "x 2 = " + luku1 * 2 + "\n";
  vastaus += luku1 + "x 3 = " + luku1 * 3 + "\n";
  vastaus += luku1 + "x 4 = " + luku1 * 4 + "\n";
  vastaus += luku1 + "x 5 = " + luku1 * 5 + "\n";
  vastaus += luku1 + "x 6 = " + luku1 * 6 + "\n";
  vastaus += luku1 + "x 7 = " + luku1 * 7 + "\n";
  vastaus += luku1 + "x 8 = " + luku1 * 8 + "\n";
  vastaus += luku1 + "x 9 = " + luku1 * 9 + "\n";
  vastaus += luku1 + "x 10 = " + luku1 * 10;
  console.log(vastaus);



}
