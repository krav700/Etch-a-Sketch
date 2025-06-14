let containerOfDivs = document.querySelector("#gridContainer");

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
let opacityLevel = 0.1;

allDivs.forEach(divItem => {
    divItem.addEventListener("mouseenter", function colorBlocks() {
        const randomRed = Math.floor(Math.random() * 256);
        const randomGreen = Math.floor(Math.random() * 256);
        const randomBlue = Math.floor(Math.random() * 256);
        divItem.style.backgroundColor = `rgb(${randomRed},${randomBlue},${randomGreen},${opacityLevel})`;
        if (opacityLevel < 1)
        {
            opacityLevel += 0.1;
        }
        divItem.removeEventListener("mouseenter", colorBlocks);
    });
});

const button = document.querySelector("#gridButton");

button.addEventListener("click", () => {
    let gridLength = prompt("Please enter the grid lenght (1-100)");
    let opacityLevel = 0.1;
    if (gridLength > 0 && gridLength < 101)
    {
        containerOfDivs.remove();
        containerOfDivs = document.createElement("div");
        containerOfDivs.style.width = "960px";
        containerOfDivs.style.height = "960px";
        containerOfDivs.setAttribute("id","gridContainer")
        document.body.appendChild(containerOfDivs);

        for (let i = 0; i < gridLength; i++)
            {
                for (let j = 0; j < gridLength; j++)
                {
                    const newDiv = document.createElement("div");
                    newDiv.classList.toggle("gridDivs");
                    newDiv.style.width = `${960 / gridLength}px`;
                    newDiv.style.height = `${960 / gridLength}px`;
                    containerOfDivs.appendChild(newDiv);
                }
            }
            
            const allDivs = document.querySelectorAll(".gridDivs");
            
            allDivs.forEach(divItem => {
                divItem.addEventListener("mouseenter", function colorBlocks() {
                    const randomRed = Math.floor(Math.random() * 256);
                    const randomGreen = Math.floor(Math.random() * 256);
                    const randomBlue = Math.floor(Math.random() * 256);
                    divItem.style.backgroundColor = `rgb(${randomRed},${randomBlue},${randomGreen},${opacityLevel})`;
                    if (opacityLevel < 1)
                    {
                        opacityLevel += 0.1;
                    }
                    divItem.removeEventListener("mouseenter", colorBlocks);
                });
            });

    }
});