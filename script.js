const containerOfDivs = document.querySelector("#gridContainer");

containerOfDivs.style.width = "960px";
containerOfDivs.style.height = "960px";

for (let i = 0; i < 16; i++)
{
    for (let j = 0; j < 16; j++)
    {
        const newDiv = document.createElement("div");
        newDiv.classList.toggle("gridDivs");
        containerOfDivs.appendChild(newDiv);
    }
}

const allDivs = document.querySelectorAll(".gridDivs");

allDivs.forEach(divItem => {
    divItem.addEventListener("mouseenter", () => {
        divItem.style.backgroundColor = "black";
    });
});
