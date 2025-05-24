console.log("3pm was here :3");
fetch("https://threepm.xyz/addvisitor");

fetch("https://threepm.xyz/visitorcount").then((response) => {
    response.text().then((text) => {
        document.getElementById("visitors").innerText = "Visitors: " + text;
    });
});
