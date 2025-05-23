let r = document.getElementById("r");
let p = document.getElementById("p");
let c = document.getElementById("c");
let test = document.getElementById("test");
let ma = document.getElementById("ma");
let u = document.getElementById("u");
let ress = document.getElementById("ress");

let body = document.getElementById("body");

let tie = document.getElementById("tie");
let won = document.getElementById("won");
let lost = document.getElementById("lost");

let t =0,w=0,l=0;

let rc = 1, pc = 2, cc = 3;



r.addEventListener("click",() => {

    let rnd = Math.floor(Math.random() * 3) + 1;

    console.log(rnd)
    if (rnd == 1) {
        ma.innerText = "Rock"
        u.innerText = "Rock"
        ress.innerText = "Tie"
        tie.innerText = (++t)+" "
        body.style.backgroundColor = "White"

        
    }
    else if (rnd == 2) {
        ma.innerText = "Paper"
        u.innerText = "Rock"
        ress.innerText = "You Lost"
        body.style.backgroundColor = "red"
        lost.innerText = (++l)+" "
        
    }
    else if(rnd==3) {
        ma.innerText = "Scissor"
        u.innerText = "Rock"
        ress.innerText = "You Won"
        body.style.backgroundColor = "green"
        won.innerText = (++w)+" "

        
    }
    
})

p.addEventListener("click",() => {
    
    let rnd = Math.floor(Math.random() * 3) + 1;

    console.log(rnd)
    if (rnd == 1) {
        ma.innerText = "Rock"
        u.innerText = "Paper"
        ress.innerText = "You Won"
        body.style.backgroundColor = "Green"
        won.innerText = (++w)+" "

        
    }
    else if (rnd == 2) {
        ma.innerText = "Paper"
        u.innerText = "Paper"
        ress.innerText = "Tie"
        tie.innerText = (++t)+" "
        body.style.backgroundColor = "White"
        
    }
    else if(rnd==3) {
        ma.innerText = "Scissor"
        u.innerText = "Paper"
        ress.innerText = "You Lost"
        body.style.backgroundColor = "red"
        lost.innerText = (++l)+" "

        
    }
    
})

c.addEventListener("click",() => {
    
    let rnd = Math.floor(Math.random() * 3) + 1;

    console.log(rnd)
    if (rnd == 1) {
        ma.innerText = "Rock"
        u.innerText = "Scissor"
        ress.innerText = "You Lost"
        body.style.backgroundColor = "red"
        lost.innerText = (++l)+" "

        
    }
    else if (rnd == 2) {
        ma.innerText = "Paper"
        u.innerText = "Scissor"
        ress.innerText = "You Won"
        body.style.backgroundColor = "green"
        won.innerText = (++w)+" "

    }
    else if(rnd==3) {
        ma.innerText = "Scissor"
        u.innerText = "Scissor"
        ress.innerText = "Tie"
        tie.innerText = (++t)+" "
        body.style.backgroundColor = "White"


    }

})