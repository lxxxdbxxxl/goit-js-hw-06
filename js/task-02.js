const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");

const makeIngredients = (ingredient) => {
  return ingredient.map((ingredient) => {
    const itemRef = document.createElement("li");
    itemRef.classList.add("item");
    itemRef.textContent = ingredient;
    return itemRef;
  });
};

const elements = makeIngredients(ingredients);
ingredientsRef.append(...elements);
