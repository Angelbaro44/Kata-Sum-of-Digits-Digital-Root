# Kata-Sum-of-Digits-Digital-Root



Description:
-
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Example:
-
    16  -->  1 + 6 = 7
     942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
    132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
      493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2







Test Cases:
-
    Test.describe('Basic tests', function() {
    Test.it('Should pass basic tests', function() {
    Test.assertEquals( digital_root(16), 7 )
    Test.assertEquals( digital_root(195), 6 )
    Test.assertEquals( digital_root(992), 2 )
    Test.assertEquals( digital_root(999999999999), 9 )
    Test.assertEquals( digital_root(167346), 9 )
    Test.assertEquals( digital_root(10), 1 )
    Test.assertEquals( digital_root(0), 0 )
     })
    })

    Test.describe('Random tests', function() {
    Test.it('Should pass random tests', function() {
  
    function digital_root_sol(n) {
      return n>0 ? 1 + ((parseInt(n) - 1) % 9) : 0
    }
    
    for (let i = 0; i < 100; i++) {
      let n = Math.floor(Math.random() * 1000000);
      Test.assertEquals( digital_root(n), digital_root_sol(n) )
    }
    
     })
    })
