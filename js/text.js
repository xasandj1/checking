document.addEventListener("DOMContentLoaded", () => {
    const words = ["CISCO CCNA", "Java", "Google", "Huawei HCIA", "QA-инженер", "Администратор", "Windows Server"];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    const span = document.querySelector("#text__changer");

    if (!span) {
        console.error("Element #text__changer topilmadi!");
        return;
    }

    function typeEffect() {
        let currentWord = words[index];
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        span.textContent = currentWord.substring(0, charIndex);

        if (!isDeleting && charIndex === currentWord.length) {
            setTimeout(() => isDeleting = true, 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % words.length;
        }

        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }

    typeEffect();
});