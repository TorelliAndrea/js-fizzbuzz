for(let i = 1; i <= 100; i++) {

   const griglia = document.getElementById("griglia");
   const div = document.createElement("div");

   if (i % 15 == 0) {
      div.append(i);
      div.addEventListener('click', 
         function () {
            div.innerHTML ="FizzBuzz";
            div.className = "fizzbuzz";
         }
      )   
   } else if (i % 5 == 0) {
      div.append(i);
      div.addEventListener('click', 
         function () {
            div.innerHTML= "Buzz";
            div.className = "buzz";
         }
      )      
   } else if (i % 3 == 0) {
      div.append(i);
      div.addEventListener('click', 
         function () {
            div.innerHTML = "Fizz";
            div.className = "fizz";
         }
      )      
   } else {
      div.append(i);
      div.className = "numeri";
   }

   griglia.append(div);
}

