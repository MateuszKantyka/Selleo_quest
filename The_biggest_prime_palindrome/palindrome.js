var primeNumber = [];

function showBiggestPrimePalindrome() {

  for (var i = 1; i < 10000; i++) {
  generatingPrimeNumbers(i);
}

showPrimeNumbers();

  for (var i = primeNumber.length - 1; i > 0; i--) {
  if (checkingNumbersIsPalindrome(primeNumber[i]) == true) {
    alert(primeNumber[i]);
    return 0;
  }};
}

function checkingNumbersIsPalindrome(number) {

  var temp = String(number);
  var arrayOfNumber = [];

 for (var i = 0; i < temp.length; i++) {
   arrayOfNumber.push(temp[i]);
 }

  arrayOfNumber.reverse();

var expectancy = "";
for (var i = 0; i < arrayOfNumber.length; i++) {
  expectancy = expectancy + arrayOfNumber[i];
}

var expectancy = parseInt(expectancy);
 if (number == expectancy) {
   return true;
 }
}

function showPrimeNumbers() {
  for (var i = 0; i < primeNumber.length; i++)
  {
    document.getElementById("show").value += primeNumber[i]  + "\n";
  }
}

function generatingPrimeNumbers(n) {
if(n<2)
{
   return(0);
}

for(var i=2;i*i<=n;i++)
{
  if(n%i==0)
  {
    return(0);
  }
}
      primeNumber.push(n);
 }


//Write a program which determines the largest prime palindrome less than 10000.
//Print to stdout the largest prime palindrome less than 10000.

//document.getElementById("show").value += n  + "\n";
