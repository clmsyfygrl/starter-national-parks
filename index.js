const descriptions = document.querySelectorAll(".description-display");
for (let desc of descriptions.values()) {
    let content = desc.innerText;
    
    if (content.length > 250) {
        content = content.slice(0, 250);
        content = content + " " + '<a href="#">...</a>';
    };
    desc.innerHTML = content;
};

const ratings = document.querySelectorAll(".rating-display .value");
for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
    if (ratingValue > 4.7) {
        // rating.style.fontWeight = "bold";
        // rating.style.color = "#3ba17c";
        rating.classList.add("high-rating");
        rating.classList.remove("value");
    };
};

const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length;
const newElement = document.createElement("div");
newElement.innerText = `${numberParks} exciting parks to visit!`;
newElement.classList.add("header-statement");

const header = document.querySelector("header");
header.appendChild(newElement);

const firstBtn = document.querySelector("button");
firstBtn.addEventListener("click", (event) => {
    console.log("You clicked the button", event);
});

const allBtns = document.querySelectorAll(".rate-button");
allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const park = event.target.parentNode;
        park.style.backgroundColor = "#c8e6c9";
        console.log(event.target.parentNode);
    });
});

// Select the 'nameSorter' link
const nameSorter = document.querySelector("#name-sorter");
// Add an event listener
nameSorter.addEventListener("click", (event) => {
    event.preventDefault();
    // 1. Get the main element
    const main = document.querySelector("main");
    // 2. Get the list of parks
    const parksList = main.querySelectorAll(".park-display");
    // 3. Empty the main element
    main.innerHTML = "";
    console.log("You clicked the name sorter");

    // 4. Create an array
    const parksArray = Array.from(parksList);

    // 5. Sort the array
    parksArray.sort((parkA, parkB) => {
        const parkAName = parkA.querySelector("h2").innerText;
        const parkBName = parkB.querySelector("h2").innerText;
        if (parkAName < parkBName) {
        return -1;
        } else if (parkAName > parkBName) {
        return 1;
        } else {
        return 0;
    }
    });

    // 6. Insert each park into the DOM
    parksArray.forEach((park) => {
        main.appendChild(park);
    });
});