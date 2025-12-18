const form = document.getElementById("programareForm");
const lista = document.getElementById("listaProgramari");

let programari = JSON.parse(localStorage.getItem("programari")) || [];

function afiseazaProgramari() {
    lista.innerHTML = "";
    programari.forEach((p) => {
        const li = document.createElement("li");
        li.textContent = `${p.nume} | ${p.tip} | ${p.serviciu} | ${p.data} ${p.ora}`;
        lista.appendChild(li);
    });
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const programare = {
        nume: document.getElementById("nume").value,
        tip: document.getElementById("tipClient").value,
        serviciu: document.getElementById("serviciu").value,
        data: document.getElementById("data").value,
        ora: document.getElementById("ora").value
    };

    programari.push(programare);
    localStorage.setItem("programari", JSON.stringify(programari));

    form.reset();
    afiseazaProgramari();
});

afiseazaProgramari();
