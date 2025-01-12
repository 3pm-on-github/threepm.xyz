console.log("guh")
const visitorcount = document.getElementById("visitors");
fetch("https://gachaytb3.org/addvisitor");

fetch("https://gachaytb3.org/visitorcount").then(res =>
    res.json()).then(d => {
        console.log(d);
        visitorcount.innerText = "Visitors: " + d;
    });