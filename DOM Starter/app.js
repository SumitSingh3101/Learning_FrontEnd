let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
});

function getRandomColor(){
    let red = Math.floor{Math.random() + };
    let green = Math.floor{Math.random() + };
    let blue = Math.floor{Math.random() + };

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}