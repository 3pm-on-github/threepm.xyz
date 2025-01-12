console.log("rah");
fetch("https://gachaytb3.org/addvisitor");

fetch("https://gachaytb3.org/visitorcount").then((response) => {
    response.text().then((text) => {
        console.log(text);
        document.getElementById("visitors").innerText = "Visitors: " + text;
    });
});