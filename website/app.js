// Welcome message
console.log("welcome to my portfolio website!");

// Button functionality
const projectButton = document.querySelector("#home button");

projectButton.addEventListener("click", function () {
    document.querySelector("#projects").scrollIntoView({
        behavior: "smooth"
    });
});