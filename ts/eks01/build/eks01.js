"use strict";
const games = [
    {
        title: "Half-Life 2",
        releaseYear: 2004,
        imageUrl: "img/half-life-2.webp"
    },
    {
        title: "Portal 2",
        releaseYear: 2011,
        imageUrl: "img/portal-2.webp"
    },
    {
        title: "Left 4 Dead 2",
        releaseYear: 2009,
        imageUrl: "img/left-4-dead-2.webp"
    }
];
function renderGames(games) {
    const ul = document.getElementById("games");
    games.forEach((game) => {
        const li = document.createElement("li");
        li.innerHTML = `
            
            <h2>${game.title}</h2>
            <input type="checkbox" class="gameCheckbox" value="${game.title}">
            <p>Released: ${game.releaseYear}</p>
            <img src="${game.imageUrl}" alt="${game.title}" width="100px">
        `;
        ul.appendChild(li);
    });
}
renderGames(games);
const btnSubmit = document.getElementById("btnSubmit");
const inpMessage = document.getElementById("inpMessage");
const inpDefault = document.getElementById("inpDefault");
const inpEmail = document.getElementById("inpEmail");
const form = document.getElementById("form");
const gameCheckboxes = document.getElementsByClassName("gameCheckbox");
function getFormData() {
    // Get the email
    const email = inpEmail.value;
    // Get the message data
    const message = inpMessage.value || inpDefault.checked;
    // Get the selected games
    const selectedGames = [];
    for (let i = 0; i < gameCheckboxes.length; i++) {
        if (gameCheckboxes[i].checked) {
            selectedGames.push(gameCheckboxes[i].value);
        }
    }
    return { email, message, selectedGames };
}
// Process the form data
function processFormData(data) {
    // Validate the form inputs
    if (!data.message) {
        console.log("Please type a message or select the checkbox for a default message.");
        return;
    }
    if (data.selectedGames.length === 0) {
        console.log("Please select at least one game.");
        return;
    }
    if (typeof data.message === "string") {
        console.log("Custom message: " + data.message);
    }
    else if (typeof data.message === "boolean") {
        console.log("Default message selected: " + (data.message ? "Yes" : "No"));
    }
    // Send the selected games to the friend's email
    console.log("Sending the following games to friend's email: " + data.selectedGames.join(", "));
}
// Add event listener to the form
form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const formData = getFormData();
    processFormData(formData);
});
