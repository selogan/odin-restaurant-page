const createHome = () => {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    const homeContent = document.createElement("div");
    homeContent.setAttribute("id", "home");
    const restaurantName = document.createElement("div");
    restaurantName.setAttribute("class", "restaurant-name");
    restaurantName.textContent = "Odin BBQ";
    content.appendChild(restaurantName);
}

export { createHome };