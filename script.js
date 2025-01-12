console.log("guh")
fetch("https://gachaytb3.org/addvisitor");

fetch("https://gachaytb3.org/visitorcount").then(d => {
        console.log(d);
        document.getElementById("visitors").innerText = "Visitors: " + d;
    });