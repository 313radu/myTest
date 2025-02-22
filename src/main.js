const list = document.getElementById("list");
const url = "../src/data.json";

async function getRecepie() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        // Curățăm lista înainte de a adăuga noi elemente
        list.innerHTML = "";

        // Parcurgem fiecare rețetă și o adăugăm în listă
        data.forEach(recipe => {
            const listItem = document.createElement("li");
            listItem.className = "element";
            listItem.innerHTML = `
            <strong>${recipe.title}</strong> <br>
             ${recipe.ingrediente.join('')} <br> 
             <strong>${recipe.prep}</strong> <br> 
             ${recipe.preparare.join('')}`;
            list.appendChild(listItem);
        });
    } catch (error) {
        console.error("Eroare la încărcarea rețetelor:", error);
    }
}

getRecepie(); // Apelează funcția pentru a testa
