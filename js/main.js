document.getElementById("reset").addEventListener("click", ()=> location.reload())

for(let i = 1; i <= 100; i++) {

   const griglia = document.getElementById("griglia");
   const div = document.createElement("div");
   div.append(i);
   let counterDom = document.getElementById("counter");
   var x = 0;
   
   div.addEventListener('click', 
      function () {
         if (i % 15 == 0) {
            div.innerHTML ="Fizz<br>Buzz";
            div.className = "fizzbuzz";
            x = x + 5;
         } else if (i % 5 == 0) {
            div.innerHTML= "Buzz";
            div.className = "buzz";
            x = x + 3;
         } else if (i % 3 == 0) {
            div.innerHTML = "Fizz";
            div.className = "fizz";
            x = x + 1;
         }
         counterDom.innerText = x;      
      }, {once : true}
   )
   griglia.append(div);
}