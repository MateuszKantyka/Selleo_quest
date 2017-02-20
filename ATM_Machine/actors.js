var Person = {
    pin: 1234,
    cash: 1000,
    wallet:100,
    cardStatus: true
}

var ATM = {
    cashATM: 10000
}

var Bank ={
  resetCard : function () {
    Person.cardStatus = true;
  }
}

var ATMoperator ={
  addingCash : function(cashToAdd) {
        ATM.cashATM = ATM.cashATM + cashToAdd;
    }
}
