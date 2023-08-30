let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");

window.onscroll = function () {

    if (window.scrollY >= section.offsetTop - 100) {

        progressSpans.forEach((span) => {

            span.style.width = span.dataset.width;

        });
    }

};