let total = 0;

const multiples = (num) => {
  if (num < 3) { return total; }
  if (num % 3 === 0 || num % 5 === 0) {
    console.log(num, total);
    total = total + num ;
  }
  multiples(num - 1);
}; 

multiples(1000);
