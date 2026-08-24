document.addEventListener("DOMContentLoaded", () => {
 
    const cards = document.querySelectorAll(".game-card");
 
    cards.forEach(card => {
 
        // Garante que existe a camada de brilho, mesmo se
        // o usuário esquecer de colocar a div no HTML.
        if (!card.querySelector(".game-card-shine")) {
            const shine = document.createElement("div");
            shine.className = "game-card-shine";
            card.appendChild(shine);
        }
 
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
 
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
 
            const rotateY = ((x - centerX) / centerX) * 10;   // até 10 graus
            const rotateX = ((centerY - y) / centerY) * 10;
 
            card.style.transform =
                `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
 
            // move a posição do brilho conforme o mouse
            card.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
            card.style.setProperty("--my", `${(y / rect.height) * 100}%`);
        });
 
        card.addEventListener("mouseleave", () => {
            card.style.transform =
                "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)";
        });
    });
 
});