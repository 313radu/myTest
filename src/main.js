const list = document.getElementById("list");
const url = "./data.json";

async function getRecipe() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        // Get the 'id' parameter from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        // Clear the list before adding new elements
        list.innerHTML = "";

        if (id && data[id]) {
            // If an ID is provided and exists in the data, display only that recipe
            displayRecipe(data[id]);
        } else {
            // If no ID is provided or it doesn't exist, display all recipes
            data.forEach(recipe => displayRecipe(recipe));
        }
    } catch (error) {
        console.error("Eroare la încărcarea rețetelor:", error);
        list.innerHTML = "<li>Eroare la încărcarea rețetelor. Vă rugăm încercați mai târziu.</li>";
    }
}

function displayRecipe(recipe) {
    const listItem = document.createElement("li");
    listItem.className = "element";
    listItem.innerHTML = `
        <h2 class="title"><strong>${recipe.title}</strong></h2>
        <img src="${recipe.picture}" alt="${recipe.title}" class="image">
        <h3>Ingrediente:</h3>
        <ul class="ingredient">${recipe.ingrediente.map(ing => `<li>${ing}</li>`).join('')}</ul>
        <h3>${recipe.prep}</h3>
        <ol class="text">${recipe.preparare.map(step => `<li>${step}</li>`).join('')}</ol>
    `;
    list.appendChild(listItem);
}

getRecipe(); // Call the function to test
