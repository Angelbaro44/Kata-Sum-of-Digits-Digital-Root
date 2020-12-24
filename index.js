function digital_root(n) {
      let arr =  n.toString().split('').map((x)=> Number(x));
         while (arr.length > 1){
         arr = arr.reduce((x,y)=>((y+x))).toString().split('').map((x)=> Number(x));   
      }
      console.log(   Number(arr.toString())  )
      return Number(arr.toString())
}



// Test Cases

digital_root(16) // Expected Result 7
digital_root(195) // Expected Result 6
digital_root(992) // Expected Result 2
digital_root(999999999999) // Expected Result 9
digital_root(167346) // Expected Result 9
digital_root(10) // Expected Result 1
digital_root(0) // Expected Result 0