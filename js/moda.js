document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".modal");
    const courseButtonsItem = document.querySelectorAll(".course_buttons-item");
    const closeBtn = document.querySelector(".course_answer-close");
    console.log(modal, "modal", courseButtonsItem, "courseButtonsItem", closeBtn, "closeBtn");


    courseButtonsItem.forEach(button => {
        button.addEventListener("click", () => {
            modal.style.opacity = "1";
            modal.style.visibility = "visible";
        });
    });

    // Modalni yopish
    closeBtn.addEventListener("click", () => {
        modal.style.opacity = "0";
        modal.style.visibility = "hidden";
    });

    // Modal foniga bosganda yopish
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.opacity = "0";
            modal.style.visibility = "hidden";
        }
    });
});