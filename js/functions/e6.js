for(let i = 100; i < 1000; i++){
  let n = i;
  total = 0
  for(let j = 0; j < 3; j++){
    total += (n % 10) ** 3;
    n = Math.floor(n / 10);
  }
  if(total === i){
    console.log(i);
  }
}