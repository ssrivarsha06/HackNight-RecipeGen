const recipeData = {
    vegetarian: [
      {
        id: "v1",
        name: "Masala Dosa",
        image: "./lovable-uploads/fb2368df-0b57-4c59-8de1-f033ec9dace7.png",
        category: "vegetarian"
      },
      {
        id: "v2",
        name: "Vada",
        image: "./lovable-uploads/fc7a0ace-79fe-4b84-a967-59c94922f70f.png",
        category: "vegetarian"
      },
      {
        id: "v3",
        name: "Puri",
        image: "./lovable-uploads/ce801831-6775-4cd9-acbd-547365000616.png",
        category: "vegetarian"
      },
      {
        id: "v4",
        name: "Naan",
        image: "./lovable-uploads/b75dcfc4-eeeb-440c-8f7b-9028c54c7113.png",
        category: "vegetarian"
      },
      {
        id: "v5",
        name: "Paratha",
        image: "./lovable-uploads/fb2368df-0b57-4c59-8de1-f033ec9dace7.png",
        category: "vegetarian"
      },
      {
        id: "v6",
        name: "Veg Sandwich",
        image: "./lovable-uploads/fc7a0ace-79fe-4b84-a967-59c94922f70f.png",
        category: "vegetarian"
      },
      {
        id: "v7",
        name: "Raita",
        image: "./lovable-uploads/ce801831-6775-4cd9-acbd-547365000616.png",
        category: "vegetarian"
      },
      {
        id: "v8",
        name: "Pakora",
        image: "./lovable-uploads/b75dcfc4-eeeb-440c-8f7b-9028c54c7113.png",
        category: "vegetarian"
      },
      {
        id: "v9",
        name: "Kachori",
        image: "./lovable-uploads/fb2368df-0b57-4c59-8de1-f033ec9dace7.png",
        category: "vegetarian"
      },
      {
        id: "v10",
        name: "Veg Hot Dog",
        image: "./lovable-uploads/fc7a0ace-79fe-4b84-a967-59c94922f70f.png",
        category: "vegetarian"
      },
      {
        id: "v11",
        name: "Veg Pizza",
        image: "./lovable-uploads/ce801831-6775-4cd9-acbd-547365000616.png",
        category: "vegetarian"
      },
      {
        id: "v12",
        name: "Paneer Tikka",
        image: "./lovable-uploads/b75dcfc4-eeeb-440c-8f7b-9028c54c7113.png",
        category: "vegetarian"
      }
    ],
    nonVegetarian: [
      {
        id: "nv1",
        name: "Tandoori Chicken",
        image: "./lovable-uploads/fb2368df-0b57-4c59-8de1-f033ec9dace7.png",
        category: "non-vegetarian"
      },
      {
        id: "nv2",
        name: "Chicken Biryani",
        image: "./lovable-uploads/fc7a0ace-79fe-4b84-a967-59c94922f70f.png",
        category: "non-vegetarian"
      },
      {
        id: "nv3",
        name: "Butter Chicken",
        image: "./lovable-uploads/ce801831-6775-4cd9-acbd-547365000616.png",
        category: "non-vegetarian"
      },
      {
        id: "nv4",
        name: "Chicken Karahi",
        image: "./lovable-uploads/b75dcfc4-eeeb-440c-8f7b-9028c54c7113.png",
        category: "non-vegetarian"
      },
      {
        id: "nv5",
        name: "Chicken Noodles",
        image: "./lovable-uploads/fb2368df-0b57-4c59-8de1-f033ec9dace7.png",
        category: "non-vegetarian"
      },
      {
        id: "nv6",
        name: "Mutton Curry",
        image: "./lovable-uploads/fc7a0ace-79fe-4b84-a967-59c94922f70f.png",
        category: "non-vegetarian"
      },
      {
        id: "nv7",
        name: "Fish Curry",
        image: "./lovable-uploads/ce801831-6775-4cd9-acbd-547365000616.png",
        category: "non-vegetarian"
      },
      {
        id: "nv8",
        name: "Chicken Fried Rice",
        image: "./lovable-uploads/b75dcfc4-eeeb-440c-8f7b-9028c54c7113.png",
        category: "non-vegetarian"
      },
      {
        id: "nv9",
        name: "Chicken 65",
        image: "./lovable-uploads/fb2368df-0b57-4c59-8de1-f033ec9dace7.png",
        category: "non-vegetarian"
      },
      {
        id: "nv10",
        name: "Chicken Tikka",
        image: "./lovable-uploads/fc7a0ace-79fe-4b84-a967-59c94922f70f.png",
        category: "non-vegetarian"
      },
      {
        id: "nv11",
        name: "Beef Steak",
        image: "./lovable-uploads/ce801831-6775-4cd9-acbd-547365000616.png",
        category: "non-vegetarian"
      },
      {
        id: "nv12",
        name: "Seekh Kabab",
        image: "./lovable-uploads/b75dcfc4-eeeb-440c-8f7b-9028c54c7113.png",
        category: "non-vegetarian"
      }
    ],
    quickRecipes: [
      {
        id: "q1",
        name: "Jeera Rice",
        image: "./lovable-uploads/fb2368df-0b57-4c59-8de1-f033ec9dace7.png",
        category: "quick"
      },
      {
        id: "q2",
        name: "Veg Pulao",
        image: "./lovable-uploads/fc7a0ace-79fe-4b84-a967-59c94922f70f.png",
        category: "quick"
      },
      {
        id: "q3",
        name: "Chana Masala",
        image: "./lovable-uploads/ce801831-6775-4cd9-acbd-547365000616.png",
        category: "quick"
      },
      {
        id: "q4",
        name: "Seekh Kabab",
        image: "./lovable-uploads/b75dcfc4-eeeb-440c-8f7b-9028c54c7113.png",
        category: "quick"
      }
    ],
    
    // Recipe details - sample for Chicken Biryani
    recipeDetails: {
      "nv2": {
        id: "nv2",
        name: "Chicken Biryani",
        image: "./lovable-uploads/fc7a0ace-79fe-4b84-a967-59c94922f70f.png",
        rating: 4.5,
        time: "1 hr 20 min",
        timeDetails: {
          prep: "40 minutes",
          cooking: "40 minutes",
          total: "1 hour 20 minutes"
        },
        ingredients: {
          marinade: [
            "500g chicken (cut into pieces)",
            "1 cup yogurt",
            "1 tablespoon ginger-garlic paste",
            "1 teaspoon red chili powder",
            "1 teaspoon turmeric powder",
            "1 teaspoon garam masala",
            "1 tablespoon lemon juice",
            "Salt to taste"
          ],
          rice: [
            "2 cups basmati rice",
            "4 cups water",
            "2 bay leaves",
            "4 cloves",
            "1 cinnamon stick",
            "4 cardamom pods",
            "1 teaspoon salt"
          ],
          layering: [
            "2 tablespoons ghee",
            "1 large onion, thinly sliced and fried",
            "2 tablespoons chopped mint leaves",
            "2 tablespoons chopped coriander leaves",
            "1/4 teaspoon saffron soaked in 2 tablespoons warm milk"
          ]
        }
      }
    }
  };