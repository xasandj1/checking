document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript yuklandi!");

    const selectedLang = document.getElementById("selectedLang");
    const dropdown = document.getElementById("dropdown");
    const options = document.querySelectorAll(".option");
    const arrowIcon = document.getElementById("arrowIcon");

    if (!selectedLang || !dropdown || !arrowIcon) {
        console.error("Element topilmadi!");
        return;
    }

    let currentLang = localStorage.getItem("selectedLang") || "uz";
    console.log("Tanlangan til:", currentLang);
    updateSelectedLanguage(currentLang);

    selectedLang.addEventListener("click", function () {
        console.log("Dropdown bosildi!");
        dropdown.classList.toggle("show");
        arrowIcon.classList.toggle("rotate");
    });

    options.forEach(option => {
        option.addEventListener("click", function () {
            let lang = this.getAttribute("data-lang");
            console.log("Tanlangan til:", lang);
            updateSelectedLanguage(lang);
            localStorage.setItem("selectedLang", lang);
            dropdown.classList.remove("show");
            arrowIcon.classList.remove("rotate");
        });
    });

    function updateSelectedLanguage(lang) {
        const selectedOption = document.querySelector(`.option[data-lang="${lang}"]`);
        if (!selectedOption) {
            console.error(`Bunday til mavjud emas: ${lang}`);
            return;
        }

        const flag = selectedOption.querySelector("img").src;
        const text = selectedOption.querySelector("span").innerText;

        selectedLang.innerHTML = `<img src="${flag}" alt="Flag"> <span>${text}</span> <svg class="arrow" id="arrowIcon" width="20" height="20" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" fill="#3A5AFE"></path></svg>`;

        loadLanguageData(lang);
    }

    function loadLanguageData(lang) {
        console.log(`JSON fayl yuklanmoqda: json/${lang}.json`);
        console.log(lang);
        fetch(`json/${lang}.json`)

            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP xato! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const mastheadTxt = document.querySelector(".masthead__txt");
                const textanim = document.querySelector('#text-anim');
                const titleConcept = document.querySelector('#title__concept');
                // const data = { concept: "Concept-to-Launch UI/UX & Beyond <span>for Startups and Enterprises</span>" };
                // console.log(titleConcept, "titleConcept");
                
                

                if (mastheadTxt && textanim && titleConcept) {
                    mastheadTxt.innerText = data["technology"];
                    textanim.innerHTML = data["consulting"];
                    titleConcept.innerHTML = data["concept"]
                    
                } else {
                    console.error(".masthead__txt elementi topilmadi!");
                    console.error(".textanim elementi topilmadi!");
                    console.error(".titleConcept elementi topilmadi!");
                }
                // if (textanim) {
                //     textanim.innerHTML = data["consulting"];
                // } else {
                //     console.error(".masthead__txt elementi topilmadi!");
                // }
            })
            .catch(error => console.error("JSON yuklanmadi:", error));
    }
});

window.addEventListener("scroll", function () {
    const languageSelector = document.querySelector(".language-selector");

    if (window.scrollY > 50) {
        languageSelector.classList.add("hidden");
    } else {
        languageSelector.classList.remove("hidden");
    }
});