function recursive(num, stopNum){
    if(num > stopNum){
      return
    }
    console.log(num);
  
    num++;
    recursive(num, stopNum);
  }
  
  recursive(0, 10)