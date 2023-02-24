for(let i = 1; i <= 100; i++) {

   if (i % 15 == 0) {
      console.log("FizzBuzz");
   } else if (i % 5 == 0) {
      console.log("Buzz");
   } else if (i % 3 == 0) {
      console.log("Fizz");
   } else {
      console.log(i);
   }
}


// const griglia = document.getElementById("griglia");
// const div = document.createElement("div");
// div.append(i);
// griglia.append(div);