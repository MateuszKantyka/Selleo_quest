$primeNumber = []

def generatingPrimeNumbers(n)
  if n < 2
    return 0
  end

  i = 2
  while i*i <= n
    if n%i==0
      return 0
    end
  i+=1
  end
  $primeNumber << n
end

def checkingNumbersIsPalindrome(number)
  temp = number.to_s
  if temp == number.to_s.reverse
   p number
   abort
  end
end

  for i in 0..10000
     generatingPrimeNumbers(i)
  end

  $primeNumber.reverse_each { |i| checkingNumbersIsPalindrome(i) }
