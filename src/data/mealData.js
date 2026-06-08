// tags: which health goals this meal suits
// avoid: nutrients this meal is NOT suitable for limiting (high in that nutrient)
// dietaryFlags: 'vegetarian','vegan','gluten-free','dairy-free'
// allergens: 'nuts','shellfish','eggs','gluten','dairy'

export const meals = [
  // ─── BREAKFASTS ────────────────────────────────────────────────────────────
  {
    id: 'b1', name: 'Oatmeal with Blueberries and Honey',
    category: 'breakfast',
    tags: ['heart-health', 'general-wellness', 'diabetic-friendly'],
    avoid: [],
    dietaryFlags: ['vegetarian', 'vegan', 'dairy-free'],
    allergens: ['gluten'],
  },
  {
    id: 'b2', name: 'Scrambled Egg Whites with Bell Peppers',
    category: 'breakfast',
    tags: ['kidney-health', 'low-sodium', 'heart-health', 'general-wellness'],
    avoid: ['phosphorus'],
    dietaryFlags: ['vegetarian', 'gluten-free', 'dairy-free'],
    allergens: ['eggs'],
  },
  {
    id: 'b3', name: 'Greek Yogurt with Strawberries',
    category: 'breakfast',
    tags: ['general-wellness', 'heart-health', 'diabetic-friendly'],
    avoid: ['potassium', 'phosphorus'],
    dietaryFlags: ['vegetarian', 'gluten-free'],
    allergens: ['dairy'],
  },
  {
    id: 'b4', name: 'Avocado Toast on Sourdough',
    category: 'breakfast',
    tags: ['heart-health', 'general-wellness'],
    avoid: ['potassium', 'sodium'],
    dietaryFlags: ['vegetarian', 'vegan', 'dairy-free'],
    allergens: ['gluten'],
  },
  {
    id: 'b5', name: 'Smoothie Bowl with Mango and Chia Seeds',
    category: 'breakfast',
    tags: ['general-wellness', 'heart-health'],
    avoid: ['potassium'],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'b6', name: 'Cream of Rice with Cinnamon and Apple',
    category: 'breakfast',
    tags: ['kidney-health', 'low-sodium', 'diabetic-friendly'],
    avoid: [],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'b7', name: 'Veggie Omelette with Spinach and Mushrooms',
    category: 'breakfast',
    tags: ['heart-health', 'general-wellness', 'diabetic-friendly'],
    avoid: ['phosphorus'],
    dietaryFlags: ['vegetarian', 'gluten-free'],
    allergens: ['eggs', 'dairy'],
  },
  {
    id: 'b8', name: 'Rice Cakes with Almond Butter and Banana',
    category: 'breakfast',
    tags: ['general-wellness', 'heart-health'],
    avoid: ['potassium'],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: ['nuts'],
  },
  {
    id: 'b9', name: 'Whole Wheat Pancakes with Fresh Berries',
    category: 'breakfast',
    tags: ['general-wellness', 'heart-health'],
    avoid: [],
    dietaryFlags: ['vegetarian'],
    allergens: ['gluten', 'eggs', 'dairy'],
  },
  {
    id: 'b10', name: 'Low-Sodium Turkey and Veggie Breakfast Wrap',
    category: 'breakfast',
    tags: ['low-sodium', 'diabetic-friendly', 'general-wellness'],
    avoid: [],
    dietaryFlags: [],
    allergens: ['gluten', 'eggs'],
  },
  {
    id: 'b11', name: 'Steel-Cut Oats with Walnuts and Cinnamon',
    category: 'breakfast',
    tags: ['heart-health', 'diabetic-friendly', 'general-wellness'],
    avoid: ['potassium'],
    dietaryFlags: ['vegetarian', 'vegan', 'dairy-free'],
    allergens: ['gluten', 'nuts'],
  },
  {
    id: 'b12', name: 'Egg White Frittata with Zucchini',
    category: 'breakfast',
    tags: ['kidney-health', 'low-sodium', 'heart-health'],
    avoid: ['phosphorus'],
    dietaryFlags: ['vegetarian', 'gluten-free', 'dairy-free'],
    allergens: ['eggs'],
  },
  {
    id: 'b13', name: 'Cottage Cheese with Pineapple',
    category: 'breakfast',
    tags: ['general-wellness', 'diabetic-friendly'],
    avoid: ['potassium', 'phosphorus', 'sodium'],
    dietaryFlags: ['vegetarian', 'gluten-free'],
    allergens: ['dairy'],
  },
  {
    id: 'b14', name: 'Gluten-Free Granola with Almond Milk',
    category: 'breakfast',
    tags: ['general-wellness', 'heart-health'],
    avoid: [],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: ['nuts'],
  },
  {
    id: 'b15', name: 'Poached Eggs on Rye Toast with Tomato',
    category: 'breakfast',
    tags: ['heart-health', 'general-wellness'],
    avoid: ['phosphorus'],
    dietaryFlags: ['vegetarian', 'dairy-free'],
    allergens: ['gluten', 'eggs'],
  },
  {
    id: 'b16', name: 'Chia Pudding with Coconut Milk and Raspberries',
    category: 'breakfast',
    tags: ['diabetic-friendly', 'heart-health', 'general-wellness'],
    avoid: [],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'b17', name: 'Buckwheat Porridge with Peach Slices',
    category: 'breakfast',
    tags: ['kidney-health', 'general-wellness', 'diabetic-friendly'],
    avoid: [],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'b18', name: 'Low-Sodium Smoked Salmon on Rice Crackers',
    category: 'breakfast',
    tags: ['heart-health', 'low-sodium', 'kidney-health'],
    avoid: ['potassium', 'phosphorus'],
    dietaryFlags: ['gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'b19', name: 'Banana Oat Pancakes (No Added Sugar)',
    category: 'breakfast',
    tags: ['diabetic-friendly', 'general-wellness', 'heart-health'],
    avoid: ['potassium'],
    dietaryFlags: ['vegetarian', 'dairy-free'],
    allergens: ['gluten', 'eggs'],
  },
  {
    id: 'b20', name: 'Tofu Scramble with Turmeric and Peppers',
    category: 'breakfast',
    tags: ['heart-health', 'general-wellness', 'diabetic-friendly'],
    avoid: ['potassium', 'phosphorus'],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'b21', name: 'Cream of Wheat with Brown Sugar and Peaches',
    category: 'breakfast',
    tags: ['kidney-health', 'low-sodium'],
    avoid: [],
    dietaryFlags: ['vegetarian', 'vegan', 'dairy-free'],
    allergens: ['gluten'],
  },
  {
    id: 'b22', name: 'Plain Rice with Soft-Boiled Egg',
    category: 'breakfast',
    tags: ['kidney-health', 'low-sodium'],
    avoid: ['phosphorus'],
    dietaryFlags: ['vegetarian', 'gluten-free', 'dairy-free'],
    allergens: ['eggs'],
  },

  // ─── LUNCHES ────────────────────────────────────────────────────────────────
  {
    id: 'l1', name: 'Grilled Chicken Salad with Olive Oil Dressing',
    category: 'lunch',
    tags: ['heart-health', 'diabetic-friendly', 'low-sodium', 'general-wellness'],
    avoid: [],
    dietaryFlags: ['gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'l2', name: 'Lentil Soup with Carrots and Celery',
    category: 'lunch',
    tags: ['heart-health', 'general-wellness', 'diabetic-friendly'],
    avoid: ['potassium', 'phosphorus'],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'l3', name: 'Turkey and Lettuce Wrap (Low Sodium)',
    category: 'lunch',
    tags: ['low-sodium', 'diabetic-friendly', 'general-wellness'],
    avoid: [],
    dietaryFlags: ['dairy-free'],
    allergens: ['gluten'],
  },
  {
    id: 'l4', name: 'Quinoa Bowl with Roasted Vegetables',
    category: 'lunch',
    tags: ['heart-health', 'general-wellness', 'kidney-health'],
    avoid: ['potassium', 'phosphorus'],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'l5', name: 'Tuna Salad on Rice Cakes',
    category: 'lunch',
    tags: ['kidney-health', 'low-sodium', 'heart-health'],
    avoid: ['phosphorus'],
    dietaryFlags: ['gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'l6', name: 'Vegetable Stir-Fry with Brown Rice',
    category: 'lunch',
    tags: ['heart-health', 'general-wellness', 'diabetic-friendly'],
    avoid: ['potassium'],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'l7', name: 'Chickpea and Cucumber Mediterranean Bowl',
    category: 'lunch',
    tags: ['heart-health', 'general-wellness'],
    avoid: ['potassium', 'phosphorus'],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'l8', name: 'Baked Salmon with Steamed Broccoli and Rice',
    category: 'lunch',
    tags: ['heart-health', 'diabetic-friendly', 'general-wellness'],
    avoid: ['potassium', 'phosphorus'],
    dietaryFlags: ['gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'l9', name: 'Low-Sodium Chicken Noodle Soup',
    category: 'lunch',
    tags: ['low-sodium', 'general-wellness', 'kidney-health'],
    avoid: [],
    dietaryFlags: ['dairy-free'],
    allergens: ['gluten'],
  },
  {
    id: 'l10', name: 'White Bean and Kale Soup',
    category: 'lunch',
    tags: ['heart-health', 'general-wellness'],
    avoid: ['potassium', 'phosphorus'],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'l11', name: 'Egg Salad on Gluten-Free Bread',
    category: 'lunch',
    tags: ['general-wellness', 'low-sodium', 'diabetic-friendly'],
    avoid: ['phosphorus'],
    dietaryFlags: ['vegetarian', 'gluten-free'],
    allergens: ['eggs', 'dairy'],
  },
  {
    id: 'l12', name: 'Grilled Shrimp Tacos on Corn Tortillas',
    category: 'lunch',
    tags: ['heart-health', 'low-sodium', 'general-wellness'],
    avoid: [],
    dietaryFlags: ['gluten-free', 'dairy-free'],
    allergens: ['shellfish'],
  },
  {
    id: 'l13', name: 'Pasta Primavera with Olive Oil (Low Sodium)',
    category: 'lunch',
    tags: ['general-wellness', 'heart-health'],
    avoid: [],
    dietaryFlags: ['vegetarian', 'dairy-free'],
    allergens: ['gluten', 'eggs'],
  },
  {
    id: 'l14', name: 'Cauliflower Rice Bowl with Grilled Chicken',
    category: 'lunch',
    tags: ['kidney-health', 'low-sodium', 'diabetic-friendly'],
    avoid: [],
    dietaryFlags: ['gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'l15', name: 'Tofu and Vegetable Noodle Soup',
    category: 'lunch',
    tags: ['heart-health', 'general-wellness', 'kidney-health'],
    avoid: ['potassium', 'phosphorus'],
    dietaryFlags: ['vegetarian', 'vegan', 'dairy-free'],
    allergens: ['gluten'],
  },
  {
    id: 'l16', name: 'Tabbouleh with Grilled Chicken Strips',
    category: 'lunch',
    tags: ['general-wellness', 'heart-health', 'diabetic-friendly'],
    avoid: ['potassium'],
    dietaryFlags: ['dairy-free'],
    allergens: ['gluten'],
  },
  {
    id: 'l17', name: 'Arugula Salad with Grilled Pear and Goat Cheese',
    category: 'lunch',
    tags: ['general-wellness', 'heart-health'],
    avoid: ['sodium'],
    dietaryFlags: ['vegetarian', 'gluten-free'],
    allergens: ['dairy'],
  },
  {
    id: 'l18', name: 'Black Bean Tacos on Corn Tortillas',
    category: 'lunch',
    tags: ['heart-health', 'diabetic-friendly', 'general-wellness'],
    avoid: ['potassium', 'phosphorus'],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'l19', name: 'Baked Cod with Green Beans and Lemon',
    category: 'lunch',
    tags: ['kidney-health', 'low-sodium', 'heart-health'],
    avoid: ['phosphorus'],
    dietaryFlags: ['gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'l20', name: 'Cucumber, Bell Pepper, and Hummus Bowl',
    category: 'lunch',
    tags: ['general-wellness', 'low-sodium', 'diabetic-friendly'],
    avoid: [],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'l21', name: 'Chicken Lettuce Cups with Ginger-Lime Drizzle',
    category: 'lunch',
    tags: ['diabetic-friendly', 'low-sodium', 'kidney-health'],
    avoid: [],
    dietaryFlags: ['gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'l22', name: 'Roasted Red Pepper and Tomato Soup with Rice Bread',
    category: 'lunch',
    tags: ['kidney-health', 'low-sodium', 'general-wellness'],
    avoid: ['potassium'],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },

  // ─── DINNERS ────────────────────────────────────────────────────────────────
  {
    id: 'd1', name: 'Baked Herb Chicken with Roasted Cauliflower',
    category: 'dinner',
    tags: ['kidney-health', 'low-sodium', 'diabetic-friendly', 'general-wellness'],
    avoid: [],
    dietaryFlags: ['gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'd2', name: 'Grilled Salmon with Asparagus and Wild Rice',
    category: 'dinner',
    tags: ['heart-health', 'general-wellness', 'diabetic-friendly'],
    avoid: ['potassium', 'phosphorus'],
    dietaryFlags: ['gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'd3', name: 'Vegetable and Chickpea Curry over Basmati Rice',
    category: 'dinner',
    tags: ['heart-health', 'general-wellness'],
    avoid: ['potassium', 'phosphorus'],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'd4', name: 'Turkey Meatballs with Zucchini Noodles',
    category: 'dinner',
    tags: ['low-sodium', 'diabetic-friendly', 'heart-health', 'kidney-health'],
    avoid: [],
    dietaryFlags: ['gluten-free', 'dairy-free'],
    allergens: ['eggs'],
  },
  {
    id: 'd5', name: 'Steamed White Fish with Bok Choy and Brown Rice',
    category: 'dinner',
    tags: ['kidney-health', 'low-sodium', 'heart-health'],
    avoid: ['phosphorus'],
    dietaryFlags: ['gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'd6', name: 'Stuffed Bell Peppers with Ground Turkey and Rice',
    category: 'dinner',
    tags: ['general-wellness', 'low-sodium', 'diabetic-friendly'],
    avoid: [],
    dietaryFlags: ['gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'd7', name: 'Lemon Garlic Shrimp with Pasta',
    category: 'dinner',
    tags: ['heart-health', 'general-wellness'],
    avoid: ['phosphorus'],
    dietaryFlags: ['dairy-free'],
    allergens: ['shellfish', 'gluten', 'eggs'],
  },
  {
    id: 'd8', name: 'Tofu Stir-Fry with Snap Peas and Ginger',
    category: 'dinner',
    tags: ['heart-health', 'diabetic-friendly', 'general-wellness', 'kidney-health'],
    avoid: ['potassium', 'phosphorus'],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'd9', name: 'Roasted Chicken Thighs with Green Beans',
    category: 'dinner',
    tags: ['general-wellness', 'low-sodium', 'kidney-health'],
    avoid: [],
    dietaryFlags: ['gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'd10', name: 'Black Bean Enchiladas with Mild Sauce (Low Sodium)',
    category: 'dinner',
    tags: ['heart-health', 'general-wellness'],
    avoid: ['potassium', 'phosphorus'],
    dietaryFlags: ['vegetarian', 'gluten-free'],
    allergens: ['dairy'],
  },
  {
    id: 'd11', name: 'Baked Tilapia with Lemon and Herbs',
    category: 'dinner',
    tags: ['kidney-health', 'low-sodium', 'heart-health', 'diabetic-friendly'],
    avoid: ['phosphorus'],
    dietaryFlags: ['gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'd12', name: 'Chicken and Vegetable Soup (Low Sodium)',
    category: 'dinner',
    tags: ['low-sodium', 'kidney-health', 'general-wellness', 'diabetic-friendly'],
    avoid: [],
    dietaryFlags: ['gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'd13', name: 'Mediterranean Baked Cod with Olives and Tomatoes',
    category: 'dinner',
    tags: ['heart-health', 'general-wellness'],
    avoid: ['sodium'],
    dietaryFlags: ['gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'd14', name: 'Eggplant and Lentil Stew',
    category: 'dinner',
    tags: ['heart-health', 'general-wellness', 'diabetic-friendly'],
    avoid: ['potassium', 'phosphorus'],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'd15', name: 'Grilled Flank Steak with Roasted Zucchini',
    category: 'dinner',
    tags: ['diabetic-friendly', 'general-wellness', 'low-sodium'],
    avoid: ['phosphorus', 'saturated-fat'],
    dietaryFlags: ['gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'd16', name: 'Cauliflower Fried Rice with Edamame',
    category: 'dinner',
    tags: ['diabetic-friendly', 'heart-health', 'general-wellness'],
    avoid: ['potassium', 'phosphorus'],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'd17', name: 'Turkey and Vegetable Stew over Mashed Cauliflower',
    category: 'dinner',
    tags: ['kidney-health', 'low-sodium', 'diabetic-friendly'],
    avoid: [],
    dietaryFlags: ['gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'd18', name: 'Penne with Roasted Vegetable Marinara (Low Sodium)',
    category: 'dinner',
    tags: ['heart-health', 'general-wellness'],
    avoid: ['potassium'],
    dietaryFlags: ['vegetarian', 'vegan', 'dairy-free'],
    allergens: ['gluten'],
  },
  {
    id: 'd19', name: 'Herb-Crusted Pork Tenderloin with Green Beans',
    category: 'dinner',
    tags: ['general-wellness', 'low-sodium', 'diabetic-friendly'],
    avoid: ['saturated-fat'],
    dietaryFlags: ['gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'd20', name: 'Stuffed Acorn Squash with Wild Rice and Cranberries',
    category: 'dinner',
    tags: ['heart-health', 'general-wellness', 'diabetic-friendly'],
    avoid: ['potassium'],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 'd21', name: 'Steamed Dumplings with Ginger Dipping Sauce',
    category: 'dinner',
    tags: ['general-wellness'],
    avoid: ['sodium', 'phosphorus'],
    dietaryFlags: ['dairy-free'],
    allergens: ['gluten', 'eggs'],
  },
  {
    id: 'd22', name: 'Pan-Seared Chicken with Mushroom Sauce',
    category: 'dinner',
    tags: ['general-wellness', 'heart-health', 'diabetic-friendly'],
    avoid: ['phosphorus', 'saturated-fat'],
    dietaryFlags: ['gluten-free'],
    allergens: ['dairy'],
  },

  // ─── SNACKS ─────────────────────────────────────────────────────────────────
  {
    id: 's1', name: 'Apple Slices with Peanut Butter',
    category: 'snack',
    tags: ['general-wellness', 'heart-health', 'diabetic-friendly'],
    avoid: ['potassium'],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: ['nuts'],
  },
  {
    id: 's2', name: 'Rice Crackers with Hummus',
    category: 'snack',
    tags: ['kidney-health', 'low-sodium', 'general-wellness'],
    avoid: [],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 's3', name: 'Hard-Boiled Egg with Cucumber Slices',
    category: 'snack',
    tags: ['diabetic-friendly', 'low-sodium', 'general-wellness', 'kidney-health'],
    avoid: ['phosphorus'],
    dietaryFlags: ['vegetarian', 'gluten-free', 'dairy-free'],
    allergens: ['eggs'],
  },
  {
    id: 's4', name: 'Baby Carrots with Low-Sodium Ranch',
    category: 'snack',
    tags: ['low-sodium', 'general-wellness', 'diabetic-friendly'],
    avoid: [],
    dietaryFlags: ['vegetarian', 'gluten-free'],
    allergens: ['dairy', 'eggs'],
  },
  {
    id: 's5', name: 'Mixed Berry Smoothie (No Added Sugar)',
    category: 'snack',
    tags: ['heart-health', 'general-wellness', 'diabetic-friendly'],
    avoid: ['potassium'],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 's6', name: 'Handful of Unsalted Almonds',
    category: 'snack',
    tags: ['heart-health', 'general-wellness', 'diabetic-friendly'],
    avoid: ['potassium', 'phosphorus'],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: ['nuts'],
  },
  {
    id: 's7', name: 'Cottage Cheese with Cucumber',
    category: 'snack',
    tags: ['general-wellness', 'low-sodium', 'diabetic-friendly'],
    avoid: ['sodium', 'phosphorus'],
    dietaryFlags: ['vegetarian', 'gluten-free'],
    allergens: ['dairy'],
  },
  {
    id: 's8', name: 'Celery Sticks with Sunflower Seed Butter',
    category: 'snack',
    tags: ['kidney-health', 'low-sodium', 'general-wellness'],
    avoid: ['phosphorus'],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 's9', name: 'Popcorn (Air-Popped, Unsalted)',
    category: 'snack',
    tags: ['low-sodium', 'general-wellness', 'heart-health'],
    avoid: [],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 's10', name: 'Sliced Pear with String Cheese',
    category: 'snack',
    tags: ['general-wellness', 'diabetic-friendly'],
    avoid: ['sodium', 'phosphorus'],
    dietaryFlags: ['vegetarian', 'gluten-free'],
    allergens: ['dairy'],
  },
  {
    id: 's11', name: 'Edamame (Lightly Salted)',
    category: 'snack',
    tags: ['heart-health', 'general-wellness', 'diabetic-friendly'],
    avoid: ['potassium', 'phosphorus'],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 's12', name: 'Watermelon Cubes',
    category: 'snack',
    tags: ['kidney-health', 'low-sodium', 'general-wellness', 'heart-health'],
    avoid: [],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 's13', name: 'Gluten-Free Granola Bar',
    category: 'snack',
    tags: ['general-wellness', 'heart-health'],
    avoid: [],
    dietaryFlags: ['vegetarian', 'gluten-free', 'dairy-free'],
    allergens: ['nuts'],
  },
  {
    id: 's14', name: 'Tomato and Mozzarella Skewers',
    category: 'snack',
    tags: ['general-wellness', 'heart-health'],
    avoid: ['sodium', 'phosphorus'],
    dietaryFlags: ['vegetarian', 'gluten-free'],
    allergens: ['dairy'],
  },
  {
    id: 's15', name: 'Sliced Bell Peppers with Guacamole',
    category: 'snack',
    tags: ['heart-health', 'general-wellness', 'low-sodium', 'diabetic-friendly'],
    avoid: ['potassium'],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 's16', name: 'Frozen Blueberry and Banana Bites',
    category: 'snack',
    tags: ['heart-health', 'general-wellness'],
    avoid: ['potassium'],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 's17', name: 'Wasa Crackers with Avocado',
    category: 'snack',
    tags: ['heart-health', 'general-wellness', 'diabetic-friendly'],
    avoid: ['potassium'],
    dietaryFlags: ['vegetarian', 'vegan', 'dairy-free'],
    allergens: ['gluten'],
  },
  {
    id: 's18', name: 'Plain Rice Cake with Thin Apple Slices',
    category: 'snack',
    tags: ['kidney-health', 'low-sodium', 'diabetic-friendly', 'general-wellness'],
    avoid: [],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 's19', name: 'Low-Fat Greek Yogurt with Honey',
    category: 'snack',
    tags: ['general-wellness', 'diabetic-friendly', 'heart-health'],
    avoid: ['potassium', 'phosphorus'],
    dietaryFlags: ['vegetarian', 'gluten-free'],
    allergens: ['dairy'],
  },
  {
    id: 's20', name: 'Cucumber Rounds with Smoked Salmon',
    category: 'snack',
    tags: ['heart-health', 'low-sodium', 'kidney-health'],
    avoid: ['phosphorus'],
    dietaryFlags: ['gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 's21', name: 'Trail Mix (Raisins, Sunflower Seeds, Coconut)',
    category: 'snack',
    tags: ['general-wellness', 'heart-health'],
    avoid: ['potassium'],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },
  {
    id: 's22', name: 'Baked Apple with Cinnamon',
    category: 'snack',
    tags: ['kidney-health', 'low-sodium', 'diabetic-friendly', 'general-wellness'],
    avoid: [],
    dietaryFlags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    allergens: [],
  },
]

const DAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
const GOAL_TAG_MAP = {
  'heart-health':     'heart-health',
  'kidney-health':    'kidney-health',
  'diabetic-friendly':'diabetic-friendly',
  'low-sodium':       'low-sodium',
  'general-wellness': 'general-wellness',
}
const CONDITION_TAG_MAP = {
  'ckd-1-2':     'kidney-health',
  'ckd-3':       'kidney-health',
  'ckd-4-5':     'kidney-health',
  'hypertension':'heart-health',
  'diabetes':    'diabetic-friendly',
  'heart':       'heart-health',
  'none':        'general-wellness',
}

function pickMeals(pool, count, usedIds = new Set()) {
  const available = pool.filter(m => !usedIds.has(m.id))
  const source = available.length >= count ? available : pool
  const shuffled = [...source].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

export function getQuickPlan(goal) {
  const tag = GOAL_TAG_MAP[goal] || 'general-wellness'
  const byCategory = cat => meals.filter(m => m.category === cat && m.tags.includes(tag))

  const breakfasts = byCategory('breakfast')
  const lunches    = byCategory('lunch')
  const dinners    = byCategory('dinner')
  const snacks     = byCategory('snack')

  // Fallback to general pool if tag pool is too small
  const bPool = breakfasts.length >= 7 ? breakfasts : meals.filter(m => m.category === 'breakfast')
  const lPool = lunches.length >= 7    ? lunches    : meals.filter(m => m.category === 'lunch')
  const dPool = dinners.length >= 7    ? dinners    : meals.filter(m => m.category === 'dinner')
  const sPool = snacks.length >= 7     ? snacks     : meals.filter(m => m.category === 'snack')

  const plan = {}
  DAYS.forEach((day, i) => {
    plan[day] = {
      breakfast: bPool[i % bPool.length].name,
      lunch:     lPool[i % lPool.length].name,
      dinner:    dPool[i % dPool.length].name,
      snack:     sPool[i % sPool.length].name,
    }
  })
  return plan
}

export function getAdvancedPlan({ condition, dietary, avoid, allergies }) {
  const tag = CONDITION_TAG_MAP[condition] || 'general-wellness'

  const dietaryArr  = dietary  ? [dietary]  : []
  const avoidArr    = avoid    || []
  const allergyArr  = allergies || []

  const filterMeals = (cat) =>
    meals.filter(m => {
      if (m.category !== cat) return false
      // Must suit the condition tag (or general wellness as fallback)
      if (!m.tags.includes(tag) && !m.tags.includes('general-wellness')) return false
      // Must not contain restricted allergens
      if (allergyArr.some(a => m.allergens.includes(a))) return false
      // Must not have nutrients the user is trying to limit in its avoid list
      if (avoidArr.some(n => m.avoid.includes(n))) return false
      // Must match dietary preference
      if (dietaryArr.length > 0 && !dietaryArr.every(d => m.dietaryFlags.includes(d))) return false
      return true
    })

  const build = (cat) => {
    let pool = filterMeals(cat)
    // Loosen if we can't fill 7 days
    if (pool.length < 1) pool = meals.filter(m => m.category === cat && allergyArr.every(a => !m.allergens.includes(a)))
    if (pool.length < 1) pool = meals.filter(m => m.category === cat)
    return pool
  }

  const bPool = build('breakfast')
  const lPool = build('lunch')
  const dPool = build('dinner')
  const sPool = build('snack')

  const restrictions = [
    ...(condition && condition !== 'none' ? [condition.toUpperCase().replace(/-/g, ' ')] : []),
    ...dietaryArr,
    ...avoidArr.map(n => `Low ${n}`),
    ...allergyArr.map(a => `No ${a}`),
  ].filter(Boolean)

  const plan = {}
  DAYS.forEach((day, i) => {
    plan[day] = {
      breakfast:    bPool[i % bPool.length].name,
      lunch:        lPool[i % lPool.length].name,
      dinner:       dPool[i % dPool.length].name,
      snack:        sPool[i % sPool.length].name,
      restrictions,
    }
  })
  return plan
}
