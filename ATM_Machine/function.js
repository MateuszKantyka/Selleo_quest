function fund() {
  if (Person.wallet > 0) {
    var money = prompt("Ile chcesz wpłacić?");
if (money <= 0) {
  alert("Zła kwota!");
}
else {
  Person.wallet -= parseInt(money);
  Person.cash += parseInt(money);
  addLog("Wpłta pieniędzy do bankomatu przez użytkownika w ilości " + String(money));
}
  }
  else {
    alert("Nie masz przy sobie żadnych pieniędzy!");
  }
}

function withdrawCash() {

  if (Person.cash == 0){
    alert("Nie masz środków na koncie!")
  }
  else {
var money = prompt("Ile chcesz wybrać?");
if (money <= 0 ) {
  alert("Zła kwota!")
}
else if (money > ATM.cashATM) {
  alert("Brak środków w bankomacie.")
}
else if (money > Person.cash) {
    alert("Nie masz wystarczająco środków na koncie!")
}
else {
  Person.wallet += parseInt(money);
  Person.cash -= parseInt(money);
  ATM.cashATM -= money;
  addLog("Wypłata pieniędzy w wysokości " +String(money));
}}}

function showPersonCash() {
  if (Person.cash > 0) {
    alert(Person.cash);
    addLog("Wyświetlenie środków na koncie");
  }
  else {
    alert("Nie masz żadnych środków na koncie!");
  }
}

function logout()
{
  document.getElementById("menu").style.display = "none";
  document.getElementById("welcome").style.display = "block";
   addLog("Wylogowanie z systemu.")
}

function loggin()
{
  var temp = parseInt(document.getElementById("enterPIN").value);
  if (temp == Person.pin) {
    document.getElementById("menu").style.display = "block";
    document.getElementById("welcome").style.display = "none";
    addLog("Zalogowanie się do systemu")
  }
  else {
    alert("Wprowadzony zły PIN, w celu odblokowania konta skontaktuj się z bankiem")
    Person.cardStatus = false;
    addLog("Nieudana próba zalogowania się do systemu");
  }
  document.getElementById("enterPIN").value ="";
}

function addingCash() {
  var cashToAdd = parseInt(document.getElementById("cashFromAtmOperator").value);
ATMoperator.addingCash(cashToAdd);
document.getElementById("cashFromAtmOperator").value ="";
addLog("Dodanie pieniędzy do bankomatu w ilości " +String(cashToAdd)+ " przez operatora");
}

function unlocking() {
  if (Person.cardStatus == false) {
    Bank.resetCard();
    addLog("Odblokowanie karty przez bank");
  }
}

function addLog(txt)
{
  var date = new Date();
  var day = date.getDate();
  var mounth = date.getMonth()+1;
  var year = date.getFullYear();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var sek = date.getSeconds();
  if (sek < 10)  {
  	sek = "0"+sek;
  }
  txt = day + "/" + mounth +"/" + year + " " + hours + ":"+minutes + ":"+sek + " "+ txt + "\n";
document.getElementById("logs").value += txt;
}

function refresh()
{
  document.getElementById("WalletCash").innerHTML = Person.wallet;
  document.getElementById("PersonCash").innerHTML = Person.cash;
  document.getElementById("PersonPin").innerHTML = Person.pin;
  document.getElementById("PersonStatus").innerHTML = Person.cardStatus;
  document.getElementById("ATMCash").innerHTML = ATM.cashATM;
  setTimeout("refresh()",500);
}
