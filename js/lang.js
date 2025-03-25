document.querySelector(".lang-btn").addEventListener("click", function() {
    document.querySelector(".lang-menu").classList.toggle("active");
});

window.onclick = function(event) {
    if (!event.target.closest('.lang-selector')) {
        document.querySelector(".lang-menu").classList.remove("active");
    }
};