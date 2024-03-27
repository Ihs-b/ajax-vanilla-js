var recipeButton = document.getElementById("showRecipe")
recipeButton.addEventListener('click', getRandomRecipe)


function getRandomRecipe() {
    // console.log("hani")
    let xhr = new XMLHttpRequest();
    xhr.open('GET', "https://www.themealdb.com/api/json/v1/1/random.php", true);
    xhr.onload = function () {
        // console.log(this.responseText)
        let recipe = JSON.parse(this.responseText);
        // console.log(recipe.meals)
        let meals = recipe.meals[0]
        // console.log(meals)
        let mealName = meals["strMeal"]
        let mealCategory = meals["strCategory"]
        let mealIngredient1 = meals["strIngredient1"];
        let mealIngredient2 = meals["strIngredient2"];
        let mealIngredient3 = meals["strIngredient3"];
        let mealIngredient4 = meals["strIngredient4"];
        let mealIngredient5 = meals["strIngredient5"];
        let mealInstructions = meals["strInstructions"];
        let mealImage = meals["strMealThumb"];
        document.getElementById("recipes").innerHTML = "Today's meal is " + mealName + " it is a " + mealCategory + " recipe. Here are the ingredients: " +
            "<ul>"+
            "<li>" +  mealIngredient1 +
            "<li>" +  mealIngredient2 +
            "<li>" +  mealIngredient3 +
            "<li>" +  mealIngredient4 +
            "<li>" +  mealIngredient5 +
            " </ul>" +
            "To make this recipe: "+ "<br>" + mealInstructions

    }
    xhr.send()
}
