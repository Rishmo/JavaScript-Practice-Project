let input = document.getElementById("input");
let button =  document.querySelectorAll("button");

button.forEach(ele => {
    ele.addEventListener("click", (e) => {
        console.log(e.target.textContent); // for printing tagated input
        
        if(e.target.textContent === 'AC'){
            input.innerText = " "; // clearing text when pressed c
        }

        else if(e.target.textContent === "<"){
            input.innerText = input.innerText.slice(0,-1); // fro removing text from right
        }

        else if( e.target.textContent === "="){
            input.innerText = eval(input.innerText); // convert everything in number
        }
    
        else{
            input.innerText += e.target.textContent;
        }

        input.scrollLeft = input.scrollWidth; // for srolling content in left 
    })
 });

   