console.log("3pm was here :3");
fetch("https://gachaytb3.org/addvisitor");

fetch("https://gachaytb3.org/visitorcount").then((response) => {
    response.text().then((text) => {
        document.getElementById("visitors").innerText = "Visitors: " + text;
    });
});