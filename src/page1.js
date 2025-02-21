const box = document.getElementById("box");
export async function getData() {
    setInterval(() => {
        box.innerHTML = "Loading... the BOX";
    }, 3000);
}

