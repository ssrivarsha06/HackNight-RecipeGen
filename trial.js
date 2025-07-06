document.addEventListener('DOMContentLoaded', () => {
    // --- Page Navigation ---
    const goToGeneratorButton = document.getElementById('go-to-generator');
    const homePage = document.getElementById('home-page');
    const recipeGeneratorPage = document.getElementById('recipe-generator-page');
    const recipeDetailPage = document.getElementById('recipe-detail-page');
    const backButton = document.getElementById('back-button');
  
    // Function to show a page and hide others
    function showPage(pageToShow) {
      const pages = document.querySelectorAll('.page');
      pages.forEach(page => page.classList.remove('active')); // Hide all pages
      pageToShow.classList.add('active'); // Show the selected page
    }
  
    // Event listener for AI Generator button
    goToGeneratorButton.addEventListener('click', () => {
      showPage(recipeGeneratorPage); // Show generator page
    });
  
    // Event listener for back button
    backButton.addEventListener('click', () => {
      if (recipeGeneratorPage.classList.contains('active')) {
        showPage(homePage); // Return to home from generator
      } else if (recipeDetailPage.classList.contains('active')) {
        showPage(homePage); // Return to home from recipe detail
      }
    });
  
    // --- Recipe Display ---
    const recipeCards = document.querySelectorAll('.recipe-card');
    const recipeImageDetail = document.getElementById('recipe-image-detail');
    const recipeTitleDetail = document.getElementById('recipe-title-detail');
    const recipeIngredientsDetail = document.getElementById('recipe-ingredients-detail');
    const recipeInstructionsDetail = document.getElementById('recipe-instructions-detail');
  
    // Event listener for recipe cards
    recipeCards.forEach(card => {
      card.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the link from actually navigating
  
        const recipeId = card.dataset.id; // Get recipe ID from data attribute
        const recipeCategory = card.dataset.category; // Get recipe category
  
        const recipe = getRecipeById(recipeId, recipeCategory); // Function to find recipe in data
  
        if (recipe) {
          // Populate the recipe detail page
          recipeImageDetail.src = recipe.image;
          recipeTitleDetail.textContent = recipe.name;
          recipeIngredientsDetail.textContent = "Ingredients: " + recipe.ingredients.join(', ');
          recipeInstructionsDetail.textContent = recipe.instructions;
  
          showPage(recipeDetailPage); // Show the recipe detail page
        } else {
          alert("Recipe not found!");
        }
      });
    });
  
    // Function to find a recipe by its ID and category
    function getRecipeById(id, category) {
      // Access the correct category in recipeData
      if (category === 'vegetarian') {
        return recipeData.vegetarian.find(recipe => recipe.id === id);
      } else if (category === 'non-vegetarian') {
        return recipeData["non-vegetarian"].find(recipe => recipe.id === id);
      }
      else{
          return recipeData.quick.find(recipe => recipe.id === id);
      }
    }
    // --- AI Recipe Generator ---
    const ingredientsInput = document.getElementById('ingredients-input');
    const generateRecipeButton = document.getElementById('generate-recipe-button');
    const generatedRecipeContainer = document.getElementById('generated-recipe-container');
    const generatedRecipeText = document.getElementById('generated-recipe-text');
  
    // Event listener for the generate recipe button
    generateRecipeButton.addEventListener('click', () => {
      const ingredients = ingredientsInput.value;
      generateRecipe(ingredients); // Call the AI recipe generation function
    });
  
    // Function to generate a recipe (replace with your actual AI logic)
    function generateRecipe(ingredients) {
      // Placeholder for AI logic
      const recipeText = `AI Generated Recipe using ${ingredients}:\n\n` +
        "1. Combine ingredients.\n2. Cook until done.\n3. Enjoy!";
  
      generatedRecipeText.textContent = recipeText;
      generatedRecipeContainer.style.display = 'block';
    }
  });
  