document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const loadingSpinner = document.getElementById('loading-spinner');
    const backButton = document.getElementById('back-button');
    const homePage = document.getElementById('home-page');
    const categoryPage = document.getElementById('category-page');
    const recipeDetailPage = document.getElementById('recipe-detail-page');
    const categoryHeaders = document.querySelectorAll('.category-header');
    const recipeCards = document.querySelectorAll('.recipe-card');
    const homeButton = document.querySelector('.home-button');
    const favoriteButton = document.querySelector('.favorite-button');
    
    // App state
    let currentPage = 'home';
    let currentCategory = null;
    let currentRecipe = null;
    let isFavorite = false;
  
    // Initialize the app
    init();
    
    function init() {
      // Show loading spinner
      showLoading();
      
      // Setup event listeners
      setupEventListeners();
      
      // Hide loading spinner after a delay to simulate loading
      setTimeout(() => {
        hideLoading();
      }, 800);
    }
    
    function setupEventListeners() {
      // Back button
      backButton.addEventListener('click', handleBackButton);
      
      // Category headers
      categoryHeaders.forEach(header => {
        header.addEventListener('click', function() {
          const categoryId = this.closest('.recipe-category').querySelector('.recipe-card').dataset.category;
          navigateToCategory(categoryId);
        });
      });
      
      // Recipe cards
      recipeCards.forEach(card => {
        card.addEventListener('click', function(e) {
          e.preventDefault();
          const recipeId = this.dataset.id;
          navigateToRecipe(recipeId);
        });
      });
      
      // Home button
      homeButton.addEventListener('click', function(e) {
        e.preventDefault();
        navigateToHome();
      });
      
      // Favorite button
      if (favoriteButton) {
        favoriteButton.addEventListener('click', toggleFavorite);
      }
    }
    
    function handleBackButton() {
      if (currentPage === 'category') {
        navigateToHome();
      } else if (currentPage === 'recipe') {
        if (currentCategory) {
          navigateToCategory(currentCategory);
        } else {
          navigateToHome();
        }
      }
    }
    
    function navigateToHome() {
      showLoading();
      
      // Reset state
      currentPage = 'home';
      currentCategory = null;
      
      // Update UI
      homePage.classList.add('active');
      categoryPage.classList.remove('active');
      recipeDetailPage.classList.remove('active');
      
      setTimeout(() => {
        hideLoading();
      }, 500);
    }
    
    function navigateToCategory(categoryId) {
      showLoading();
      
      // Update state
      currentPage = 'category';
      currentCategory = categoryId;
      
      // Update UI
      homePage.classList.remove('active');
      categoryPage.classList.add('active');
      recipeDetailPage.classList.remove('active');
      
      // Update category page content
      updateCategoryPage(categoryId);
      
      setTimeout(() => {
        hideLoading();
      }, 500);
    }
    
    function navigateToRecipe(recipeId) {
      showLoading();
      
      // Update state
      currentPage = 'recipe';
      currentRecipe = recipeId;
      
      // Update UI
      homePage.classList.remove('active');
      categoryPage.classList.remove('active');
      recipeDetailPage.classList.add('active');
      
      // Update recipe detail page content
      updateRecipeDetailPage(recipeId);
      
      setTimeout(() => {
        hideLoading();
      }, 500);
    }
    
    function updateCategoryPage(categoryId) {
      let recipes = [];
      let categoryName = '';
      let recipeCount = 0;
      
      // Get recipes for this category
      if (categoryId === 'vegetarian') {
        recipes = recipeData.vegetarian;
        categoryName = 'Vegetarian';
        recipeCount = 50;
      } else if (categoryId === 'non-vegetarian') {
        recipes = recipeData.nonVegetarian;
        categoryName = 'Non Vegetarian';
        recipeCount = 50;
      } else if (categoryId === 'quick') {
        recipes = recipeData.quickRecipes;
        categoryName = 'Quick Recipes';
        recipeCount = 20;
      }
      
      // Update featured banner
      const featuredBanner = categoryPage.querySelector('.featured-banner');
      featuredBanner.querySelector('.banner-title').textContent = `${recipeCount} ${categoryName} recipes`;
      
      // Update category title
      const categoryTitle = categoryPage.querySelector('.category-title');
      categoryTitle.textContent = categoryName;
      
      // Update recipe grid
      const recipeGrid = categoryPage.querySelector('.recipe-grid-category');
      recipeGrid.innerHTML = '';
      
      recipes.forEach((recipe, index) => {
        const recipeCard = document.createElement('a');
        recipeCard.href = '#';
        recipeCard.className = 'recipe-card animate-zoom-in';
        recipeCard.dataset.id = recipe.id;
        recipeCard.dataset.category = recipe.category;
        recipeCard.style.animationDelay = `${index * 0.05}s`;
        
        recipeCard.innerHTML = `
          <div class="recipe-image-container">
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
          </div>
        `;
        
        recipeCard.addEventListener('click', function(e) {
          e.preventDefault();
          navigateToRecipe(recipe.id);
        });
        
        recipeGrid.appendChild(recipeCard);
      });
    }
    
    function updateRecipeDetailPage(recipeId) {
      // In a real app, you would fetch the recipe details from an API
      // For now, we'll just use the mock data for Chicken Biryani
      const recipe = recipeData.recipeDetails["nv2"]; // Using Chicken Biryani as default
      
      // Set favorite state
      isFavorite = false;
      updateFavoriteButton();
      
      // In a real app, you'd update all content based on the actual recipe data
      // For this demo, we'll keep the pre-rendered content
    }
    
    function toggleFavorite() {
      isFavorite = !isFavorite;
      updateFavoriteButton();
    }
    
    function updateFavoriteButton() {
      if (isFavorite) {
        favoriteButton.innerHTML = `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#E53E3E" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        `;
      } else {
        favoriteButton.innerHTML = `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        `;
      }
    }
    
    function showLoading() {
      loadingSpinner.style.display = 'flex';
    }
    
    function hideLoading() {
      loadingSpinner.style.display = 'none';
    }
  });
  