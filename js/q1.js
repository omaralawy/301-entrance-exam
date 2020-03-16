function greaterThan(arr,x)  {
  var number=0;
  for (let G = 0; G < arr.length; G++) {
    if (arr[G]>x){
      number++;
    }
  }
return number;
}