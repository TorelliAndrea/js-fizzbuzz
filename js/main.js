for(let i = 1; i <= 100; i++) {

   const griglia = document.getElementById("griglia");
   const div = document.createElement("div");
   let x = 0; //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   document.getElementById("counter").innerHTML = x;
   
   if (i % 15 == 0) {
      div.append(i);
      div.addEventListener('click', 
         function () {
            div.innerHTML ="FizzBuzz";
            div.className = "fizzbuzz";
            x = x + 5; //perche non si somma a x?
         }
      )   
   } else if (i % 5 == 0) {
      div.append(i);
      div.addEventListener('click', 
         function () {
            div.innerHTML= "Buzz";
            div.className = "buzz";
            x = x + 3; //perche non si somma a x?
         }
      )      
   } else if (i % 3 == 0) {
      div.append(i);
      div.addEventListener('click', 
         function () {
            div.innerHTML = "Fizz";
            div.className = "fizz";
            x = x + 2; //perche non si somma a x?
         }
      )      
   } else {
      div.append(i);
      div.className = "numeri";
   }

   griglia.append(div);
}

