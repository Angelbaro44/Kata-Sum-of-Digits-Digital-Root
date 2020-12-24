function digital_root(n) {
      let arr =  n.toString().split('').map((x)=> Number(x));
         while (arr.length > 1){
         arr = arr.reduce((x,y)=>((y+x))).toString().split('').map((x)=> Number(x));   
      }
      console.log(   Number(arr.toString())  )
      return Number(arr.toString())
}

