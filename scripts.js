var coll = document.getElementsByClassName("collapsible");
var i;
var SListe = ["SanPedro", "mare", "Lokii", "coolJojo", "awonga"];
var EListe = [0, 0, 0, 0, 0];

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function updateResults() {
  var P1 = document.getElementById("PONE").value;
  var P2 = document.getElementById("PTWO").value;
  var R1 = document.getElementById("RONE").value;
  var R2 = document.getElementById("RTWO").value;
  var inhalt = document.getElementById("ResultListe");


  inhalt.innerHTML += P1 + " " + R1 +":" + R2 + " " + P2 + "<br>";
  if (R1 > R2) {
    counter(P1)
  }
  else {
    counter(P2)
  }

}

function counter(name) {
  for (i=0; i<SListe.length; i++) {
    if (name == SListe[i]) {
      EListe[i]++;
    }
  }
  var Ausgabe = [SListe[0] + " " + EListe[0], SListe[1] + " " + EListe[1], SListe[2] + " " +EListe[2], SListe[3] + " " +EListe[3], SListe[4] + " " +EListe[4]]
  var AString = ""
  for (i=0; i<5; i++) {
    AString += Ausgabe[i] + "<br>";
  }
  document.getElementById("uebersicht").innerHTML = AString;
}
