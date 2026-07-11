const recipes = [
{
    title: "Greek Moussaka",
    description: "Traditional layered eggplant casserole with lamb",
    image: "./img/photo-1568901346375-23c9450c58cd.avif",
    prepTime: "20 min",
    cookTime: "60 min",
    servings: "4 people",
    rating: "4.8",
    reviews: "124",
    badges: ["Intermediate", "Mediterranean"],
    extendedTime: false,
    ingredients: [
        "3 large eggplants, sliced",
        "500g ground lamb",
        "400g canned tomatoes",
        "1 onion, diced",
        "3 cloves garlic, minced",
        "500ml béchamel sauce"
    ],
    instructions: [
        "Preheat oven to 180°C (350°F).",
        "Slice eggplants and sprinkle with salt. Let them sit for 30 minutes, then rinse and pat dry.",
        "In a skillet, sauté onions and garlic until translucent. Add ground lamb and cook until browned.",
        "Add canned tomatoes, season with salt and pepper, and simmer for 15 minutes.",
        "In a baking dish, layer eggplant slices, meat sauce, and béchamel sauce. Repeat layers.",
        "Bake for 45-60 minutes until the top is golden brown. Let it cool slightly before serving."
    ],
    nutritionalInfo: {
        "Calories": "450 kcal",
        "Protein": "25g",
        "Carbohydrates": "30g",
        "Fat": "25g",
        "Fiber": "5g",
        "Sodium": "500mg",
    },
    tips: [
        "Sweating the eggplants with salt removes excess moisture and prevents the moussaka from becoming soggy.",
        "You can make the meat sauce a day ahead to let the flavors deepen."
    ]
},
{
    title: "Greek Moussaka",
    description: "Traditional layered eggplant casserole with lamb",
    image: "./img/photo-1574894709920-11b28e7367e3.avif",
    prepTime: "20 min",
    cookTime: "60 min",
    servings: "4 people",
    rating: "4.8",
    reviews: "124",
    badges: ["Intermediate", "Mediterranean"],
    extendedTime: false,
    ingredients: [
        "3 large eggplants, sliced",
        "500g ground lamb",
        "400g canned tomatoes",
        "1 onion, diced",
        "3 cloves garlic, minced",
        "500ml béchamel sauce"
    ],
    instructions: [
        "Preheat oven to 180°C (350°F).",
        "Slice eggplants and sprinkle with salt. Let them sit for 30 minutes, then rinse and pat dry.",
        "In a skillet, sauté onions and garlic until translucent. Add ground lamb and cook until browned.",
        "Add canned tomatoes, season with salt and pepper, and simmer for 15 minutes.",
        "In a baking dish, layer eggplant slices, meat sauce, and béchamel sauce. Repeat layers.",
        "Bake for 45-60 minutes until the top is golden brown. Let it cool slightly before serving."
    ],
    nutritionalInfo: {
        "Calories": "450 kcal",
        "Protein": "25g",
        "Carbohydrates": "30g",
        "Fat": "25g",
        "Fiber": "5g",
        "Sodium": "500mg",
    },
    tips: [
        "Sweating the eggplants with salt removes excess moisture and prevents the moussaka from becoming soggy.",
        "You can make the meat sauce a day ahead to let the flavors deepen."
    ]
},
{
    title: "Greek Moussaka",
    description: "Traditional layered eggplant casserole with lamb",
    image: "./img/photo-1585032226651-759b368d7246.avif",
    prepTime: "20 min",
    cookTime: "60 min",
    servings: "4 people",
    rating: "4.8",
    reviews: "124",
    badges: ["Intermediate", "Mediterranean"],
    extendedTime: true,
    ingredients: [
        "3 large eggplants, sliced",
        "500g ground lamb",
        "400g canned tomatoes",
        "1 onion, diced",
        "3 cloves garlic, minced",
        "500ml béchamel sauce"
    ],
    instructions: [
        "Preheat oven to 180°C (350°F).",
        "Slice eggplants and sprinkle with salt. Let them sit for 30 minutes, then rinse and pat dry.",
        "In a skillet, sauté onions and garlic until translucent. Add ground lamb and cook until browned.",
        "Add canned tomatoes, season with salt and pepper, and simmer for 15 minutes.",
        "In a baking dish, layer eggplant slices, meat sauce, and béchamel sauce. Repeat layers.",
        "Bake for 45-60 minutes until the top is golden brown. Let it cool slightly before serving."
    ],
    nutritionalInfo: {
        "Calories": "450 kcal",
        "Protein": "25g",
        "Carbohydrates": "30g",
        "Fat": "25g",
        "Fiber": "5g",
        "Sodium": "500mg",
    },
    tips: [
        "Sweating the eggplants with salt removes excess moisture and prevents the moussaka from becoming soggy.",
        "You can make the meat sauce a day ahead to let the flavors deepen."
    ]
},
{
    title: "Greek Moussaka",
    description: "Traditional layered eggplant casserole with lamb",
    image: "./img/photo-1601050690597-df0568f70950.avif",
    prepTime: "20 min",
    cookTime: "60 min",
    servings: "4 people",
    rating: "4.8",
    reviews: "124",
    badges: ["Intermediate", "Mediterranean"],
    extendedTime: true,
    ingredients: [
        "3 large eggplants, sliced",
        "500g ground lamb",
        "400g canned tomatoes",
        "1 onion, diced",
        "3 cloves garlic, minced",
        "500ml béchamel sauce"
    ],
    instructions: [
        "Preheat oven to 180°C (350°F).",
        "Slice eggplants and sprinkle with salt. Let them sit for 30 minutes, then rinse and pat dry.",
        "In a skillet, sauté onions and garlic until translucent. Add ground lamb and cook until browned.",
        "Add canned tomatoes, season with salt and pepper, and simmer for 15 minutes.",
        "In a baking dish, layer eggplant slices, meat sauce, and béchamel sauce. Repeat layers.",
        "Bake for 45-60 minutes until the top is golden brown. Let it cool slightly before serving."
    ],
    nutritionalInfo: {
        "Calories": "450 kcal",
        "Protein": "25g",
        "Carbohydrates": "30g",
        "Fat": "25g",
        "Fiber": "5g",
        "Sodium": "500mg",
    },
    tips: [
        "Sweating the eggplants with salt removes excess moisture and prevents the moussaka from becoming soggy.",
        "You can make the meat sauce a day ahead to let the flavors deepen."
    ]
}
];

