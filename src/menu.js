const createMenu = () => {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    const menuContent = document.createElement("div");
    menuContent.setAttribute("id", "menu");

    menuItems.forEach((menuItem) => {
        for (let category in menuItem) {
            const cat = document.createElement("div");
            const catName = document.createElement("h1");
            catName.innerText = category.toUpperCase();
            cat.setAttribute("class", "category");
            cat.appendChild(catName);
            menuContent.appendChild(cat);
            menuItem[category].forEach((foodItem) => {
                const item = document.createElement("ul");
                const name = document.createElement("li");
                const price = document.createElement("li");
                name.textContent = foodItem.name;
                price.textContent = foodItem.price;
                item.appendChild(name);
                item.appendChild(price);
                cat.appendChild(item);
            })
        }
    })
    content.appendChild(menuContent);
}

const sandwiches = [
    {
        name: "Chopped Brisket",
        price: "8.99"
    },
    {
        name: "Pulled Pork",
        price: "9.99"
    },
    {
        name: "Sausage",
        price: "9.49"
    },
    {
        name: "Sliced Brisket",
        price: "11.49"
    },
]

const combos = [
    {
        name: "Sandwich Combo",
        price: "13.99"
    },
    {
        name: "Brisket Plate",
        price: "18.99"
    },
    {
        name: "Pork Rib Plate",
        price: "18.99"
    },
    {
        name: "Sausage Plate",
        price: "17.99"
    },
]

const menuItems = [{sandwiches: sandwiches}, {combos: combos}];

export { createMenu };