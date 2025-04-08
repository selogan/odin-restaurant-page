const generateLorem = () => {
     return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iste eos consequatur officiis totam, id soluta beatae cupiditate numquam blanditiis officia voluptas consectetur excepturi itaque. Dolorum fuga neque in dicta."
}

const createAbout = () => {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    const about = document.createElement("div");
    about.setAttribute("id", "about");
    about.textContent = generateLorem();
    content.appendChild(about);
}

export { createAbout };

