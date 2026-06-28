console.log("3pm was here :3");
fetch("/api/v1/addvisitor");

fetch("/api/v1/visitorcount").then((response) => {
    response.text().then((text) => {
        document.getElementById("visitorcount").innerText = "Visitors: " + text;
    });
});

const lilguybtn = document.getElementById('lilguybtn');
const threepmaudio = document.getElementById('3pmaudio');
const clickaudio = document.getElementById('clickaudio');
const clickstext = document.getElementById('clickstext');

var counter = 0;
lilguybtn.onclick = () => {
    counter += 1;
    const clickAudioInstance = new Audio(clickaudio.src);
    threepmaudio.play();
    clickAudioInstance.play();
    clickstext.innerText = "Clicks: "+counter
    clickstext.style.display = "block";
    clickstext.style.opacity = 1.0;
}