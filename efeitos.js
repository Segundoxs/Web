document.addEventListener("DOMContentLoaded", () => {
 
    /* ---------- 1. Injeta o grão de fundo ---------- */
    const grain = document.createElement("div");
    grain.id = "fx-grain";
    document.body.appendChild(grain);
 
    /* ---------- 2. Injeta o cursor customizado ---------- */
    const glow = document.createElement("div");
    glow.id = "fx-cursor-glow";
    const dot = document.createElement("div");
    dot.id = "fx-cursor-dot";
    document.body.appendChild(glow);
    document.body.appendChild(dot);
 
    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;
 
    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = mouseX + "px";
        dot.style.top = mouseY + "px";
        glow.classList.add("fx-active");
        dot.classList.add("fx-active");
    });
 
    window.addEventListener("mouseleave", () => {
        glow.classList.remove("fx-active");
        dot.classList.remove("fx-active");
    });
 
    // Anima o glow com "atraso" (efeito suave de perseguição)
    function animateGlow(){
        glowX += (mouseX - glowX) * 0.08;
        glowY += (mouseY - glowY) * 0.08;
        glow.style.left = glowX + "px";
        glow.style.top = glowY + "px";
        requestAnimationFrame(animateGlow);
    }
    animateGlow();
 
    // Cursor cresce ao passar sobre links/botões
    const hoverables = document.querySelectorAll("a, button, input[type='submit']");
    hoverables.forEach(el => {
        el.addEventListener("mouseenter", () => dot.classList.add("fx-hover"));
        el.addEventListener("mouseleave", () => dot.classList.remove("fx-hover"));
    });
 
    /* ---------- 3. Reveal ao rolar a página ---------- */
    // Pega automaticamente todas as <section> do site (home, sobre, destaques, notícias, contato)
    const sections = document.querySelectorAll("main section, footer");
    sections.forEach(sec => sec.classList.add("fx-reveal"));
 
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                entry.target.classList.add("fx-visible");
            }
        });
    }, { threshold: 0.15 });
 
    sections.forEach(sec => observer.observe(sec));
 
    /* ---------- 4. Efeito magnético nos botões/links do nav ---------- */
    const magnetics = document.querySelectorAll("nav a, button, input[type='submit']");
    magnetics.forEach(el => {
        el.addEventListener("mousemove", (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
        });
        el.addEventListener("mouseleave", () => {
            el.style.transform = "translate(0,0)";
        });
    });
 
    /* ---------- 5. Parallax leve nas imagens ---------- */
    const images = document.querySelectorAll("main img");
    images.forEach(img => img.classList.add("fx-parallax"));
 
    window.addEventListener("scroll", () => {
        const scrolled = window.scrollY;
        images.forEach(img => {
            const speed = 0.05;
            img.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
 
});