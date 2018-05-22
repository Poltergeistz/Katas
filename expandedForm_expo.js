/* expandedForm(12); // Should return '10 + 2*1'
  expandedForm(42); // Should return '4*10 + 2*1'
  expandedForm(70304); // Should return '7*10000 + 3*100 + 4*1' */

  function expandedForm(nb1){
  
    var result = [];
    var num = nb1.toString();
    var puissance = num.length -1;
    // var dix = Math.pow(10, 1); // expected 10
    // console.log(puissance)
    for (i=0; i<num.length; i++){
      if (num[i] != 0){
        if (num[i] != 1){
        result.push(num[i] + "*" + Math.pow(10, puissance -i))
      } else {
          result.push(Math.pow(10, puissance -i).toString())
      }
      } 
    }
    console.log(result.join(" + "))
  }

  expandedForm(12)