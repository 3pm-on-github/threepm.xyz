console.log("rah")
fetch("https://gachaytb3.org/addvisitor");

fetch("https://gachaytb3.org/visitorcount").then((response) => {
        console.log(response.text());
        document.getElementById("visitors").innerText = "Visitors: " + response.text();
    });