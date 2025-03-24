const words = ["CISCO CCNA", "Google", "QA-инженер", "Java разработчик","Huawei HCIA","Windows Server"];
let index = 0;
let charIndex = 0;
const span = document.querySelector("#text-anim span:first-child");
let isDeleting = false;

function typeEffect() {
    let currentWord = words[index];
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    span.textContent = currentWord.substring(0, charIndex);

    if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => isDeleting = true, 1000); // To‘liq yozilganda 1 sek kutadi
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % words.length; // Keyingi so‘zga o‘tadi
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100); // Tezlikni moslaydi
}

typeEffect();