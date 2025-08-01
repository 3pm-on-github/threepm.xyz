console.log("3pm was here :3");
fetch("https://threepm.xyz/api/v1/addvisitor");

fetch("https://threepm.xyz/api/v1/visitorcount").then((response) => {
    response.text().then((text) => {
        document.getElementById("visitors").innerText = "Visitors: " + text;
    });
});
