let doener = document.getElementById("doener")
let item = document.getElementById("item")
let item2 = document.getElementById("item2")
let item3 = document.getElementById("item3")
let item4 = document.getElementById("item4")
let counter = document.getElementById("counter")
let budgetcounter = document.getElementById("budgetcounter")
let price = document.getElementById("price")

var budgetprice = 10

let points = 0;
let budget = 0;

let budgetcount = function() {
    budget = Math.ceil((budget + budgetprice) * 100)/100
    budgetcounter.innerHTML = budget;
    price.innerHTML = budgetprice;
}

let doenerclick = function(e){
        points = points + 1;
        counter.innerHTML = points;
        if(budget >= 1190) {
            item.classList.remove("hidden");
        }
        setInterval(function() {
            if(budget < 1190) {
                item.classList.add("hidden");
            }
        }, 100);
        if(budget >= 3490) {
            item2.classList.remove("hidden");
        }
        setInterval(function() {
            if(budget < 3490) {
                item2.classList.add("hidden");
            }
        }, 100);
        if(budget >= 4740) {
            item3.classList.remove("hidden");
        }
        setInterval(function() {
            if(budget < 4740) {
                item3.classList.add("hidden");
            }
        }, 100);
        if(budget >= 18890) {
            item4.classList.remove("hidden");
        }
        setInterval(function() {
            if(budget < 18890) {
                item4.classList.add("hidden");
            }
        }, 100);
}

let minus200 = function(e){
    budget = budget - 1200;
    budgetcounter.innerHTML = budget;
    budgetprice = budgetprice + 0.3
    price.innerHTML = budgetprice;
}

let minus300 = function(e){
    budget = budget - 3500;
    budgetcounter.innerHTML = budget;
    budgetprice = budgetprice + 1
    price.innerHTML = budgetprice;
}

let minus400 = function(e){
    budget = budget - 4750;
    budgetcounter.innerHTML = budget;
    budgetprice = budgetprice + 1.5
    price.innerHTML = budgetprice;
}

let minus500 = function(e){
    budget = budget - 18900;
    budgetcounter.innerHTML = budget;
    budgetprice = budgetprice + 2
    price.innerHTML = budgetprice;
}


doener.addEventListener("click", doenerclick);
item.addEventListener("click", minus200);
item2.addEventListener("click", minus300);
item3.addEventListener("click", minus400);
item4.addEventListener("click", minus500);
doener.addEventListener("click", budgetcount);


// Stopwatch
var time = document.getElementsByClassName("stopwatch"),
c=0, s=0, m=0, io=0, itv=null;

function playPause() {
    io = !io;
    return io ? itv = setInterval(count, 300) : clearInterval(itv);
  }