let idx = 0;

function displayRecipe(index) {
    const recipe = recipes[index];
    const fl = document.getElementById('extended-time-alert');
    if ( !recipes[idx].extendedTime) fl.classList.add('d-none');
    else fl.classList.remove('d-none');
    document.getElementById('recipe-img-container').style.background = `url('${recipe.image}') center/cover no-repeat`;
    const ratingEl = document.getElementById('recipe-rating');
    if (ratingEl) ratingEl.innerText = recipe.rating || "4.8";
    
    document.getElementById('prep-time').innerText = recipe.prepTime;
    document.getElementById('cook-time').innerText = recipe.cookTime;
    document.getElementById('servings').innerText = recipe.servings;
    document.getElementById('recipe-title').innerText = recipe.title;
    document.getElementById('recipe-desc').innerText = recipe.description;
    
    const ingredientsList = document.getElementById('ingredients-list');
    if (ingredientsList) {
        ingredientsList.innerHTML = recipe.ingredients.map((item, i) => `
            <li class="d-flex align-items-center">
                <span class="badge rounded-circle bg-orange text-white me-3 d-flex align-items-center justify-content-center" style="width: 24px; height: 24px; min-width: 24px;">${i + 1}</span>
                <span class="fw-medium">${item}</span>
            </li>
        `).join('');
    }
    
    const instructionsList = document.getElementById('instructions-list');
    if (instructionsList) {
        instructionsList.innerHTML = recipe.instructions.map((step, i) => `
            <li class="d-flex align-items-start">
                <span class="badge rounded-circle bg-orange text-white me-3 d-flex align-items-center justify-content-center mt-1" style="width: 24px; height: 24px; min-width: 24px;">${i + 1}</span>
                <span class="fw-medium">${step}</span>
            </li>
        `).join('');
    }
    
    const tipsList = document.getElementById('tips-list');
    if (tipsList) {
        if (recipe.tips && recipe.tips.length > 0) {
            tipsList.innerHTML = recipe.tips.map(tip => `
                <li class="text-muted"><i class="bi bi-dot me-1 text-secondary"></i>${tip}</li>
            `).join('');
        } else {
            tipsList.innerHTML = `<li class="text-muted italic">No specific alterations or tips listed for this recipe.</li>`;
        }
    }
    
    const nutritionInfo = recipe.nutritionalInfo || {};
    const nutritionGrid = document.getElementById('nutrition-grid');
    for ( let i = 0 ; i < nutritionGrid.children.length; i++ ) {
        const key = nutritionGrid.children[i].querySelector('h6').innerText;
        const value = nutritionInfo[key] || "N/A";
        nutritionGrid.children[i].querySelector('h5').innerText = `${value}`;
    }
}

function swapRecipe() {
    idx = (idx + 1) % recipes.length;
    displayRecipe(idx);
}

document.addEventListener('DOMContentLoaded', () => {
    displayRecipe(idx);
});